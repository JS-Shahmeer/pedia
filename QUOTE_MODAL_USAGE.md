# Quote Modal - Usage Guide

The Quote Modal is a reusable component that opens a form for users to request a free quote. It includes smooth animations and SweetAlert notifications.

## Files Created

1. **`src/components/QuoteModal.jsx`** - Main modal component with form
2. **`src/components/QuoteButton.jsx`** - Convenient button wrapper with built-in modal
3. **`src/hooks/useQuoteModal.js`** - Custom hook for modal state management
4. **`app/api/quote/route.js`** - API endpoint for form submission

## Usage

### Option 1: Using QuoteButton (Recommended - Simplest)

```jsx
"use client";

import QuoteButton from "@/src/components/QuoteButton";

export default function MyComponent() {
  return <QuoteButton />;
}
```

### Option 2: Using QuoteModal with Manual State Management

```jsx
"use client";

import { useState } from "react";
import QuoteModal from "@/src/components/QuoteModal";

export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Get Free Quote
      </button>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
```

### Option 3: Using the Custom Hook

```jsx
"use client";

import { useQuoteModal } from "@/src/hooks/useQuoteModal";
import QuoteModal from "@/src/components/QuoteModal";

export default function MyComponent() {
  const { isOpen, openModal, closeModal } = useQuoteModal();

  return (
    <>
      <button onClick={openModal}>
        Get Free Quote
      </button>
      <QuoteModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
```

## Button Variants

QuoteButton supports different styles:

```jsx
{/* Default Button */}
<QuoteButton variant="default" />

{/* Outline Button */}
<QuoteButton variant="outline" />

{/* Text Link */}
<QuoteButton variant="link" />

{/* Custom Text */}
<QuoteButton>Request a Custom Quote</QuoteButton>
```

## Features

✅ Smooth open/close animations
✅ SweetAlert success and error popups
✅ Form validation
✅ Loading state with spinner
✅ Accessible (aria labels, keyboard support)
✅ Mobile responsive
✅ Custom hook for state management
✅ API endpoint ready for integration

## Form Fields

- Full Name (required)
- Email Address (required)
- Company Name (optional)
- Service Needed (required)
  - Wikipedia Writing
  - Wikipedia Editing
  - Wikipedia Publishing
  - Wikipedia Consultant
- Additional Details (optional textarea)

## API Integration

### Current Setup
The form submits to `/api/quote` endpoint. The API currently:
- Validates required fields
- Validates email format
- Logs to console
- Returns success response

### To Connect to Email Service

Edit `app/api/quote/route.js` and add your email service integration:

```javascript
// Example with SendGrid
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Inside the POST function:
await sgMail.send({
  to: body.email,
  from: 'noreply@writeonpedia.com',
  subject: 'Your Free Quote Request',
  html: `Thank you for your quote request...`,
});
```

## Customization

### Colors
Edit the Tailwind classes in:
- `QuoteModal.jsx` - Change `#b67878` to your brand color
- `QuoteButton.jsx` - Update button colors

### Form Fields
To add/remove fields, edit the form section in `QuoteModal.jsx`

### Animations
Adjust animation duration in the modal by changing the `duration-300` classes

## Example Implementation

Add to Contact section in a page:

```jsx
import QuoteButton from "@/src/components/QuoteButton";

export default function Contact() {
  return (
    <section>
      <h2>Need a Quote?</h2>
      <QuoteButton variant="default">
        Get Your Free Quote Today
      </QuoteButton>
    </section>
  );
}
```

## Troubleshooting

**Modal doesn't open?**
- Ensure parent component is marked with `"use client"`
- Check that `isOpen` state is being updated

**SweetAlert not showing?**
- Verify `sweetalert2` is installed: `npm install sweetalert2`

**Form not submitting?**
- Check browser console for errors
- Verify API endpoint is accessible

## Next Steps

1. Integrate with email service (SendGrid, Mailgun, etc.)
2. Add email template for confirmation
3. Set up backend email notifications
4. Add reCAPTCHA for spam prevention
5. Store submissions in database
