import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_mieg0gu'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID_QUOTE = 'template_os64z6h'; // Replace with your quote template ID
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_rsgmhso'; // Replace with your contact template ID
const EMAILJS_PUBLIC_KEY = 'u8REeVEHBrS1qJxTa'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

export const sendQuoteNotification = async (formData: QuoteFormData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'reachnammadigitals@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company || 'Not specified',
      service: formData.service,
      budget: formData.budget,
      timeline: formData.timeline || 'Not specified',
      description: formData.description,
      subject: `New Quote Request from ${formData.name}`,
      message_type: 'Quote Request'
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_QUOTE,
      templateParams
    );

    return true;
  } catch (error) {
    console.error('Failed to send quote notification:', error);
    return false;
  }
};

export const sendContactNotification = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'reachnammadigitals@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not specified',
      service: formData.service || 'General Inquiry',
      budget: formData.budget || 'Not specified',
      message: formData.message,
      subject: `New Contact Form Submission from ${formData.name}`,
      message_type: 'Contact Form'
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );

    return true;
  } catch (error) {
    console.error('Failed to send contact notification:', error);
    return false;
  }
};