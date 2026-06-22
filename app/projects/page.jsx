'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// const allProjects = [
//   {
//     id: 1,
//     title: 'Muabir-Ai-Dashboard',
//     description: 'AI agents for text, voice, or hybrid customer interactions.',
//     image: '/mubarir-ai.PNG',
//     categories: ['Web', 'UI-Design'],  // ✅ array
//     link: 'https://wittify-0.vercel.app/',
//   },
//   {
//     id: 2,
//     title: 'AI-Equi-Predict',
//     description: 'AI predicts the next champion horse using pedigree and biometrics.',
//     image: '/equi.PNG',
//     categories: ['Web'],  // ✅ array
//     link: 'https://equi-predict.vercel.app/',
//   },
//   {
//     id: 3,
//     title: 'Fasil-ai',
//     description: 'KSA Excise Law AI assistant for compliance and guidance.',
//     image: '/fasil.PNG',
//     categories: ['Web'], // ✅ array
//     link: 'https://fasil-ai.vercel.app/',
//   },
//     {
//     id: 4,
//     title: 'Healix-Medical-AI-Assistant',
//     description: 'AI assistant for medical professionals, providing quick access to medical information and decision support.',
//     image: '/healix.PNG',
//     categories: ['Web'], // ✅ array
//     link: '',
//   },
//    {
//     id: 5,
//     title: 'UI/UX Designer Portfolio',
//     description: 'A sleek, modern portfolio showcasing UI/UX design projects with interactive elements.',
//     image: '/ayesha.PNG',
//     categories: ['Web','UI-Design'], // ✅ array
//     link: 'https://neha-ui-ux-fawn.vercel.app/',
//   },
//      {
//     id: 6,
//     title: 'Token-Swaping-landing-page',
//     description: 'A sleek landing page for a token swapping platform, showcasing features and benefits.',
//     image: '/token.PNG',
//     categories: ['Web','UI-Design'], // ✅ array
//     link: 'https://token-swapping-six.vercel.app/',
//   },
//        {
//     id: 7,
//     title: 'SABZA-Carbon-AdminPanel',
//     description: 'Admin panel for SABZA Carbon, a carbon offset platform, allowing management of projects and user interactions.',
//     image: '/carbon-admin.PNG',
//     categories: ['Web','UI-Design'], // ✅ array
//     link: 'https://admin-panel-sabza-projects.vercel.app/',
//   },
//          {
//     id: 8,
//     title: 'Anygma-Security-Website',
//     description: 'A modern security website for Anygma, featuring a clean design and intuitive user experience.',
//     image: '/anygama.PNG',
//     categories: ['Web','UI-Design'], // ✅ array
//     link: 'https://aynigma-security.vercel.app/',
//   },
//            {
//     id: 9,
//     title: 'Smart-Footbal-AI',
//     description: 'An AI-powered football analytics platform providing insights and predictions for teams and players.',
//     image: '/f2.PNG',
//     categories: ['Web'], // ✅ array
//     link: 'https://smart-fc-ai.vercel.app/',
//   },
//              {
//     id: 10,
//     title: 'Travel-Master',
//     description: 'Travel Master is a sleek, modern travel website offering personalized trip planning and booking services with an intuitive user interface.',
//     image: '/travel.PNG',
//     categories: ['Web', 'UI-Design'], // ✅ array
//     link: 'https://travel-master-eight.vercel.app/',
//   },
//                {
//     id: 11,
//     title: 'Elite Comfort Hub',
//     description: 'A premium e-commerce site is a modern website for a luxury mattress brand, featuring a sleek design and seamless shopping experience.',
//     image: '/elite.JPG',
//     categories: ['Wordpress'], // ✅ array
//     link: 'https://elitecomforthub.co.uk/',
//   },
//    {
//     id: 12,
//     title: 'Goditela – Slow Travel Experiences',
//     description: 'A WordPress site for curated slow-travel experiences for over-65 explorers.',
//     image: '/god.JPG',
//     categories: ['Wordpress'], // ✅ array
//     link: 'https://www.goditela.com/',
//   },
//      {
//     id: 13,
//     title: 'RecipeTin-Eats',
//     description: 'A food blog with a clean design, showcasing delicious recipes with vibrant images and easy navigation.',
//     image: '/food.JPG',
//     categories: ['Wordpress'], // ✅ array
//     link: 'https://www.recipetineats.com/',
//   },
//        {
//     id: 14,
//     title: 'Travel-with-Cents',
//     description: 'A travel travel agency website featuring accessible and personalized vacation planning, including luxury getaways, cruises, and custom itineraries tailored for clients across the United States.',
//     image: '/cents.png',
//     categories: ['Wordpress'], // ✅ array
//     link: 'https://www.travelingwithcents.com/',
//   },
// ];
const allProjects = [
  {
    id: 15,
    title: 'Eco Retrofit Solution',
    description: 'A premium platform dedicated to energy-efficient building upgrades, insulation, and sustainable home transformations.',
    image: '/projects/ecoretrofitsolution.png',
    categories: ['Wordpress'],
    link: 'https://ecoretrofitsolution.com/',
  },
  {
    id: 16,
    title: 'Green Agri Marketing',
    description: 'An innovative agricultural marketing hub connecting modern farming solutions with digital trade and supply chain management.',
    image: '/projects/greenagrimarketing.png',
    categories: ['Wordpress'],
    link: 'https://greenagrimarketing.com/',
  },
  {
    id: 17,
    title: 'The Pizza Valley',
    description: 'A sleek, high-conversion fast-food website featuring seamless menu navigation and online ordering for a premium pizzeria.',
    image: '/projects/thepizzavalley.png',
    categories: ['Wordpress'],
    link: 'https://thepizzavalley.com/',
  },
  {
    id: 18,
    title: 'Digital Rasta',
    description: 'A modern UK-based digital agency website showcasing high-end marketing strategies, SEO, and corporate brand positioning.',
    image: '/projects/digitalrasta.png',
    categories: ['Web', 'UI-Design'],
    link: 'https://digitalrasta.co.uk/',
  },
  {
    id: 19,
    title: 'AB Cricket Shop',
    description: 'An elite e-commerce storefront showcasing premium cricket gear, high-end bats, and protective equipment with clean product UX.',
    image: '/projects/abcricketshop.png',
    categories: ['Wordpress'],
    link: 'https://abcricketshop.com/',
  },
  {
    id: 20,
    title: 'FruitZu Pakistan',
    description: 'A fresh, vibrant e-commerce platform built for localized farm-to-table fruit delivery with an intuitive shopping flow.',
    image: '/projects/fruitzu.png',
    categories: ['Wordpress'],
    link: 'https://www.fruitzu.com.pk/',
  },
  {
    id: 21,
    title: 'Dawn Motors',
    description: 'An ultra-modern automotive showcase and inventory management system designed for car dealerships and premium vehicle listings.',
    image: '/projects/dawnmotors.png',
    categories: ['Web'],
    link: 'https://dawnmotors.com/',
  },
  {
    id: 22,
    title: 'Mankyal Technologies',
    description: 'Our flagship corporate tech portal showcasing high-end Next.js, React, and WordPress development services with modern kinetic UI frames.',
    image: '/projects/mankyal.png',
    categories: ['Web', 'UI-Design'],
    link: 'https://mankyal.com/',
  },
  {
    id: 23,
    title: 'Taycan Rent A Car',
    description: 'A luxury car rental platform in Dubai featuring a sleek, high-end user experience for booking exotic and premium sports vehicles.',
    image: '/projects/taycanrentacar.png',
    categories: ['Web', 'UI-Design'],
    link: 'https://taycanrentacar.com/',
  },
  {
    id: 24,
    title: 'The International Sports Academy',
    description: 'A comprehensive educational and athletic portal built for elite sports training management, schedules, and athlete registration.',
    image: '/projects/theinternationalsportsacademy.png',
    categories: ['Wordpress'],
    link: 'https://www.theinternationalsportsacademy.com/',
  },
  {
    id: 25,
    title: 'Smilo Cleaning Services',
    description: 'A clean, service-oriented commercial and residential cleaning booking platform optimized for the UK market.',
    image: '/projects/smilocleaningservices.png',
    categories: ['Wordpress'],
    link: 'https://smilocleaningservices.co.uk/',
  },
  {
    id: 26,
    title: 'SSR Super Store',
    description: 'A full-scale, responsive multi-vendor retail e-commerce platform designed for smooth navigation and fast checkouts.',
    image: '/projects/ssrsuperstores.png',
    categories: ['Wordpress'],
    link: 'https://ssrsuperstores.com/',
  },
  {
    id: 27,
    title: 'Eco Cor Energy',
    description: 'A corporate web platform outlining renewable energy integration, solar setups, and commercial carbon reduction systems across the UK.',
    image: '/projects/ecocoreenergy.png',
    categories: ['Wordpress'],
    link: 'https://ecocoreenergy.co.uk/',
  },
  {
    id: 28,
    title: 'Fixer Depot',
    description: 'A robust digital service and repair platform offering on-demand hardware, maintenance booking, and industrial equipment fixes.',
    image: '/projects/fixerdepot.png',
    categories: ['Wordpress'],
    link: 'https://fixerdepot.com/',
  },
  {
    id: 29,
    title: 'Flanelle Magazine',
    description: 'A sophisticated fashion, art, and lifestyle digital publication layout featuring minimalist aesthetics and typography-focused editorial spaces.',
    image: '/projects/flanellemag.png',
    categories: ['Web', 'UI-Design'],
    link: 'https://flanellemag.com/',
  },
  {
    id: 30,
    title: 'ACT Technology',
    description: 'A sharp, enterprise-level IT infrastructure and networking solution website focused on business-to-business technical services.',
    image: '/projects/act-technology.png',
    categories: ['Web'],
    link: 'https://act-technology.com/',
  },
  {
    id: 31,
    title: 'Film Festival Masterclass',
    description: 'An interactive learning management and cinema coaching website dedicated to independent filmmakers and festival scaling guides.',
    image: '/projects/filmfestivalmasterclass.png',
    categories: ['Wordpress'],
    link: 'https://www.filmfestivalmasterclass.com/',
  },
  {
    id: 34,
    title: 'Content Club',
    description: 'A dynamic creative platform built for digital copywriters, media creators, and social asset management solutions.',
    image: '/projects/contentclub.png',
    categories: ['UI-Design'],
    link: '', 
  },
  {
    id: 35,
    title: 'Provoker',
    description: 'An elite European branding and digital marketing portal designed with deep tech colors and premium typographic layouts.',
    image: '/projects/provoker.png',
    categories: ['Web', 'UI-Design'],
    link: 'https://provoker.de/',
  },
  {
    id: 36,
    title: 'Neps Albania',
    description: 'A large-scale commercial retail and tech distributor network platform built with performance optimization for heavy data loads.',
    image: '/projects/neps.png',
    categories: ['Web'],
    link: 'https://neps.al/',
  },
  {
    id: 37,
    title: 'Second Hand Furniture Dubai',
    description: 'A highly localized, SEO-optimized marketplace funnel for buying and selling premium pre-owned luxury home decor in the UAE.',
    image: '/projects/secondhandusedfurniturebuyerindubai.png',
    categories: ['Wordpress'],
    link: 'https://secondhandusedfurniturebuyerindubai.com/',
  },
  {
    id: 38,
    title: '7Dev Canada',
    description: 'A collaborative software architecture sandbox and premium interface showcase built for high-performance enterprise applications.',
    image: '/projects/7dev.png',
    categories: ['Web', 'UI-Design'],
    link: 'http://7dev.thediamond.ca/',
  },
  {
    id: 39,
    title: 'VR Point',
    description: 'An immersive virtual reality entertainment hub and booking platform featuring advanced booking management and futuristic design assets.',
    image: '/projects/vrpoint.png',
    categories: ['Web', 'UI-Design'],
    link: 'https://vrpoint.ae/',
  },
  {
    id: 40,
    title: 'Get Cofy',
    description: 'An elegant, high-retention direct-to-consumer marketplace for specialty coffee blends, accessories, and automated monthly subscriptions.',
    image: '/projects/getcofy.png',
    categories: ['Wordpress'],
    link: 'https://getcofy.com/',
  },
  {
    id: 41,
    title: 'Shy Studio',
    description: 'An ultra-premium Swiss 3D design and digital animation portfolio highlighting cutting-edge motion aesthetics and clean layouts.',
    image: '/projects/shy-studio.png',
    categories: ['Web', 'UI-Design'],
    link: 'https://shy-studio.ch/',
  },
  {
    id: 42,
    title: 'IB Demystified',
    description: 'An academic educational portal and resource platform built for International Baccalaureate student training and guidance materials.',
    image: '/projects/ibdemystified.png',
    categories: ['Wordpress'],
    link: 'http://ibdemystified.com',
  },
  {
    id: 43,
    title: 'Acute Pharmacy',
    description: 'A highly secure, clinical e-pharmacy framework and medical storefront supporting digitized pharmaceutical distribution.',
    image: '/projects/acutepharmacy.png',
    categories: ['Wordpress'],
    link: 'https://acutepharmacy.com/',
  },
  {
    id: 44,
    title: 'Nexora Digital',
    description: 'A high-converting full-service digital transformation landing page offering modern automation and custom application development.',
    image: '/projects/greenagrimarketing.png',
    categories: ['Web', 'UI-Design'],
    link: 'https://nexoradigitalx.com/',
  },
  {
    id: 45,
    title: 'Resurgens Homes',
    description: 'A premium, high-end real estate listing platform showcasing architectural masterpieces and modern property development designs.',
    image: '/projects/resurgenshomes.png',
    categories: ['Wordpress'],
    link: 'https://resurgenshomes.com/',
  },
  {
    id: 46,
    title: 'Kevin Battersby PGA',
    description: 'An official professional golf coaching and reservation portal featuring automated class booking and personalized sports analytics.',
    image: '/projects/kevinbattersbypga.png',
    categories: ['Wordpress'],
    link: 'https://kevinbattersbypga.com/',
  }
];
const categories = ['All', 'Web', 'UI-Design', 'Wordpress'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

 const filteredProjects = activeCategory === 'All' 
  ? allProjects 
  : allProjects.filter(p => p.categories.map(c => c.trim()).includes(activeCategory));

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Header with Video Background */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 text-center px-6 overflow-hidden min-h-[80vh] flex flex-col justify-center items-center">
        
        {/* --- Background Video Section --- */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/moon-video.mp4" type="video/mp4" />
          </video>

          {/* 1. Black Gradient (Bottom to Top) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

          {/* 2. Backdrop Blur Mask (Foggy effect at bottom) */}
          <div 
              className="absolute inset-0 z-20 backdrop-blur-[8px]" 
              style={{ 
                  maskImage: 'linear-gradient(to top, black 0%, transparent 50%)',
                  WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 50%)' 
              }}
          />
        </div>

        {/* --- Hero Content --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-30 flex flex-col items-center max-w-5xl mx-auto"
        >
          <span className="px-4 py-3 mb-8 flex items-center gap-2 text-[10px] uppercase tracking-widest font-medium rounded-[20px] bg-[#111111]/80 backdrop-blur-md shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),_inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Recent Projects
          </span>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            A collection of work I'm <br /> <span className="text-[#fff9] font-light">genuinely</span> proud of.
          </h1>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-center px-7 py-3 rounded-full font-bold text-black bg-gradient-to-b from-white to-[#a3a3a3] text-sm shadow-lg mb-20"
          >
            Contact Now
          </motion.button>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat 
                  ? 'bg-white text-black border-white' 
                  : 'bg-[#111111]/50 backdrop-blur-sm text-white border-white/5 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Project Grid */}
      <section className="px-6 md:px-12 pb-[-60] md:pb-32">
        <motion.div 
          layout
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Let's Connect Section */}
      <section className="px-6 md:px-12 py-32 border-t border-white/5 bg-black relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-12">
            <div>
              <span className="bg-[#111111] px-4 py-3 mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),_inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Let's Connect
              </span>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-none text-white mt-6">
                Let's Grow <span className="text-[#fff9]">Together</span>
              </h2>
            </div>

            <div className="space-y-8 max-w-xl">
              <div className="pb-8 border-b border-white/10 group cursor-default">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                  <h3 className="text-3xl font-bold tracking-tight group-hover:text-gray-300 transition-colors">Web Design</h3>
                 
                </div>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-300 transition-colors text-[16px]">
                  Showcasing sleek, high-performance designs tailored for impact.
                </p>
              </div>

              <div className="pb-8 group cursor-default">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                  <h3 className="text-3xl font-bold tracking-tight group-hover:text-gray-300 transition-colors">Wordpress Development</h3>
                 
                </div>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-300 transition-colors text-[16px] ">
                  Building visually stunning, user-focused websites that elevate brands.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-gradient-to-b from-white to-[#a3a3a3] text-black font-bold text-sm tracking-tight shadow-xl"
              >
                Get Started Now
              </motion.button>
            </div>
          </div>

          <div className="flex-1 w-full relative group">
  {/* aspect-video ko hata kar h-auto lagaya */}
  <div className="relative h-auto rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/5">
    <motion.div 
      animate={{ scale: 1.02 }} 
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }} 
      className="w-full h-full opacity-90"
    >
      <img 
        src="/grow.png" 
        alt="Work Gallery" 
    
        className="w-full h-auto grayscale " 
      />
    </motion.div>
  </div>
</div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      className="relative group flex flex-col w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Forced Height for Mobile using Inline Styles */}
      <div 
        className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 bg-zinc-900"
        style={{ 
          height: typeof window !== 'undefined' && window.innerWidth < 768 ? '120px' : '250px' 
        }}
      >
        <motion.img
          animate={{ scale: isHovered ? 1.05 : 1 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-90 transition-all duration-500"
        />
        
        {/* Mobile View Project Button (Always Visible or on Tap) */}
        <div className="absolute inset-0 flex items-center justify-center z-20 md:hidden bg-black/20">
          <a 
            href={project.link} 
            className="px-4 py-2 rounded-full bg-white text-black font-bold text-[10px] flex items-center gap-2 shadow-xl"
          >
            View
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="rotate-45">
              <path d="M1 13L13 1M13 1H3.5M13 1V10.5" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </a>
        </div>

        {/* Desktop Hover Overlay */}
        <motion.div 
          animate={{ opacity: isHovered ? 1 : 0 }} 
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px] hidden md:flex items-center justify-center transition-opacity"
        >
           <a href={project.link} className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm flex items-center gap-2">
            View Project
          </a>
        </motion.div>
      </div>

      {/* Details Section - Compact for Mobile */}
      <div className="mt-3 md:mt-6 px-1">
        <h3 className="text-sm md:text-2xl font-bold text-white truncate">
          {project.title}
        </h3>
        <p className="text-gray-500 text-[10px] md:text-sm mt-1 line-clamp-2 md:line-clamp-none leading-tight md:leading-normal">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}