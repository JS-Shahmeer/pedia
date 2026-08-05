# Pedia Backend - Production Deployment Guide
## Hostinger VPS Setup for api.writeonpedia.com

---

## **Phase 4: SSL Certificate with Let's Encrypt**

### **Step 1: Install Certbot**

```bash
sudo apt update
sudo apt install snapd -y
sudo snap install core && sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

### **Step 2: Get SSL Certificate**

```bash
sudo certbot --nginx -d api.writeonpedia.com
```

**Follow the prompts:**
- Enter your email for renewal notifications
- Agree to terms (A)
- Choose whether to share email with EFF (Y/N)
- **Select option to redirect HTTP to HTTPS** (IMPORTANT!)

**Expected Output:**
```
Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/api.writeonpedia.com/fullchain.pem
Key is saved at: /etc/letsencrypt/live/api.writeonpedia.com/privkey.pem
Congratulations! You have successfully enabled HTTPS on your website!
```

### **Step 3: Verify SSL Installation**

```bash
# Check certificate details
sudo certbot certificates

# Test SSL with curl
curl -I https://api.writeonpedia.com

# Expected response: HTTP/2 200
```

### **Step 4: Test Auto-Renewal**

```bash
# Dry run (doesn't actually renew)
sudo certbot renew --dry-run

# If successful, auto-renewal is configured
# Certbot creates a systemd timer that runs twice daily
```

---

## **Phase 5: Production Setup**

### **Step 1: Start Application with PM2**

```bash
cd /var/www/pedia-backend

# Start the app
pm2 start server.js --name "pedia-backend"

# Make it auto-start on server reboot
pm2 startup

# Save current PM2 process list
pm2 save

# Verify it's running
pm2 list
pm2 logs pedia-backend
```

**Expected Output:**
```
[PM2] Spawning pedia-backend in cluster_mode
[ONLINE] pedia-backend
    script path: /var/www/pedia-backend/server.js
```

### **Step 2: Firewall Configuration**

```bash
# Check current rules
sudo ufw status

# Allow SSH (CRITICAL - do this first!)
sudo ufw allow 22/tcp

# Allow HTTP & HTTPS through Nginx
sudo ufw allow 'Nginx Full'

# Enable firewall
sudo ufw --force enable

# Verify (should show SSH, Nginx Full as allowed)
sudo ufw status
```

**Important:** The internal port 5000 should NOT be publicly exposed. Nginx proxies external traffic (80/443) to your internal port.

### **Step 3: Verify Nginx Configuration**

Your Nginx config should look like this:

```nginx
# /etc/nginx/sites-available/api.writeonpedia.com

server {
    listen 80;
    server_name api.writeonpedia.com;
    # Certbot will auto-redirect to HTTPS
}

server {
    listen 443 ssl http2;
    server_name api.writeonpedia.com;

    ssl_certificate /etc/letsencrypt/live/api.writeonpedia.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.writeonpedia.com/privkey.pem;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Test Nginx config:
```bash
sudo nginx -t
# Should output: nginx: configuration file test is successful
```

---

## **Phase 5 Continued: Domain Configuration**

### **Step 1: Update Hostinger DNS**

1. **Login to Hostinger Dashboard**
2. **Go to DNS Settings** (Domain Management → DNS)
3. **Add/Update A Record:**
   - **Type:** A Record
   - **Name:** api
   - **Value:** YOUR_VPS_IP_ADDRESS
   - **TTL:** 3600 (1 hour) or Auto

4. **Delete any old records** pointing to different IPs

**Example DNS Entry:**
```
Subdomain: api.writeonpedia.com
Type: A
Value: 192.168.1.100 (your VPS IP)
TTL: 3600
```

### **Step 2: Verify DNS Propagation**

```bash
# Check if DNS is propagated (may take up to 24 hours)
nslookup api.writeonpedia.com
dig api.writeonpedia.com

# Should show your VPS IP in response
```

**First propagation may take:**
- Usually: 5 minutes - 2 hours
- Worst case: 24 hours
- Check status: https://www.whatsmydns.net/

### **Step 3: Test Your API**

Once DNS propagates:

```bash
# Test backend endpoints
curl -X POST https://api.writeonpedia.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "service": "wikipedia-page-creation",
    "message": "Testing API"
  }'

# Should return: {"message":"Email sent successfully"}
```

---

## **Phase 6: Monitoring & Maintenance**

### **SSL Renewal Monitoring**

```bash
# Check certificate expiration
sudo certbot certificates

# Expected output shows renewal dates
# Expiry alert sent automatically on day 7 before expiration

# Manual renewal (if needed)
sudo certbot renew --force-renewal

# Automatic renewal status
sudo systemctl status certbot.timer

# View auto-renewal logs
sudo journalctl -u certbot.service
```

### **Application Logs & Monitoring**

```bash
# Real-time PM2 logs
pm2 logs pedia-backend

# PM2 monitoring dashboard
pm2 monit

# View specific logs
pm2 logs pedia-backend --lines 50

# Nginx access logs
sudo tail -f /var/log/nginx/access.log | grep api.writeonpedia.com

# Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Check if app is still running
pm2 status
```

### **Common Maintenance Tasks**

**Restart Application:**
```bash
pm2 restart pedia-backend
```

**Stop/Start Application:**
```bash
# Stop
pm2 stop pedia-backend

# Start
pm2 start pedia-backend
```

**View Process Details:**
```bash
pm2 show pedia-backend
```

**Update Dependencies:**
```bash
cd /var/www/pedia-backend
git pull origin main
npm install --production
pm2 restart pedia-backend
```

**Monitor System Resources:**
```bash
# CPU & Memory usage
pm2 monit

# Server resources
free -h
df -h
top
```

---

## **Phase 6 Continued: Production Checklist**

### **Update Frontend URLs**

In your Next.js app, update all API calls:

```javascript
// OLD (Development)
fetch("http://localhost:5020/api/contact", ...)

// NEW (Production)
fetch("https://api.writeonpedia.com/api/contact", ...)
```

**Files to update:**
- `src/components/Contact.jsx`
- `src/components/QuoteModal.jsx`
- `src/components/Footer.jsx`
- Any other API calls

### **Environment Configuration**

Your `.env` in `/var/www/pedia-backend/.env` should have:

```env
# Production settings
PORT=5000
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@writeonpedia.com
SMTP_PASS=pedia@info111
SMTP_FROM=info@writeonpedia.com
CONTACT_TO_EMAIL=info@writeonpedia.com
```

### **Security Best Practices**

✅ **Already Configured:**
- SSL/TLS encryption (Phase 4)
- Security headers (CORS, CSP, HSTS)
- Firewall rules

✅ **Recommended:**
```bash
# Set proper permissions on sensitive files
chmod 600 /var/www/pedia-backend/.env

# Regular backups
sudo crontab -e
# Add: 0 2 * * * /backup/script.sh
```

---

## **Troubleshooting**

### **SSL Certificate Issues**

```bash
# Renew if expired
sudo certbot renew --force-renewal

# Check logs
sudo tail -f /var/log/letsencrypt/letsencrypt.log
```

### **API Not Responding**

```bash
# Check if app is running
pm2 status

# Restart if needed
pm2 restart pedia-backend

# Check PM2 logs
pm2 logs pedia-backend
```

### **DNS Not Working**

```bash
# Clear DNS cache
sudo systemctl restart systemd-resolved

# Check DNS resolution
nslookup api.writeonpedia.com
dig api.writeonpedia.com +short
```

### **Nginx Configuration Issues**

```bash
# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Restart Nginx
sudo systemctl restart nginx

# View Nginx status
sudo systemctl status nginx
```

---

## **Deployment Summary**

| Phase | Resource | Status |
|-------|----------|--------|
| Backend Code | `/var/www/pedia-backend/` | ✅ Cloned |
| Nginx | Reverse proxy on 80/443 | ✅ Configured |
| SSL Certificate | Let's Encrypt | ⏳ Getting now |
| PM2 | Process manager | ⏳ Starting now |
| Domain Name | api.writeonpedia.com | ⏳ Pointing DNS |
| Firewall | UFW | ⏳ Configuring |
| Auto-renewal | SSL & PM2 | ✅ Auto |

---

## **After Deployment Checklist**

- [ ] SSL certificate obtained and verified
- [ ] PM2 process running and restarting on reboot
- [ ] UFW firewall enabled with proper rules
- [ ] DNS pointing to VPS IP
- [ ] API accessible via `https://api.writeonpedia.com`
- [ ] Frontend updated with production API URLs
- [ ] CORS origins updated if needed
- [ ] Email sending working (test with form submission)
- [ ] SSL auto-renewal verified
- [ ] Monitoring logs configured
- [ ] Backup strategy in place

---

**🚀 Your backend is now production-ready on Hostinger VPS!**
