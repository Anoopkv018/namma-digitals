import React, { useState } from 'react';
import { Check, Star, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import PackageModal from '../components/PackageModal';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    price: string;
    billingCycle: string;
  } | null>(null);

  const plans = [
    {
      name: 'Startup',
      description: 'Perfect for small businesses getting started with digital marketing',
      monthlyPrice: '₹8,000',
      yearlyPrice: '₹35,000',
      popular: false,
      features: [
        'SEO Optimization (Basic)',
        'Social Media Management (2 platforms)',
        'Content Creation (8 posts/month)',
        'Google Analytics Setup',
        'Monthly Performance Report',
        'Email Support',
        '1 Campaign Setup'
      ]
    },
    {
      name: 'Growth',
      description: 'Ideal for growing businesses looking to scale their digital presence',
      monthlyPrice: '₹13,000',
      yearlyPrice: '₹55,000',
      popular: true,
      features: [
        'Everything in Startup',
        'Advanced SEO Strategies',
        'Social Media Management (4 platforms)',
        'Content Creation (20 posts/month)',
        'PPC Campaign Management',
        'Email Marketing Automation',
        'Bi-weekly Strategy Calls',
        'Priority Support',
        '3 Campaign Setups'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for established businesses and enterprises',
      monthlyPrice: '₹18,000',
      yearlyPrice: '₹75,000',
      popular: false,
      features: [
        'Everything in Growth',
        'Full-Scale SEO Management',
        'Social Media Management (All platforms)',
        'Content Creation (40+ posts/month)',
        'Advanced PPC Campaigns',
        'Marketing Automation',
        'Custom Web Development',
        'Weekly Strategy Sessions',
        '24/7 Dedicated Support',
        'Unlimited Campaign Setups',
        'Custom Analytics Dashboard'
      ]
    }
  ];

  const customPlan = {
    name: 'Custom',
    description: 'Tailored solutions for unique business requirements',
    features: [
      'Customized Strategy Development',
      'Flexible Service Selection',
      'Dedicated Account Manager',
      'Custom Reporting & Analytics',
      'Priority Support & Consultation',
      'Scalable Solutions'
    ]
  };

  const addOns = [
    {
      name: 'Website Development',
      price: '₹25,000 - ₹1,00,000',
      description: 'Custom website design and development'
    },
    {
      name: 'E-commerce Setup',
      price: '₹50,000 - ₹2,00,000',
      description: 'Complete online store setup with payment integration'
    },
    {
      name: 'Branding Package',
      price: '₹15,000 - ₹50,000',
      description: 'Logo design, brand guidelines, and marketing materials'
    },
    {
      name: 'Video Production',
      price: '₹5,000 - ₹25,000/video',
      description: 'Professional video content for marketing campaigns'
    }
  ];

  const faqs = [
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Changes take effect from the next billing cycle.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees. We include onboarding and initial setup in all our plans.'
    },
    {
      question: 'What happens if I cancel?',
      answer: 'You can cancel anytime. We\'ll continue services until the end of your billing period.'
    },
    {
      question: 'Do you offer custom packages?',
      answer: 'Absolutely! We can create custom packages tailored to your specific business needs.'
    }
  ];

  const handleGetStarted = (planName: string, price: string) => {
    setSelectedPackage({
      name: planName,
      price: price,
      billingCycle: billingCycle
    });
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Simple
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing with no hidden fees. Choose the perfect plan for your business 
              and start growing your digital presence today.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`font-medium ${billingCycle === 'monthly' ? 'text-blue-600' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`font-medium ${billingCycle === 'yearly' ? 'text-orange-600' : 'text-gray-500'}`}>
                Yearly
                <span className="ml-1 text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full">Save 17%</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-2 border-orange-500 shadow-2xl' 
                  : 'border border-gray-200 shadow-lg'
              } transition-all duration-300 hover:shadow-xl`}>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                    <div className="text-sm text-gray-500 mt-1">
                      *Ad budgets excluded
                    </div>
                  </div>

                  <button className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => handleGetStarted(plan.name, billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice)}
                  >
                    Get Started
                    <ArrowRight className="inline-block ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Custom Plan */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-dashed border-gray-300 transition-all duration-300 hover:shadow-xl hover:border-orange-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{customPlan.name}</h3>
                <p className="text-gray-600 mb-6">{customPlan.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    Let's Talk
                  </span>
                  <div className="text-sm text-gray-500 mt-1">
                    Custom pricing based on requirements
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
                >
                  Contact Us
                  <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {customPlan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">*All packages exclude ad spend budgets. Ad budgets are managed separately based on your requirements.</p>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Add-on Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your marketing strategy with our specialized add-on services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{addon.name}</h3>
                  <span className="text-orange-600 font-semibold">{addon.price}</span>
                </div>
                <p className="text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Still have questions? Book a free consultation call and let's discuss the perfect plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Free Consultation
                <Zap className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Package Modal */}
      {selectedPackage && (
        <PackageModal
          isOpen={!!selectedPackage}
          onClose={closeModal}
          packageName={selectedPackage.name}
          packagePrice={selectedPackage.price}
          billingCycle={selectedPackage.billingCycle}
        />
      )}
    </div>
  );
};

export default Pricing;