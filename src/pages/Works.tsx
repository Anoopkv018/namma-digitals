import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Sparkles,
  Globe,
  Instagram,
  MousePointer,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

type WorkCategory = 'Websites' | 'Social Media';
type FilterType = 'All' | 'Websites' | 'Social Media' | 'Design Works';

// Design categories
type DesignCategory = 'Logo' | 'Products' | 'Posters' | 'Reels' | 'Brochures';

interface WorkItem {
  title: string;
  client: string;
  category: WorkCategory;
  industry: string;
  summary: string;
  highlights: string[];
  metrics: string[];
  thumbnail: string;
  url: string;
}

// mediaType: image / video / pdf
interface DesignItem {
  id: string;
  client: string;
  category: DesignCategory;
  mediaType: 'image' | 'video' | 'pdf';
  image: string; // thumbnail/cover
  src: string;   // actual media (image / mp4 / pdf)
  alt?: string;
}

const works: WorkItem[] = [
  // WEBSITES
  {
    title: 'Dreambuzz Solutions – Ai Powered Website',
    client: 'Dreambuzz Solutions',
    category: 'Websites',
    industry: 'Digital Agency',
    summary:
      'Corporate website showcasing services, portfolio and lead capture for a digital and IT solutions company.',
    highlights: [
      'Service-focused landing sections',
      'Clear CTAs for enquiries',
      'Responsive, fast-loading pages',
    ],
    metrics: ['Higher enquiry rate vs old site', 'Improved brand perception'],
    thumbnail: '/works/dreambuzz.jpg',
    url: 'https://dreambuzz.in',
  },
  {
    title: 'LetsPro Academy – Training Institute Website',
    client: 'LetsPro Academy',
    category: 'Websites',
    industry: 'Education',
    summary:
      'Education website for courses, workshops and student enquiries with trust-building sections.',
    highlights: [
      'Course listing & details',
      'Student enquiry funnels',
      'SEO-optimised content structure',
    ],
    metrics: ['Increase in course enquiries', 'Better search visibility'],
    thumbnail: '/works/letspro.jpg',
    url: 'https://letspro.in',
  },
  {
    title: 'Yoga With Srinatha – Yoga Institute Website',
    client: 'Yoga With Srinatha',
    category: 'Websites',
    industry: 'Health & Wellness',
    summary:
      'Personal brand site to showcase yoga programs, retreats and online sessions.',
    highlights: [
      'Clean, calm visual identity',
      'Program highlights & testimonials',
      'Integrated contact & booking',
    ],
    metrics: ['More direct program enquiries', 'Longer session time on site'],
    thumbnail: '/works/yogawithsrinatha.jpg',
    url: 'https://yogawithsrinatha.com',
  },
  {
    title: 'FewDot – Creative agency Website',
    client: 'FewDot',
    category: 'Websites',
    industry: 'Creative',
    summary:
      'Modern marketing site for a technology services company with clear service breakdowns.',
    highlights: [
      'Service-wise sections with icons',
      'Tech-focused copywriting',
      'Contact and quote forms',
    ],
    metrics: ['Increase in qualified leads', 'Stronger online presence'],
    thumbnail: '/works/fewdot.jpg',
    url: 'https://fewdot.com',
  },
  {
    title: 'Kanchkall Homestay – Booking Website',
    client: 'Kanchkall Homestay',
    category: 'Websites',
    industry: 'Hospitality',
    summary:
      'Destination-focused website for a homestay in Bisle to drive direct bookings.',
    highlights: [
      'Experience-first storytelling',
      'Room & amenity highlights',
      'WhatsApp / call booking touchpoints',
    ],
    metrics: ['More direct bookings', 'Reduced dependency on OTAs'],
    thumbnail: '/works/kanchkallbisle.jpg',
    url: 'https://kanchkallbisle.com',
  },
  {
    title: 'SB Motors – Automotive Website',
    client: 'SB Motors',
    category: 'Websites',
    industry: 'Automotive',
    summary:
      'Local business website to showcase services, offers and contact options for an automobile dealer.',
    highlights: [
      'Service & offer sections',
      'Map and contact integration',
      'Mobile-friendly experience',
    ],
    metrics: ['Higher local enquiries', 'Better Google search appearance'],
    thumbnail: '/works/sbmotors.jpg',
    url: 'https://sbmotors.in',
  },
  {
    title: 'Yanadays – Wellness & Retreats',
    client: 'Yanadays',
    category: 'Websites',
    industry: 'Wellness',
    summary:
      'Brand website for wellness programs, retreats and experiences under Yanadays.',
    highlights: [
      'Program overview sections',
      'Story-led design',
      'Lead capture for retreats',
    ],
    metrics: ['Increase in program interest', 'Better brand storytelling'],
    thumbnail: '/works/yanadays.jpg',
    url: 'https://yanadays.com',
  },
  {
    title: 'Sai Gurukula Preschool – School Website',
    client: 'Sai Gurukula Preschool',
    category: 'Websites',
    industry: 'Education',
    summary:
      'Preschool website built for parents to explore programs, facilities and admissions.',
    highlights: [
      'Parent-friendly layout',
      'Programs & activities sections',
      'Easy enquiry and contact',
    ],
    metrics: ['More admission enquiries', 'Improved trust & clarity'],
    thumbnail: '/works/saigurukula.jpg',
    url: 'https://saigurukula.com',
  },

  // SOCIAL MEDIA
  {
    title: 'Yoga With Srinatha – Instagram Growth',
    client: '@yogawithsrinatha',
    category: 'Social Media',
    industry: 'Health & Wellness',
    summary:
      'Content strategy for yoga-based reels, carousels and education posts to grow a personal brand.',
    highlights: [
      'Monthly content calendar',
      'Educational + inspirational mix',
      'Reel concepts & scripting',
    ],
    metrics: ['+350% reach growth', 'Steady follower increase'],
    thumbnail: '/works/yogawithsrinatha-ig.jpg',
    url: 'https://www.instagram.com/yogawithsrinatha/',
  },
  {
    title: 'LetsPro Academy – Student Acquisition',
    client: '@letsproacademy',
    category: 'Social Media',
    industry: 'Education',
    summary:
      'Social media presence to attract students for tech and professional courses.',
    highlights: [
      'Course explainer posts',
      'Results & testimonial content',
      'Lead-focused creatives',
    ],
    metrics: ['More DM enquiries', 'Higher profile visits'],
    thumbnail: '/works/letspro-ig.jpg',
    url: 'https://www.instagram.com/letsproacademy/',
  },
  {
    title: 'Yanadays – Wellness Instagram',
    client: '@yanadaysinsta',
    category: 'Social Media',
    industry: 'Wellness',
    summary:
      'Visual-first wellness content to build awareness around retreats and mindfulness.',
    highlights: [
      'Mood-board style feed',
      'Motivational & value posts',
      'Retreat promotion creatives',
    ],
    metrics: ['Increased brand awareness', 'Engaged niche community'],
    thumbnail: '/works/yanadays-ig.jpg',
    url: 'https://www.instagram.com/yanadaysinsta',
  },
  {
    title: 'Nimma Destination – Travel Content',
    client: '@nimmadestination',
    category: 'Social Media',
    industry: 'Travel',
    summary:
      'Travel-focused content for experiences, stays and destinations.',
    highlights: [
      'Photo-first storytelling',
      'Destination highlight posts',
      'Stronger visual identity',
    ],
    metrics: ['Higher saves & shares', 'Better engagement on posts'],
    thumbnail: '/works/nimmadestination-ig.jpg',
    url: 'https://www.instagram.com/nimmadestination/',
  },
  {
    title: 'Sai Gurukula Preschool – Instagram',
    client: '@saigurukulapreschool',
    category: 'Social Media',
    industry: 'Education',
    summary:
      'Parent-focused content showing activities, events and school culture.',
    highlights: [
      'Event recap posts',
      'Parent trust-building content',
      'Admissions-oriented creatives',
    ],
    metrics: ['More profile visits', 'Admissions enquiries via DM'],
    thumbnail: '/works/saigurukula-ig.jpg',
    url: 'https://www.instagram.com/saigurukulapreschool/',
  },
  {
    title: 'Vallabh Interiors – Interior Design Feed',
    client: '@vallabhinteriors',
    category: 'Social Media',
    industry: 'Interior Design',
    summary:
      'Showcasing interior projects, moodboards and before–after transformations.',
    highlights: [
      'Project highlight posts',
      'Reel walkthroughs',
      'Design tips & ideas',
    ],
    metrics: ['Higher-quality leads', 'Improved brand perception'],
    thumbnail: '/works/vallabh-ig.jpg',
    url: 'https://www.instagram.com/vallabhinteriors/',
  },
  {
    title: 'Samatha Green Energy – Solar Branding',
    client: '@samathagreenenergysolutions',
    category: 'Social Media',
    industry: 'Renewable Energy',
    summary:
      'Solar & sustainability-focused content to educate and attract leads.',
    highlights: [
      '“Did you know” solar posts',
      'Financing & benefit explainers',
      'Brand awareness campaigns',
    ],
    metrics: ['Increase in inbound leads', 'Better education for audience'],
    thumbnail: '/works/samatha-ig.jpg',
    url: 'https://www.instagram.com/samathagreenenergysolutions/',
  },
  {
    title: 'Glolife – Lifestyle & Wellness',
    client: '@glolifeblr',
    category: 'Social Media',
    industry: 'Lifestyle',
    summary:
      'Lifestyle and wellness content for a modern, aspirational audience.',
    highlights: [
      'Aesthetic grid design',
      'Reel concepts & hooks',
      'Value + promotional mix',
    ],
    metrics: ['Growth in followers', 'Consistent engagement'],
    thumbnail: '/works/glolife-ig.jpg',
    url: 'https://www.instagram.com/glolifeblr/',
  },
];

// DESIGN WORKS
const designWorks: DesignItem[] = [

    // logos
  {
    id: 'logo-1',
    client: 'luxury',
    category: 'Logo',
    mediaType: 'image',
    image: '/works/logo/luxury.jpg',
    src: '/works/logo/luxury.jpg',
    alt: 'luxury properties',
  },
  {
    id: 'logo-2',
    client: 'Vishwamanava',
    category: 'Logo',
    mediaType: 'image',
    image: '/works/logo/mmc.jpg',
    src: '/works/logo/mmc.jpg',
    alt: 'VISHWAMANAVA PU COLLEGE',
  },
  {
    id: 'logo-3',
    client: 'Perfect Solutions',
    category: 'Logo',
    mediaType: 'image',
    image: '/works/logo/ps.jpg',
    src: '/works/logo/ps.jpg',
    alt: 'Perfect Solutions',
  },
  {
    id: 'logo-4',
    client: 'Dr Soda',
    category: 'Logo',
    mediaType: 'image',
    image: '/works/logo/soda.jpg',
    src: '/works/logo/soda.jpg',
    alt: 'Dr Soda',
  },
  {
    id: 'logo-5',
    client: 'Svarna',
    category: 'Logo',
    mediaType: 'image',
    image: '/works/logo/svarna.jpg',
    src: '/works/logo/svarna.jpg',
    alt: 'Svarna coconut oil',
  },
  {
    id: 'logo-6',
    client: 'Transform CX',
    category: 'Logo',
    mediaType: 'image',
    image: '/works/logo/transform.jpg',
    src: '/works/logo/transform.jpg',
    alt: 'Transform CX',
  },
  {
    id: 'logo-7',
    client: 'Charming nest',
    category: 'Logo',
    mediaType: 'image',
    image: '/works/logo/charming.jpg',
    src: '/works/logo/charming.jpg',
    alt: 'Charming nest',
  },
  // products
  {
    id: 'product-1',
    client: 'Native moola',
    category: 'Products',
    mediaType: 'image',
    image: '/works/products/1.jpg',
    src: '/works/products/1.jpg',
    alt: 'Native moola',
  },
  {
    id: 'product-2',
    client: 'Native moola',
    category: 'Products',
    mediaType: 'image',
    image: '/works/products/2.jpg',
    src: '/works/products/2.jpg',
    alt: 'Native moola',
  },
  {
    id: 'product-3',
    client: 'Svarna',
    category: 'Products',
    mediaType: 'image',
    image: '/works/products/3.jpg',
    src: '/works/products/3.jpg',
    alt: 'Svarna coconut oil',
  },
  // posters
  {
    id: 'posters-1',
    client: 'Vishwamanava PU College',
    category: 'Posters',
    mediaType: 'image',
    image: '/works/posters/pu.jpg',
    src: '/works/posters/pu.jpg',
    alt: 'Vishwamanava PU College',
  },
  {
    id: 'posters-2',
    client: 'Yanadays',
    category: 'Posters',
    mediaType: 'image',
    image: '/works/posters/2.jpg',
    src: '/works/posters/2.jpg',
  },
  {
    id: 'posters-3',
    client: 'Samatha Green Energy',
    category: 'Posters',
    mediaType: 'image',
    image: '/works/posters/5.jpg',
    src: '/works/posters/5.jpg',
  },
  {
    id: 'posters-4',
    client: 'Glolife',
    category: 'Posters',
    mediaType: 'image',
    image: '/works/posters/6.jpg',
    src: '/works/posters/6.jpg',
  },

  // reels
  {
  id: 'reel-1',
  client: 'LetsPro Academy',
  category: 'Reels',
     mediaType: 'video',
     image: '/works/reels/reel-letspro-cover.jpg',
     src: '/works/reels/reel-letspro.mp4',
     alt: 'LetsPro Academy reel',
   },

  //  Brochure (pdf)
  {
   id: 'brochure-1',
   client: 'LetsPro Academy',
   category: 'Brochures',
   mediaType: 'pdf',
   image: '/works/brochure/letspro.jpg',
   src: '/works/brochure/letspro.pdf',
   alt: 'LetsPro Academy brochure',
 },
 {
   id: 'brochure-2',
   client: 'Yanadays',
   category: 'Brochures',
   mediaType: 'pdf',
   image: '/works/brochure/yana.jpg',
   src: '/works/brochure/yana.pdf',
   alt: 'LetsPro Academy brochure',
 },
 {
   id: 'brochure-3',
   client: 'Yanadays',
   category: 'Brochures',
   mediaType: 'pdf',
   image: '/works/brochure/yana2.jpg',
   src: '/works/brochure/yana2.pdf',
   alt: 'LetsPro Academy brochure',
 },
];

const filters: FilterType[] = ['All', 'Websites', 'Social Media', 'Design Works'];
const designFilters: DesignCategory[] = ['Logo', 'Products', 'Posters', 'Reels', 'Brochures'];

const Works: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [designFilter, setDesignFilter] = useState<DesignCategory>('Posters'); // default
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null);
  const [imageZoom, setImageZoom] = useState<number>(1);

  const filteredWorks =
    activeFilter === 'All'
      ? works
      : activeFilter === 'Websites' || activeFilter === 'Social Media'
      ? works.filter((item) => item.category === activeFilter)
      : [];

  const showDesigns = activeFilter === 'All' || activeFilter === 'Design Works';

  const visibleDesigns: DesignItem[] = !showDesigns
    ? []
    : activeFilter === 'Design Works'
    ? designWorks.filter((d) => d.category === designFilter)
    : designWorks; // When main filter is "All", show all design items

  // Reset zoom when new design is selected
  useEffect(() => {
    if (selectedDesign) {
      setImageZoom(1);
    }
  }, [selectedDesign]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-blue-400 to-teal-400 opacity-10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/70 border border-orange-100 shadow-sm text-xs font-semibold tracking-wide text-orange-600">
              OUR WORK • REAL RESULTS
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Our
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                {' '}
                Works
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A snapshot of websites, social media brands and design work we&apos;ve
              crafted — all focused on measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Filters */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-full">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Design sub-filters (only when Design Works is active) */}
          {activeFilter === 'Design Works' && (
            <div className="flex justify-center mb-10">
              <div className="flex flex-wrap gap-2 bg-gray-50 p-2 rounded-full border border-gray-100">
                {designFilters.map((df) => (
                  <button
                    key={df}
                    onClick={() => setDesignFilter(df)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                      designFilter === df
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {df}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Grid – websites/social + design works together */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Website & Social Media cards */}
            {filteredWorks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-white border border-gray-100 rounded-2xl p-5 shadow-sm
                           transition-all duration-500 ease-out cursor-pointer
                           hover:-translate-y-3 hover:shadow-2xl hover:border-orange-200 overflow-hidden"
              >
                {/* soft gradient glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-16 bg-gradient-to-br from-yellow-400/10 via-orange-500/10 to-transparent blur-3xl" />
                </div>

                <div className="relative">
                  {/* Thumbnail */}
                  <div className="mb-4 rounded-xl overflow-hidden border border-gray-100 bg-gray-100">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-40 object-cover
                                 transition-transform duration-500 ease-out
                                 group-hover:scale-110 group-hover:rotate-[1.5deg]"
                      loading="lazy"
                    />
                  </div>

                  {/* Category / Industry */}
                  <div className="flex items-center justify-between mb-3 text-xs text-gray-500 uppercase tracking-wide">
                    <div className="flex items-center gap-1 transition-transform duration-300 group-hover:-translate-y-0.5">
                      {item.category === 'Websites' ? (
                        <Globe className="h-3.5 w-3.5" />
                      ) : (
                        <Instagram className="h-3.5 w-3.5" />
                      )}
                      <span>{item.category}</span>
                    </div>
                    <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                      {item.industry}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-gray-950">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">for {item.client}</p>

                  {/* Summary */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* CTA text */}
                  <div className="inline-flex items-center text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-transform duration-300 group-hover:translate-x-1">
                    {item.category === 'Websites'
                      ? 'Visit website'
                      : 'View Instagram page'}
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </a>
            ))}

            {/* Design Works: card grid */}
            {showDesigns &&
              visibleDesigns.map((design) => (
                <button
                  key={design.id}
                  type="button"
                  onClick={() => setSelectedDesign(design)}
                  className="group relative block bg-white border border-gray-100 rounded-2xl p-3 shadow-sm
                             transition-all duration-500 ease-out cursor-pointer
                             hover:-translate-y-3 hover:shadow-2xl hover:border-orange-200 overflow-hidden"
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-16 bg-gradient-to-br from-yellow-400/10 via-orange-500/10 to-transparent blur-3xl" />
                  </div>

                  <div className="relative">
                    <div className="rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={design.image}
                        alt={design.alt || design.client}
                        className="w-full h-56 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* small tag */}
                    <div className="absolute bottom-3 left-3 px-2 py-1 rounded-full text-[10px] font-semibold bg-black/60 text-white uppercase tracking-wide">
                      {design.category}
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </section>

      {/* Highlight strip */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <Sparkles className="mx-auto h-6 w-6 text-yellow-500" />
              <p className="text-sm font-semibold text-gray-900">
                Performance-first creative
              </p>
              <p className="text-sm text-gray-600">
                Every design, campaign and landing page is aligned to KPIs, not just
                aesthetics.
              </p>
            </div>
            <div className="space-y-2">
              <MousePointer className="mx-auto h-6 w-6 text-orange-500" />
              <p className="text-sm font-semibold text-gray-900">
                Full funnel approach
              </p>
              <p className="text-sm text-gray-600">
                From first impression to final conversion, we optimise the complete
                journey.
              </p>
            </div>
            <div className="space-y-2">
              <Globe className="mx-auto h-6 w-6 text-blue-500" />
              <p className="text-sm font-semibold text-gray-900">
                Multi-channel execution
              </p>
              <p className="text-sm text-gray-600">
                Websites, SEO, Ads, Social — integrated to work together, not in silos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Want your brand featured on this page next?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Share your goals with us and we&apos;ll map a plan to design, build and
              market a digital presence that delivers real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start a Project
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Explore Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Modal for Design Works */}
      {selectedDesign && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedDesign(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <X className="h-6 w-6" />
          </button>

          {/* IMAGE PREVIEW */}
          {selectedDesign.mediaType === 'image' && (
            <div className="max-w-4xl w-full">
              <div className="relative bg-black/80 rounded-2xl p-3 md:p-4">
                <div className="overflow-auto max-h-[80vh]">
                  <img
                    src={selectedDesign.src}
                    alt={selectedDesign.alt || selectedDesign.client}
                    className="mx-auto rounded-xl shadow-2xl transition-transform duration-200"
                    style={{ transform: `scale(${imageZoom})` }}
                  />
                </div>

                {/* Zoom controls */}
                <div className="absolute bottom-4 right-5 flex gap-2">
                  <button
                    onClick={() =>
                      setImageZoom((z) => Math.max(1, z - 0.25))
                    }
                    className="px-3 py-1 rounded-full bg-white/80 text-gray-800 text-sm font-semibold hover:bg-white"
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      setImageZoom((z) => Math.min(3, z + 0.25))
                    }
                    className="px-3 py-1 rounded-full bg-white/80 text-gray-800 text-sm font-semibold hover:bg-white"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* VIDEO PREVIEW (REELS) */}
          {selectedDesign.mediaType === 'video' && (
            <div className="max-w-4xl w-full">
              <div className="bg-black rounded-2xl p-2 md:p-4">
                <video
                  src={selectedDesign.src}
                  controls
                  className="w-full max-h-[80vh] rounded-xl"
                />
              </div>
            </div>
          )}

          {/* PDF PREVIEW (BROCHURES) */}
          {selectedDesign.mediaType === 'pdf' && (
            <div className="max-w-5xl w-full">
              <div className="bg-black rounded-2xl p-2 md:p-4">
                <div className="w-full h-[70vh] md:h-[80vh]">
                  <iframe
                    src={selectedDesign.src}
                    className="w-full h-full rounded-xl bg-white"
                    title={selectedDesign.alt || selectedDesign.client}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Works;
