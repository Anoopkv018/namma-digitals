import React, { useState } from 'react';
import { Check, Star, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import PackageModal from '../components/PackageModal';

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    price: string;
    billingCycle: string;
  } | null>(null);

  const [socialBilling, setSocialBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [seoBilling, setSeoBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [dmBilling, setDmBilling] = useState<'monthly' | 'yearly'>('monthly');

  /* ---------------- Website Packages (one-time) ---------------- */

  const websitePackages = [
    {
      name: 'Starter Website',
      price: '₹15,000',
      popular: false,
      description: 'Perfect for freelancers and small local businesses.',
      features: [
        'Up to 5 responsive pages',
        'Modern UI with basic branding',
        'Contact form & WhatsApp integration',
        'Basic on-page SEO',
        'SSL & basic speed optimization',
        '1 round of revisions'
      ]
    },
    {
      name: 'Business Website',
      price: '₹20,000',
      popular: true,
      description: 'For growing brands that need a solid web presence.',
      features: [
        'Up to 10 responsive pages',
        'Blog / News section',
        'Conversion-focused layouts',
        'On-page SEO optimization',
        'Google Analytics & Search Console setup',
        '2 rounds of revisions'
      ]
    },
    {
      name: 'E-commerce Website',
      price: '₹30,000+',
      popular: false,
      description: 'For product-based businesses selling online.',
      features: [
        'Product catalog & cart setup',
        'Payment gateway integration',
        'Order & basic inventory management',
        'Customer account & checkout flows',
        'Mobile-first responsive design',
        'Training & handover session'
      ]
    }
  ];

  /* ---------------- Social Media Packages (Monthly / Yearly) ---------------- */

  const socialMediaPlans = [
    {
      name: 'Social Starter',
      description: 'Ideal for small brands building their initial presence.',
      monthlyPrice: '₹8,000',
      yearlyPrice: '₹35,000',
      popular: false,
      features: [
        'Management of 2 platforms',
        '12 posts / month (design + caption)',
        '3 Reels',
        'Basic content calendar',
        'Hashtag research',
        'Monthly performance report'
      ]
    },
    {
      name: 'Social Growth',
      description: 'For brands that want consistent growth & engagement.',
      monthlyPrice: '₹13,000',
      yearlyPrice: '₹55,000',
      popular: true,
      features: [
        'Management of 3–4 platforms',
        '20 posts / month (design + caption)',
        '5 Reels',
        'Content calendar & themes',
      
        'Community engagement support',
        'Monthly strategy review call'
      ]
    },
    {
      name: 'Social Pro',
      description: 'For aggressive brand building & campaigns.',
      monthlyPrice: '₹18,000',
      yearlyPrice: '₹75,000',
      popular: false,
      features: [
        'Management of all key platforms',
        '25 posts / month (design + caption)',
        '8 Reels',
        'Reel concepts & basic editing',
        'Influencer collaboration guidance',
        'Advanced reporting & insights',
        'Bi-weekly strategy calls'
      ]
    }
  ];

  /* ---------------- SEO Packages (monthly / Yearly) ---------------- */

  const seoPlans = [
    {
      name: 'Local SEO',
      description: 'Perfect for location-based businesses targeting local searches.',
      monthlyPrice: '₹5,000',
      yearlyPrice: '₹40,000',
      popular: false,
      features: [
        'Technical SEO audit & fixes',
        'Google Business Profile optimization',
        'Local citations & directory listings',
        'On-page SEO for core pages',
        'Monthly keyword ranking report',
        '150 Backlink submissionns/ month'
      ]
    },
    {
      name: 'Standard SEO',
      description: 'For businesses targeting city / state level keywords.',
      monthlyPrice: '₹8,000',
      yearlyPrice: '₹55,000',
      popular: true,
      features: [
        'Comprehensive site audit & strategy',
        'On-page & technical SEO upto 10 pages',
        'Blog content SEO (2–3 posts / month)',
        'Backlink outreach & submissions',
        'Competitor analysis & tracking',
        'Detailed monthly reports',
        '300 Backlink submissionns/ month'
      ]
    },
    {
      name: 'Advanced SEO',
      description: 'For competitive industries & high-growth brands.',
      monthlyPrice: '₹10,000',
      yearlyPrice: '₹80,000',
      popular: false,
      features: [
        'Full-scale SEO & content strategy',
        'Advanced technical SEO & fixes upto 20 pages',
        'Blog content SEO (4–8 posts / month)',
        'Topic clusters & content planning',
        'High-quality backlink campaigns',
        'Conversion-focused SEO recommendations',
        'Priority SEO support',
        '500 Backlink submissionns/ month'
      ]
    }
  ];

  /* ---------------- Digital Marketing Packages (Monthly / Yearly) ---------------- */

  const digitalMarketingPlans = [
    {
      name: 'Startup',
      description: 'Perfect for small businesses getting started with digital marketing.',
      monthlyPrice: '₹10,000',
      yearlyPrice: '₹55,000',
      popular: false,
      features: [
        'SEO Optimization (Basic)',
        'Social media support (2 platforms)',
        'Content creation (8 posts / month)',
        'Google Analytics setup',
        'Monthly performance report',
        '1-2 campaign setup'
      ]
    },
    {
      name: 'Growth',
      description: 'Ideal for growing businesses scaling their digital presence.',
      monthlyPrice: '₹13,000',
      yearlyPrice: '₹75,000',
      popular: true,
      features: [
        'Everything in Startup',
        'Advanced SEO strategies',
        'Social media (up to 3 platforms)',
        'Content creation (15 posts / month)',
        'campaign management',
        'Bi-weekly strategy calls',
        'Priority support',
        '3-4 campaign setups'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for established businesses & enterprises.',
      monthlyPrice: '₹18,000',
      yearlyPrice: '₹90,000',
      popular: false,
      features: [
        'Everything in Growth',
        'Full-scale SEO management',
        'Social media (all key platforms)',
        'Content creation (20 posts / month)',
        'Advanced PPC campaigns',
        'Marketing automation workflows',
        'Custom web development support',
        'Weekly strategy sessions',
        '24/7 dedicated support',
        'Unlimited campaign setups'
      ]
    }
  ];

  /* ---------------- Add-ons & FAQs (same as before) ---------------- */

  const addOns = [
  
    {
      name: 'Branding Package',
      price: '₹6,000 - ₹15,000',
      description: 'Logo design, brand guidelines, and marketing materials.'
    },
    {
      name: 'Video Production',
      price: '₹2,500 - ₹8,000/video',
      description: 'Professional video content for marketing campaigns.'
    }
  ];

  const faqs = [
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer:
        'Yes, you can change your plan at any time. Changes take effect from the next billing cycle.'
    },
    {
      question: 'Is there a setup fee?',
      answer:
        'No, there are no setup fees. We include onboarding and initial setup in all our plans.'
    },
    {
      question: 'What happens if I cancel?',
      answer:
        "You can cancel anytime. We'll continue services until the end of your billing period."
    },
    {
      question: 'Do you offer custom packages?',
      answer: 'Absolutely! We can create custom packages tailored to your specific business needs.'
    }
  ];

  /* ---------------- Helpers ---------------- */

  const handleGetStarted = (planName: string, price: string, billingCycle: string) => {
    setSelectedPackage({
      name: planName,
      price,
      billingCycle
    });
  };

  const closeModal = () => setSelectedPackage(null);

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Simple
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                {' '}
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing with no hidden fees. Choose the right package for websites, social
              media, SEO, and full-stack digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Website Packages – one-time */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] text-orange-500 uppercase">
              Website Packages
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Website Design & Development
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              One-time project pricing to get your website designed, developed, and launched with
              care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websitePackages.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 border ${
                  plan.popular
                    ? 'border-2 border-orange-500 shadow-2xl'
                    : 'border-gray-200 shadow-lg'
                } transition-all duration-300 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-1.5 rounded-full text-xs font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Recommended
                    </span>
                  </div>
                )}

                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <div className="text-sm text-gray-500 mt-1">One-time project cost</div>
                  </div>
                  <button
                    className="w-full py-3 px-6 rounded-full font-semibold bg-gray-900 text-white hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md"
                    onClick={() => handleGetStarted(`Website – ${plan.name}`, plan.price, 'One-time')}
                  >
                    Get Quote
                    <ArrowRight className="inline-block ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.25em] text-orange-500 uppercase">
              Social Media Packages
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Social Media Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Monthly and yearly retainers to grow your brand on Instagram, Facebook, LinkedIn and
              more.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span
                className={`font-medium text-sm ${
                  socialBilling === 'monthly' ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setSocialBilling(socialBilling === 'monthly' ? 'yearly' : 'monthly')
                }
                className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                    socialBilling === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span
                className={`font-medium text-sm ${
                  socialBilling === 'yearly' ? 'text-orange-600' : 'text-gray-500'
                }`}
              >
                Yearly
                <span className="ml-1 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                  Save ~15%
                </span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialMediaPlans.map((plan, index) => {
              const price =
                socialBilling === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;

              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-8 ${
                    plan.popular
                      ? 'border-2 border-orange-500 shadow-2xl'
                      : 'border border-gray-200 shadow-lg'
                  } transition-all duration-300 hover:shadow-xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-1.5 rounded-full text-xs font-semibold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>

                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">{price}</span>
                      <span className="text-gray-600">
                        /{socialBilling === 'monthly' ? 'month' : 'year'}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">Ad budgets excluded</div>
                    </div>

                    <button
                      className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() =>
                        handleGetStarted(
                          `Social Media – ${plan.name}`,
                          price,
                          socialBilling
                        )
                      }
                    >
                      Get Started
                      <ArrowRight className="inline-block ml-2 h-4 w-4" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.25em] text-orange-500 uppercase">
              SEO Packages
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Search Engine Optimization (SEO)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              monthly and yearly SEO retainers to keep your website ranking and converting.
            </p>

            {/* SEO Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span
                className={`font-medium text-sm ${
                  seoBilling === 'monthly' ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setSeoBilling(seoBilling === 'monthly' ? 'yearly' : 'monthly')
                }
                className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-white"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                    seoBilling === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span
                className={`font-medium text-sm ${
                  seoBilling === 'yearly' ? 'text-orange-600' : 'text-gray-500'
                }`}
              >
                Yearly
                <span className="ml-1 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                  Best value
                </span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoPlans.map((plan, index) => {
              const price =
                seoBilling === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;

              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-8 ${
                    plan.popular
                      ? 'border-2 border-orange-500 shadow-2xl'
                      : 'border border-gray-200 shadow-lg'
                  } transition-all duration-300 hover:shadow-xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-1.5 rounded-full text-xs font-semibold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>

                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">{price}</span>
                      <span className="text-gray-600">
                        /{seoBilling === 'monthly' ? 'month' : 'year'}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">Ad budgets excluded</div>
                    </div>

                    <button
                      className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() =>
                        handleGetStarted(`SEO – ${plan.name}`, price, seoBilling)
                      }
                    >
                      Get Started
                      <ArrowRight className="inline-block ml-2 h-4 w-4" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Marketing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.25em] text-orange-500 uppercase">
              Digital Marketing Packages
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Full Digital Marketing Retainers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Combined SEO, social media, content, and paid campaigns managed end-to-end.
            </p>

            {/* Digital Marketing Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span
                className={`font-medium text-sm ${
                  dmBilling === 'monthly' ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setDmBilling(dmBilling === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                    dmBilling === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span
                className={`font-medium text-sm ${
                  dmBilling === 'yearly' ? 'text-orange-600' : 'text-gray-500'
                }`}
              >
                Yearly
                <span className="ml-1 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                  Save 17%
                </span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalMarketingPlans.map((plan, index) => {
              const price =
                dmBilling === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;

              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-8 ${
                    plan.popular
                      ? 'border-2 border-orange-500 shadow-2xl'
                      : 'border border-gray-200 shadow-lg'
                  } transition-all duration-300 hover:shadow-xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-1.5 rounded-full text-xs font-semibold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>

                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">{price}</span>
                      <span className="text-gray-600">
                        /{dmBilling === 'monthly' ? 'month' : 'year'}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">Ad budgets excluded</div>
                    </div>

                    <button
                      className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() =>
                        handleGetStarted(
                          `Digital Marketing – ${plan.name}`,
                          price,
                          dmBilling
                        )
                      }
                    >
                      Get Started
                      <ArrowRight className="inline-block ml-2 h-4 w-4" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              *All monthly / monthly / yearly packages exclude ad spend budgets. Ad budgets are
              managed separately based on your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Add-on Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your marketing strategy with our specialized add-on services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{addon.name}</h3>
                  <span className="text-orange-600 font-semibold text-sm">{addon.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
              Still have questions? Book a free consultation call and let&apos;s discuss the perfect
              website, social media, SEO, or digital marketing plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Free Consultation
                <Zap className="ml-2 h-5 w-5" />
              </Link>
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
