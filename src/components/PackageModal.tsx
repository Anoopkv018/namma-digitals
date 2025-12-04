import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { sendQuoteNotification } from '../utils/emailService';

interface PackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  packagePrice: string;
  billingCycle: string;
}

const PackageModal: React.FC<PackageModalProps> = ({
  isOpen,
  onClose,
  packageName,
  packagePrice,
  billingCycle,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    currentMarketing: '',
    goals: '',
    timeline: '',
    additionalServices: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Normalize name so it still works with new labels like "Digital Marketing – Startup"
  const baseName =
    packageName.split('–').pop()?.trim().replace('Package', '').trim() || packageName;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const emailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: `${packageName} Package (${billingCycle})`,
        budget: packagePrice,
        timeline: formData.timeline || 'Not specified',
        description: `
Package: ${packageName} Package
Billing: ${billingCycle}
Price: ${packagePrice}
Website: ${formData.website || 'Not provided'}
Current Marketing: ${formData.currentMarketing || 'Not specified'}
Goals: ${formData.goals || 'Not specified'}
Additional Services: ${formData.additionalServices || 'None'}
Message: ${formData.message || 'Not provided'}
        `.trim(),
      };

      const emailSent = await sendQuoteNotification(emailData);

      if (emailSent) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            website: '',
            currentMarketing: '',
            goals: '',
            timeline: '',
            additionalServices: '',
            message: '',
          });
        }, 3000);
      } else {
        alert(
          'There was an error sending your request. Please try again or contact us directly at info@nammadigitals.com'
        );
      }
    } catch (error) {
      console.error('Error submitting package form:', error);
      alert(
        'There was an error sending your request. Please try again or contact us directly at info@nammadigitals.com'
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  const getFormFields = () => {
    // baseName will be "Startup", "Growth", "Enterprise" for Digital Marketing packages
    switch (baseName) {
      case 'Startup':
        return (
          <>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                Current Website (if any)
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div>
              <label
                htmlFor="currentMarketing"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Current Marketing Efforts
              </label>
              <select
                id="currentMarketing"
                name="currentMarketing"
                value={formData.currentMarketing}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select current marketing status</option>
                <option value="none">No current marketing</option>
                <option value="basic-social">Basic social media</option>
                <option value="some-advertising">Some online advertising</option>
                <option value="traditional">Traditional marketing only</option>
              </select>
            </div>

            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                Primary Business Goals *
              </label>
              <textarea
                id="goals"
                name="goals"
                required
                rows={3}
                value={formData.goals}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                placeholder="What are your main goals? (e.g., increase website traffic, generate leads, build brand awareness)"
              ></textarea>
            </div>
          </>
        );

      case 'Growth':
        return (
          <>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                Current Website *
              </label>
              <input
                type="url"
                id="website"
                name="website"
                required
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div>
              <label
                htmlFor="currentMarketing"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Current Marketing Channels *
              </label>
              <select
                id="currentMarketing"
                name="currentMarketing"
                required
                value={formData.currentMarketing}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select current marketing channels</option>
                <option value="social-media">Social Media Marketing</option>
                <option value="google-ads">Google Ads</option>
                <option value="seo">SEO Efforts</option>
                <option value="email-marketing">Email Marketing</option>
                <option value="multiple">Multiple Channels</option>
                <option value="limited">Limited Marketing</option>
              </select>
            </div>

            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                Growth Objectives *
              </label>
              <textarea
                id="goals"
                name="goals"
                required
                rows={3}
                value={formData.goals}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                placeholder="What specific growth targets do you want to achieve? (e.g., 50% increase in leads, expand to new markets)"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="additionalServices"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Additional Services Needed
              </label>
              <select
                id="additionalServices"
                name="additionalServices"
                value={formData.additionalServices}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select additional services</option>
                <option value="website-redesign">Website Redesign</option>
                <option value="ecommerce">E-commerce Setup</option>
                <option value="branding">Branding Package</option>
                <option value="video-production">Video Production</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>
          </>
        );

      case 'Enterprise':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Website *
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  required
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="https://yourcompany.com"
                />
              </div>

              <div>
                <label
                  htmlFor="currentMarketing"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Current Marketing Budget *
                </label>
                <select
                  id="currentMarketing"
                  name="currentMarketing"
                  required
                  value={formData.currentMarketing}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select current budget range</option>
                  <option value="50k-100k">₹50,000 - ₹1,00,000/month</option>
                  <option value="100k-250k">₹1,00,000 - ₹2,50,000/month</option>
                  <option value="250k-500k">₹2,50,000 - ₹5,00,000/month</option>
                  <option value="500k+">₹5,00,000+/month</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                Enterprise Objectives & KPIs *
              </label>
              <textarea
                id="goals"
                name="goals"
                required
                rows={4}
                value={formData.goals}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                placeholder="Describe your enterprise goals, target KPIs, market expansion plans, and success metrics"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="additionalServices"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Required Enterprise Services
              </label>
              <textarea
                id="additionalServices"
                name="additionalServices"
                rows={3}
                value={formData.additionalServices}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                placeholder="List any specific enterprise services needed (custom development, integrations, dedicated support, etc.)"
              ></textarea>
            </div>
          </>
        );

      default:
        // Generic extra questions for website / social / SEO etc.
        return (
          <>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                Website / Social Profile (if any)
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                placeholder="https://yourwebsite.com or social handle"
              />
            </div>
            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                What are you looking to achieve? *
              </label>
              <textarea
                id="goals"
                name="goals"
                required
                rows={3}
                value={formData.goals}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                placeholder="Describe your goals for this package (traffic, leads, sales, branding, etc.)"
              ></textarea>
            </div>
          </>
        );
    }
  };

  const prettyBilling =
    billingCycle.toLowerCase() === 'one-time'
      ? 'One-time Project'
      : billingCycle.charAt(0).toUpperCase() + billingCycle.slice(1) + ' Plan';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6 border-b border-gray-200 flex justify-between items-start gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Get Started with {packageName}</h2>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-800">
                {packagePrice}{' '}
                {billingCycle && billingCycle.toLowerCase() !== 'one-time'
                  ? ` / ${billingCycle}`
                  : ''}
              </span>
              <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                {prettyBilling}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors shrink-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Request Sent Successfully!
              </h3>
              <p className="text-gray-600 text-sm">
                Thank you for choosing the {packageName} package. Our team will contact you within
                24 hours to discuss your requirements and get you started.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="+91 96630 90897"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              {getFormFields()}

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  When would you like to start?
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select timeline</option>
                  <option value="immediately">Immediately</option>
                  <option value="within-week">Within a week</option>
                  <option value="within-month">Within a month</option>
                  <option value="flexible">Flexible timeline</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Any additional information or specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 px-8 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Start {baseName} Package
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackageModal;
