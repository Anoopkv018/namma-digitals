import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Share2, PenTool, MousePointer, BarChart3, Globe, Smartphone, Mail, Megaphone, Users, Calendar, MapPin, Award, Briefcase } from 'lucide-react';

const Services = () => {
  const [serviceType, setServiceType] = useState('online');

  const onlineServices = [
    {
      icon: <Search className="h-12 w-12" />,
      title: 'SEO Optimization',
      description: 'Boost your organic search rankings and drive qualified traffic with our comprehensive SEO strategies.',
      features: [
        'Keyword Research & Analysis',
        'On-Page Optimization',
        'Technical SEO Audits',
        'Link Building Campaigns',
        'Local SEO Services'
      ],
      price: 'Starting from ₹15,000/month'
    },
    {
      icon: <Share2 className="h-12 w-12" />,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience across all major social media platforms.',
      features: [
        'Content Strategy & Planning',
        'Social Media Management',
        'Community Engagement',
        'Influencer Partnerships',
        'Performance Analytics'
      ],
      price: 'Starting from ₹12,000/month'
    },
    {
      icon: <PenTool className="h-12 w-12" />,
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your audience and drives meaningful engagement.',
      features: [
        'Blog Writing & Strategy',
        'Video Content Creation',
        'Infographic Design',
        'Content Distribution',
        'Editorial Calendar Management'
      ],
      price: 'Starting from ₹10,000/month'
    },
    {
      icon: <MousePointer className="h-12 w-12" />,
      title: 'PPC Advertising',
      description: 'Maximize your ROI with targeted pay-per-click campaigns across Google, Facebook, and more.',
      features: [
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'Campaign Optimization',
        'A/B Testing',
        'Conversion Tracking'
      ],
      price: 'Starting from ₹8,000/month + ad spend'
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: 'Analytics & Reporting',
      description: 'Get detailed insights into your digital marketing performance with comprehensive analytics.',
      features: [
        'Google Analytics Setup',
        'Custom Dashboard Creation',
        'Performance Reporting',
        'ROI Analysis',
        'Competitor Analysis'
      ],
      price: 'Starting from ₹5,000/month'
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Build responsive, fast, and SEO-friendly websites that convert visitors into customers.',
      features: [
        'Responsive Web Design',
        'E-commerce Development',
        'CMS Integration',
        'Performance Optimization',
        'Maintenance & Support'
      ],
      price: 'Starting from ₹25,000/project'
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Mobile App Marketing',
      description: 'Promote your mobile app and increase downloads with our specialized app marketing services.',
      features: [
        'App Store Optimization',
        'In-App Advertising',
        'User Acquisition Campaigns',
        'App Analytics',
        'Retention Strategies'
      ],
      price: 'Starting from ₹20,000/month'
    },
    {
      icon: <Mail className="h-12 w-12" />,
      title: 'Email Marketing',
      description: 'Build lasting relationships with your customers through strategic email marketing campaigns.',
      features: [
        'Email Campaign Design',
        'List Building & Segmentation',
        'Automated Workflows',
        'A/B Testing',
        'Performance Tracking'
      ],
      price: 'Starting from ₹7,000/month'
    }
  ];

  const offlineServices = [
    {
      icon: <Megaphone className="h-12 w-12" />,
      title: 'Traditional Advertising',
      description: 'Reach your audience through proven traditional media channels with strategic campaigns.',
      features: [
        'Print Media Advertising',
        'Radio Campaign Management',
        'Television Commercial Production',
        'Outdoor Billboard Campaigns',
        'Media Planning & Buying'
      ],
      price: 'Starting from ₹50,000/campaign'
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      title: 'Event Marketing',
      description: 'Create memorable brand experiences through strategic event planning and execution.',
      features: [
        'Corporate Event Planning',
        'Product Launch Events',
        'Trade Show Management',
        'Brand Activation',
        'Event Promotion'
      ],
      price: 'Starting from ₹1,00,000/event'
    },
    {
      icon: <Mail className="h-12 w-12" />,
      title: 'Direct Marketing',
      description: 'Connect directly with your target audience through personalized marketing campaigns.',
      features: [
        'Direct Mail Campaigns',
        'Telemarketing Services',
        'Door-to-Door Marketing',
        'Catalog Distribution',
        'Response Tracking'
      ],
      price: 'Starting from ₹25,000/campaign'
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: 'Local Marketing',
      description: 'Dominate your local market with targeted community-based marketing strategies.',
      features: [
        'Local Business Listings',
        'Community Partnerships',
        'Local Sponsorships',
        'Neighborhood Campaigns',
        'Local PR Management'
      ],
      price: 'Starting from ₹15,000/month'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Public Relations',
      description: 'Build and maintain your brand reputation through strategic public relations campaigns.',
      features: [
        'Press Release Writing',
        'Media Relations',
        'Crisis Management',
        'Reputation Management',
        'Thought Leadership'
      ],
      price: 'Starting from ₹30,000/month'
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: 'Brand Consulting',
      description: 'Develop a strong brand identity and positioning strategy for your business.',
      features: [
        'Brand Strategy Development',
        'Logo & Identity Design',
        'Brand Guidelines',
        'Market Positioning',
        'Brand Audit & Analysis'
      ],
      price: 'Starting from ₹75,000/project'
    }
  ];

  const currentServices = serviceType === 'online' ? onlineServices : offlineServices;

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business, competitors, and target audience to create a customized strategy.'
    },
    {
      number: '02',
      title: 'Planning & Execution',
      description: 'Our team develops and implements campaigns across chosen channels with precision.'
    },
    {
      number: '03',
      title: 'Monitor & Optimize',
      description: 'We continuously track performance and optimize campaigns for maximum results.'
    },
    {
      number: '04',
      title: 'Report & Scale',
      description: 'Regular reporting and strategic scaling to achieve your long-term business goals.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Our
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"> Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital and traditional marketing solutions designed to accelerate your business growth 
              and maximize your presence across all channels.
            </p>
          </div>
        </div>
      </section>

      {/* Service Type Toggle */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-2 rounded-full">
              <button
                onClick={() => setServiceType('online')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  serviceType === 'online'
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Online Marketing
              </button>
              <button
                onClick={() => setServiceType('offline')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  serviceType === 'offline'
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Offline Marketing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {serviceType === 'online' ? 'Digital Marketing Services' : 'Traditional Marketing Services'}
            </h2>
            <p className="text-lg text-gray-600">
              {serviceType === 'online' 
                ? 'Leverage the power of digital channels to reach your audience where they spend their time.'
                : 'Build brand awareness through proven traditional marketing channels and local community engagement.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentServices.map((service, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-lg font-semibold text-orange-600">{service.price}</p>
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
              A proven methodology that ensures consistent results and measurable growth for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xl font-bold rounded-full mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-yellow-300 to-orange-300 -z-10"></div>
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
              Let's discuss how our services can help you achieve your marketing goals and drive sustainable growth.
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