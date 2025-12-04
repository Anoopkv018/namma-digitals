import React from 'react';
import { Target, Award, Heart, Lightbulb, Eye, Compass } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = React.useState('mission');

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Client-Centric',
      description: 'Every decision we make is guided by what\'s best for our clients and their success.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We stay ahead of trends and leverage cutting-edge technologies to deliver superior results.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your business growth and success.'
    }
  ];

  const missionVision = {
    mission: {
      title: 'Our Mission',
      content: 'To empower businesses of all sizes with innovative digital marketing solutions that drive measurable growth, enhance online presence, and create lasting customer relationships. We are committed to delivering exceptional value through data-driven strategies, creative excellence, and personalized service that transforms our clients\' digital aspirations into reality.'
    },
    vision: {
      title: 'Our Vision',
      content: 'To be the leading digital marketing agency in Karnataka and beyond, recognized for our innovative approach, exceptional results, and unwavering commitment to client success. We envision a future where every business, regardless of size, has access to world-class digital marketing expertise that enables them to compete and thrive in the digital economy.'
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              About
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"> NammaDigitals</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Born in Bangalore, crafted for the world. We're a passionate team of digital innovators 
              committed to transforming businesses through strategic digital marketing and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020 in the heart of India's tech capital, NammaDigitals emerged from a simple 
                  belief: every business deserves to thrive in the digital world, regardless of size or budget.
                </p>
                <p>
                  What started as a small team of passionate digital marketers has grown into a full-service 
                  digital agency that serves clients across India and beyond. We've helped over 250 businesses 
                  transform their digital presence and achieve remarkable growth.
                </p>
                <p>
                  Our name "Namma" means "ours" in Kannada, reflecting our commitment to treating every 
                  client's success as our own. This philosophy drives everything we do, from strategy 
                  development to campaign execution.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 p-12 rounded-2xl shadow-2xl">
                <svg className="w-full h-80" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="150" r="80" fill="url(#gradient1)" opacity="0.3"/>
                  <circle cx="150" cy="100" r="40" fill="url(#gradient2)" opacity="0.5"/>
                  <circle cx="250" cy="100" r="40" fill="url(#gradient3)" opacity="0.5"/>
                  <circle cx="120" cy="200" r="30" fill="url(#gradient4)" opacity="0.4"/>
                  <circle cx="280" cy="200" r="30" fill="url(#gradient5)" opacity="0.4"/>
                  <path d="M100 150 L300 150 M200 50 L200 250 M150 100 L250 200 M250 100 L150 200" stroke="url(#gradient6)" strokeWidth="2" opacity="0.3"/>
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B"/>
                      <stop offset="100%" stopColor="#EA580C"/>
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6"/>
                      <stop offset="100%" stopColor="#1D4ED8"/>
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981"/>
                      <stop offset="100%" stopColor="#059669"/>
                    </linearGradient>
                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6"/>
                      <stop offset="100%" stopColor="#7C3AED"/>
                    </linearGradient>
                    <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EF4444"/>
                      <stop offset="100%" stopColor="#DC2626"/>
                    </linearGradient>
                    <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B"/>
                      <stop offset="100%" stopColor="#EA580C"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide our work and define our commitment to excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what drives us and where we're heading as we continue to transform businesses through digital innovation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-8 rounded-full">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center ${
                    activeTab === 'mission'
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Target className="h-5 w-5 mr-2" />
                  Mission
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-9 py-4 rounded-full font-semibold transition-all duration-300 flex items-center ${
                    activeTab === 'vision'
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Eye className="h-5 w-5 mr-2" />
                  Vision
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full mb-6">
                  {activeTab === 'mission' ? <Target className="h-8 w-8" /> : <Eye className="h-8 w-8" />}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {missionVision[activeTab].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  {missionVision[activeTab].content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact by Numbers</h2>
            <p className="text-xl opacity-90">Real results that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="opacity-90">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">250+</div>
              <div className="opacity-90">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">99%</div>
              <div className="opacity-90">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">5+</div>
              <div className="opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;