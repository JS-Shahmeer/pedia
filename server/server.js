require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://localhost:3000',
    'https://writeonpedia.com',
    'https://www.writeonpedia.com'
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 5020;

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, service, message } = req.body;

  try {
    // Send to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Service:</strong> ${service}</p><p><strong>Message:</strong> ${message}</p>`
    });

    // Send to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for contacting Write on Pedia',
      html: `<p>Dear ${name},</p><p>Thank you for your message regarding our ${service} service. We have received your inquiry and will get back to you soon.</p><p>Best regards,<br>Write on Pedia Team</p>`
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.post('/api/quote', async (req, res) => {
  const { name, email, company, service, message } = req.body;

  try {
    // Send to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_TO_EMAIL,
      subject: 'New Quote Request',
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${company}</p><p><strong>Service:</strong> ${service}</p><p><strong>Message:</strong> ${message}</p>`
    });

    // Send to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for your quote request',
      html: `<p>Dear ${name},</p><p>Thank you for your interest in our ${service} service. We will review your request and send you a personalized quote soon.</p><p>Best regards,<br>Write on Pedia Team</p>`
    });

    res.status(200).json({ message: 'Quote request sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;

  try {
    // Send to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_TO_EMAIL,
      subject: 'New Newsletter Subscription',
      html: `<p>New subscriber: ${email}</p>`
    });

    // Send to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Welcome to Write on Pedia Newsletter',
      html: `<p>Thank you for subscribing to our newsletter. Stay tuned for the latest updates on Wikipedia services.</p><p>Best regards,<br>Write on Pedia Team</p>`
    });

    res.status(200).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to subscribe' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});