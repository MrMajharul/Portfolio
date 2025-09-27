// Contact Form Configuration
// This file contains instructions for setting up different contact form methods

const CONTACT_METHODS = {
    // Method 1: EmailJS (Recommended for static sites)
    emailjs: {
        setup: `
        1. Go to https://www.emailjs.com/
        2. Create a free account
        3. Create an email service (Gmail, Outlook, etc.)
        4. Create an email template
        5. Get your Public Key, Service ID, and Template ID
        6. Replace the values below:
        `,
        publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
        serviceId: 'YOUR_SERVICE_ID',
        templateId: 'YOUR_TEMPLATE_ID',
        implementation: `
        // In index.html head section, EmailJS is already included
        // In script.js, uncomment the EmailJS initialization and method
        `
    },

    // Method 2: Formspree (Easy setup)
    formspree: {
        setup: `
        1. Go to https://formspree.io/
        2. Create a free account
        3. Create a new form
        4. Get your form endpoint
        5. Replace YOUR_FORM_ID in script.js
        `,
        endpoint: 'https://formspree.io/f/YOUR_FORM_ID',
        implementation: `
        // Uncomment the Formspree method in script.js
        // Replace YOUR_FORM_ID with your actual form ID
        `
    },

    // Method 3: Netlify Forms (If hosting on Netlify)
    netlify: {
        setup: `
        1. Host your site on Netlify
        2. Add 'netlify' attribute to form tag
        3. Add hidden input for form name
        4. Deploy to Netlify
        `,
        implementation: `
        // Add to form tag: <form netlify name="contact">
        // Add hidden input: <input type="hidden" name="form-name" value="contact" />
        `
    },

    // Method 4: Local Storage (Current demo method)
    localStorage: {
        setup: 'No setup required - already implemented for demo purposes',
        note: 'This method saves form submissions locally in browser storage',
        viewSubmissions: 'Run viewSubmissions() in browser console to see saved messages'
    }
};

// Instructions for setting up EmailJS (most popular method)
const EMAILJS_SETUP_GUIDE = `
📧 EmailJS Setup Guide:

1. Sign up at https://www.emailjs.com/
2. Create a new Email Service:
   - Choose your email provider (Gmail recommended)
   - Follow the authentication steps
   
3. Create an Email Template:
   - Use these template variables:
     {{from_name}} - sender's name
     {{from_email}} - sender's email
     {{subject}} - email subject
     {{message}} - email message
     
4. Get your credentials:
   - Public Key (from Account page)
   - Service ID (from Email Services)
   - Template ID (from Email Templates)
   
5. Update script.js:
   - Uncomment emailjs.init() line
   - Add your Public Key
   - Uncomment sendWithEmailJS function
   - Add your Service ID and Template ID
   
6. Test the form!

Example EmailJS template:
Subject: New Portfolio Contact: {{subject}}

Hello Majharul,

You have received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
`;

console.log(EMAILJS_SETUP_GUIDE);