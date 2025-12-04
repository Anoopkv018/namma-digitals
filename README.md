# NammaDigitals - Digital Marketing Agency Website

A modern, responsive website for NammaDigitals digital marketing agency built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🚀 Fast performance with Vite
- 📧 Email notifications for form submissions
- 🎯 SEO optimized
- 💼 Professional business presentation

## Email Configuration

This website uses EmailJS to send form submissions to reachnammadigitals@gmail.com. To set up email notifications:

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Create a free account
3. Create a new service (Gmail, Outlook, etc.)

### 2. Create Email Templates
Create two templates in your EmailJS dashboard:

#### Quote Request Template (ID: `quote_template`)
```
Subject: New Quote Request from {{from_name}}

Hello NammaDigitals Team,

You have received a new quote request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service: {{service}}
Budget: {{budget}}
Timeline: {{timeline}}

Project Description:
{{description}}

Best regards,
Website Contact Form
```

#### Contact Form Template (ID: `contact_template`)
```
Subject: New Contact Form Submission from {{from_name}}

Hello NammaDigitals Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service Interested: {{service}}
Budget Range: {{budget}}

Message:
{{message}}

Best regards,
Website Contact Form
```

### 3. Update Configuration
Update the following values in `src/utils/emailService.ts`:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id'; // Your EmailJS service ID
const EMAILJS_TEMPLATE_ID_QUOTE = 'quote_template'; // Your quote template ID
const EMAILJS_TEMPLATE_ID_CONTACT = 'contact_template'; // Your contact template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Your EmailJS public key
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Contact Information

- **Email**: reachnammadigitals@gmail.com
- **Phone**: +91 8884644589
- **Location**: Mysore, Karnataka, India

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- EmailJS
- Lucide React (Icons)

---

Built with ❤️ by NammaDigitals Team