import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award, Zap, Target, Rocket, CheckCircle, Star, BarChart3, Globe, Search, Share2, MousePointer, Calendar, ArrowUpRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'ROI-Driven Growth',
      description: 'Data-driven digital marketing strategies that deliver measurable results and sustainable business growth with proven ROI tracking.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Digital Team',
      description: 'Certified digital marketing professionals with 5+ years of experience in SEO, PPC, social media, and conversion optimization.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Award-Winning Agency',
      description: 'Recognized digital marketing excellence with 99% client retention rate and industry-leading campaign performance metrics.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Digital Marketing Projects' },
    { number: '250+', label: 'Satisfied Business Clients' },
    { number: '340%', label: 'Average ROI Increase' },
    { number: '5+', label: 'Years Digital Marketing Experience' }
  ];

  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: 'SEO Optimization',
      description: 'Boost organic search rankings and drive qualified traffic'
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: 'Social Media Marketing',
      description: 'Build brand awareness across all social platforms'
    },
    {
      icon: <MousePointer className="h-6 w-6" />,
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted pay-per-click campaigns'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive performance tracking and insights'
    }
  ];

  const caseStudies = [
    {
      client: 'E-commerce Startup',
      industry: 'Retail',
      challenge: 'Low online visibility and poor conversion rates',
      solution: 'Comprehensive SEO strategy, PPC campaigns, and conversion optimization',
      results: [
        '450% increase in organic traffic',
        '280% boost in online sales',
        '65% improvement in conversion rate'
      ],
      timeline: '6 months',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      client: 'Local Restaurant Chain',
      industry: 'Food & Beverage',
      challenge: 'Limited local market presence and low foot traffic',
      solution: 'Local SEO optimization, social media marketing, and Google My Business management',
      results: [
        '320% increase in local search visibility',
        '180% growth in online orders',
        '90% improvement in customer reviews'
      ],
      timeline: '4 months',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      client: 'B2B Software Company',
      industry: 'Technology',
      challenge: 'Long sales cycles and low lead quality',
      solution: 'Content marketing strategy, LinkedIn advertising, and marketing automation',
      results: [
        '200% increase in qualified leads',
        '150% improvement in lead quality',
        '40% reduction in cost per acquisition'
      ],
      timeline: '8 months',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Audit',
      description: 'Comprehensive analysis of your current digital presence, competitor research, and market opportunity assessment.',
      duration: 'Week 1-2',
      deliverables: ['SEO Audit Report', 'Competitor Analysis', 'Market Research']
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom digital marketing strategy creation based on your business goals, target audience, and budget requirements.',
      duration: 'Week 2-3',
      deliverables: ['Marketing Strategy Document', 'Content Calendar', 'Campaign Roadmap']
    },
    {
      step: '03',
      title: 'Implementation & Launch',
      description: 'Execute campaigns across chosen channels with precision, including SEO optimization, content creation, and ad setup.',
      duration: 'Week 3-4',
      deliverables: ['Campaign Launch', 'Content Creation', 'Technical Setup']
    },
    {
      step: '04',
      title: 'Monitor & Optimize',
      description: 'Continuous performance monitoring, A/B testing, and campaign optimization for maximum ROI and results.',
      duration: 'Ongoing',
      deliverables: ['Performance Reports', 'Optimization Updates', 'ROI Analysis']
    }
  ];

  const clients = [
    {
      name: 'FewDot',
      logo: '/fewdot.png',
      website: 'https://fewdot.com',
      description: 'Technology Solutions'
    },
    {
      name: 'Project Guider',
      logo: '/projectguider.png',
      website: 'https://projectguider.com',
      description: 'Educational Platform'
    },
    {
      name: 'SB Motors',
      logo: '/sbmotors.jpg',
      website: 'https://sbmotors.in',
      description: 'Automotive Services'
    },
    {
      name: 'Yoga with Srinatha',
      logo: '/yogawithsrinatha.png',
      website: 'https://yogawithsrinatha.com',
      description: 'Wellness & Fitness'
    },
    {
      name: 'Kanchkall Homestay',
      logo: '/kanchkall.png',
      website: 'https://kanchkallbisle.com',
      description: 'Hospitality & Tourism'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Innovative Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-5 animate-spin slow-spin"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full text-sm font-semibold text-orange-700 mb-4">
                  <Star className="h-4 w-4 mr-2" />
                  #1 Digital Marketing Agency in Mysore
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Dominate
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent block">
                    Digital Marketing
                  </span>
                  <span className="text-4xl lg:text-5xl text-gray-600">in 2025</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your business with NammaDigitals - Mysore's leading digital marketing agency. 
                  We deliver <strong>data-driven SEO</strong>, <strong>high-converting PPC campaigns</strong>, 
                  and <strong>engaging social media strategies</strong> that generate real ROI for businesses across Karnataka.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Free Digital Marketing Audit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-orange-500 hover:text-orange-600 transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5.0 Client Rating</span>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>250+</strong> Successful Projects
                </div>
                <div className="text-sm text-gray-600">
                  <strong>99%</strong> Client Retention
                </div>
              </div>
            </div>

            {/* Interactive Dashboard Mockup */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">Live Performance Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-600">Live</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="h-8 w-8 text-green-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-600">Organic Traffic</div>
                          <div className="text-2xl font-bold text-gray-900">+450%</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Target className="h-8 w-8 text-blue-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-600">Conversion Rate</div>
                          <div className="text-2xl font-bold text-gray-900">85%</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Rocket className="h-8 w-8 text-purple-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-600">ROI Growth</div>
                          <div className="text-2xl font-bold text-gray-900">+340%</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="h-8 w-8 text-orange-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-600">Lead Quality</div>
                          <div className="text-2xl font-bold text-gray-900">92%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Digital Marketing Results</h2>
            <p className="text-gray-300">Real numbers from real businesses we've helped grow</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Digital Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From SEO and PPC to social media marketing and web development - we offer comprehensive 
              digital marketing services to grow your business online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Digital Marketing Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real case studies showcasing how our digital marketing strategies have transformed businesses 
              and delivered exceptional ROI across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={study.image} 
                  alt={study.client}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{study.client}</h3>
                    <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-sm font-medium text-orange-600">
                        Timeline: {study.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Proven Digital Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures consistent results and measurable growth for every client, 
              from initial audit to ongoing optimization.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-orange-500 hidden lg:block"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                  <div className="flex-1 lg:text-right lg:pr-8">
                    <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'}`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <span className="text-orange-600 font-medium">{step.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Deliverables:</h4>
                        <ul className="space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  
                  <div className="flex-1 lg:pl-8">
                    {/* Spacer for alternating layout */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're proud to partner with innovative companies across various industries, 
              helping them achieve their digital marketing goals and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="mb-4">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-16 w-auto mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {client.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{client.description}</p>
                <div className="flex items-center justify-center text-orange-600 group-hover:text-orange-700">
                  <span className="text-sm font-medium">Visit Website</span>
                  <ArrowUpRight className="h-4 w-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose NammaDigitals for Digital Marketing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity, technology, and data-driven strategies to deliver exceptional 
              digital marketing results that drive your business forward in the competitive online landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
              Ready to Dominate Your Digital Marketing?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join 250+ successful businesses that trust NammaDigitals to drive their digital transformation 
              and achieve measurable growth through strategic digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Digital Marketing Consultation
                <Zap className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                View Digital Marketing Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;