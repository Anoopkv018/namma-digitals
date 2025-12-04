import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Share2,
  PenTool,
  MousePointer,
  BarChart3,
  Globe,
  Smartphone,
  Mail,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search className="h-10 w-10" />,
      title: 'SEO Optimization',
      description:
        'Boost your organic search rankings and drive qualified traffic with our comprehensive SEO strategies.',
      features: [
        'Keyword Research & Analysis',
        'On-Page Optimization',
        'Technical SEO Audits',
        'Link Building Campaigns',
        'Local SEO Services',
      ],
    },
    {
      icon: <Share2 className="h-10 w-10" />,
      title: 'Social Media Marketing',
      description:
        'Build brand awareness and engage your audience across all major social media platforms.',
      features: [
        'Content Strategy & Planning',
        'Social Media Management',
        'Community Engagement',
        'Influencer Partnerships',
        'Performance Analytics',
      ],
    },
    {
      icon: <PenTool className="h-10 w-10" />,
      title: 'Content Marketing',
      description:
        'Create compelling content that resonates with your audience and drives meaningful engagement.',
      features: [
        'Blog Writing & Strategy',
        'Video Content Creation',
        'Infographic Design',
        'Content Distribution',
        'Editorial Calendar Management',
      ],
    },
    {
      icon: <MousePointer className="h-10 w-10" />,
      title: 'PPC Advertising',
      description:
        'Maximize your ROI with targeted pay-per-click campaigns across Google, Facebook, and more.',
      features: [
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'Campaign Optimization',
        'A/B Testing',
        'Conversion Tracking',
      ],
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: 'Analytics & Reporting',
      description:
        'Get detailed insights into your digital marketing performance with comprehensive analytics.',
      features: [
        'Google Analytics Setup',
        'Custom Dashboard Creation',
        'Performance Reporting',
        'ROI Analysis',
        'Competitor Analysis',
      ],
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: 'Web Development',
      description:
        'Build responsive, fast, and SEO-friendly websites that convert visitors into customers.',
      features: [
        'Responsive Web Design',
        'E-commerce Development',
        'CMS Integration',
        'Performance Optimization',
        'Maintenance & Support',
      ],
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: 'Mobile App Marketing',
      description:
        'Promote your mobile app and increase downloads with our specialized app marketing services.',
      features: [
        'App Store Optimization',
        'User Acquisition Campaigns',
        'In-App Advertising',
        'App Analytics',
        'Retention Strategies',
      ],
    },
    {
      icon: <Mail className="h-10 w-10" />,
      title: 'Email Marketing',
      description:
        'Build lasting relationships with your customers through strategic email marketing campaigns.',
      features: [
        'Email Campaign Design',
        'List Building & Segmentation',
        'Automated Workflows',
        'A/B Testing',
        'Performance Tracking',
      ],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description:
        'We analyze your business, competitors, and target audience to create a customized strategy.',
    },
    {
      number: '02',
      title: 'Planning & Execution',
      description:
        'Our team develops and implements campaigns across chosen channels with precision.',
    },
    {
      number: '03',
      title: 'Monitor & Optimize',
      description:
        'We continuously track performance and optimize campaigns for maximum results.',
    },
    {
      number: '04',
      title: 'Report & Scale',
      description:
        'Regular reporting and strategic scaling to achieve your long-term business goals.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-400 to-teal-400 rounded-full opacity-10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/70 border border-orange-100 shadow-sm text-xs font-semibold tracking-wide text-orange-600">
              DIGITAL SERVICES SUITE
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Our
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                {' '}
                Services
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Full-funnel digital marketing and web solutions designed to accelerate your growth,
              strengthen your brand, and turn clicks into loyal customers.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-white/80 border border-gray-100 text-gray-700">
                Performance Marketing
              </span>
              <span className="px-3 py-1 rounded-full bg-white/80 border border-gray-100 text-gray-700">
                Brand Building
              </span>
              <span className="px-3 py-1 rounded-full bg-white/80 border border-gray-100 text-gray-700">
                Conversion Optimization
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Digital Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leverage the power of digital channels to reach your audience where they spend their
              time and make every interaction count.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/90 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* subtle gradient glow */}
                <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-40 bg-gradient-to-t from-orange-100/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Custom pricing based on scope
                    </span>
                    <Link
                      to="/pricing"
                      className="text-sm font-semibold text-orange-600 hover:text-orange-700"
                    >
                      View packages →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that keeps strategy, creativity, and performance tightly
              connected at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center bg-white rounded-2xl p-8 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xl font-bold rounded-full mb-6 shadow-md">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-yellow-300 to-orange-300" />
                )}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Let&apos;s map the right mix of services for your goals and build a performance-driven
              marketing engine together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                View All Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
