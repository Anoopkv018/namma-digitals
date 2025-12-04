import React from 'react';
import { Target, Heart, Lightbulb, Eye } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = React.useState<'mission' | 'vision'>('mission');

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Client-Centric',
      description:
        "Every decision we make is guided by what's best for our clients and their success."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description:
        'We stay ahead of trends and leverage cutting-edge technologies to deliver superior results.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Results-Driven',
      description:
        'We focus on measurable outcomes that directly impact your business growth and success.'
    }
  ];

  const missionVision = {
    mission: {
      title: 'Our Mission',
      content:
        "To empower businesses of all sizes with innovative digital marketing solutions that drive measurable growth, enhance online presence, and create lasting customer relationships. We are committed to delivering exceptional value through data-driven strategies, creative excellence, and personalized service that transforms our clients' digital aspirations into reality."
    },
    vision: {
      title: 'Our Vision',
      content:
        'To be the leading digital marketing agency in Karnataka and beyond, recognized for our innovative approach, exceptional results, and unwavering commitment to client success. We envision a future where every business, regardless of size, has access to world-class digital marketing expertise that enables them to compete and thrive in the digital economy.'
    }
  };

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* Hero Section – light gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-24 border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-10 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-white/80 px-4 py-1 text-xs font-medium tracking-[0.25em] uppercase text-amber-600 shadow-sm">
              <span>About</span>
              <span className="text-slate-500">NammaDigitals</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              The Digital Team
              <span className="block bg-gradient-to-r from-yellow-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                Behind Your Growth Story
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
              Born in Bangalore, crafted for the world. We&apos;re a passionate team of digital
              innovators committed to transforming businesses through strategic digital marketing
              and cutting-edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Born in Bangalore
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Serving brands across India
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                Full-service digital partner
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section – white */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-[0.25em] text-amber-500 uppercase">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                From a Small Team to a Full-Service Digital Growth Partner
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Founded in 2020 in the heart of India&apos;s tech capital, NammaDigitals emerged
                  from a simple belief: every business deserves to thrive in the digital world,
                  regardless of size or budget.
                </p>
                <p>
                  What started as a small team of passionate digital marketers has grown into a
                  full-service digital agency that serves clients across India and beyond.
                  We&apos;ve helped over 250 businesses transform their digital presence and achieve
                  remarkable growth.
                </p>
                <p>
                  Our name &quot;Namma&quot; means &quot;ours&quot; in Kannada, reflecting our
                  commitment to treating every client&apos;s success as our own. This philosophy
                  drives everything we do, from strategy development to campaign execution.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-amber-500">500+</div>
                  <div className="mt-1 text-xs text-slate-500">Projects Delivered</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-emerald-500">250+</div>
                  <div className="mt-1 text-xs text-slate-500">Happy Clients</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-sky-500">5+</div>
                  <div className="mt-1 text-xs text-slate-500">Years of Excellence</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 right-0 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl" />

              <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      Growth Network
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Brands Connected. Results Delivered.
                    </h3>
                  </div>
                  <div className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-700 border border-amber-200">
                    Since 2020
                  </div>
                </div>

                {/* Abstract illustration */}
                <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="200" cy="150" r="80" fill="url(#gradient1)" opacity="0.25" />
                    <circle cx="150" cy="100" r="40" fill="url(#gradient2)" opacity="0.5" />
                    <circle cx="250" cy="100" r="40" fill="url(#gradient3)" opacity="0.5" />
                    <circle cx="120" cy="200" r="30" fill="url(#gradient4)" opacity="0.4" />
                    <circle cx="280" cy="200" r="30" fill="url(#gradient5)" opacity="0.4" />
                    <path
                      d="M100 150 L300 150 M200 50 L200 250 M150 100 L250 200 M250 100 L150 200"
                      stroke="url(#gradient6)"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#EA580C" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#1D4ED8" />
                      </linearGradient>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                      <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#7C3AED" />
                      </linearGradient>
                      <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EF4444" />
                        <stop offset="100%" stopColor="#DC2626" />
                      </linearGradient>
                      <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#EA580C" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-slate-600">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400 mb-1">
                      Focus
                    </p>
                    <p className="font-medium text-slate-900">Performance-first strategies</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400 mb-1">
                      Approach
                    </p>
                    <p className="font-medium text-slate-900">Human + data-driven decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section – light gray */}
      <section className="py-16 lg:py-20 bg-gray-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] text-amber-500 uppercase">
              Core Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              The Principles Behind Our Work
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              These values guide every strategy, campaign, and conversation we have with our clients
              and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white border border-slate-100 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section – dark band like your screenshot */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-x-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] text-amber-300/90 uppercase">
              Mission &amp; Vision
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Drives Us Forward</h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Discover what fuels our work today and where we&apos;re heading as we help businesses
              grow through digital innovation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-2 py-2 shadow-[0_8px_25px_rgba(15,23,42,0.85)]">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center ${
                    activeTab === 'mission'
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-amber-500/40'
                      : 'text-slate-300 hover:text-slate-50'
                  }`}
                >
                  <Target className="h-4 w-4 mr-2" />
                  Mission
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center ${
                    activeTab === 'vision'
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-amber-500/40'
                      : 'text-slate-300 hover:text-slate-50'
                  }`}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Vision
                </button>
              </div>
            </div>

            {/* Tab content */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-3xl border border-slate-800 shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl mb-6">
                  {activeTab === 'mission' ? (
                    <Target className="h-8 w-8" />
                  ) : (
                    <Eye className="h-8 w-8" />
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-5">
                  {missionVision[activeTab].title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  {missionVision[activeTab].content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section – warm gradient at bottom */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-r from-yellow-500 via-orange-500 to-rose-500 text-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-8 left-10 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-white/30 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our Impact by Numbers</h2>
            <p className="text-base sm:text-lg opacity-90">
              Real results that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center bg-white/10 rounded-3xl px-4 py-6 backdrop-blur-sm border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold mb-1">500+</div>
              <div className="text-xs sm:text-sm opacity-90">Projects Delivered</div>
            </div>
            <div className="text-center bg-white/10 rounded-3xl px-4 py-6 backdrop-blur-sm border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold mb-1">250+</div>
              <div className="text-xs sm:text-sm opacity-90">Happy Clients</div>
            </div>
            <div className="text-center bg-white/10 rounded-3xl px-4 py-6 backdrop-blur-sm border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold mb-1">99%</div>
              <div className="text-xs sm:text-sm opacity-90">Client Retention</div>
            </div>
            <div className="text-center bg-white/10 rounded-3xl px-4 py-6 backdrop-blur-sm border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold mb-1">5+</div>
              <div className="text-xs sm:text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
