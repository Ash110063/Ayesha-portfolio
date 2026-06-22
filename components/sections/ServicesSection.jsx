'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
   {
    id: "01",
    title: "Product Design (End-to-End)",
    description: "Leading the complete product design lifecycle from discovery to delivery. This includes stakeholder workshops, user journey mapping, wireframing, prototyping, UI design, design system creation, developer handoff, and iterative optimization based on user feedback and product metrics.",
    image: "/wordpress.png",
    tags: ["Custom Themes", "WooCommerce", "ACF", "Elementor", "Plugin Development", "Wordpress Bugs", "Wordpress Automation", "Contact Form", "On-Page SEO", "Speed Optimization"],
  },
  {
    id: "02",
    title: "SaaS Dashboard Design",
    description: "Structuring complex data into clean, intuitive, and actionable control panels for AI platforms, B2B SaaS, and Web3 apps.",
    image: "/web.jpg",
    tags: ["React.js & Next.js", "TypeScript", "GSAF", "Framer-motion", "Responsive", "Performance"],
  },
 
  
  {
    id: "03",
    title: "Prototyping & Interaction Design",
    description: "Creating interactive, high-fidelity prototypes that mimic the exact final product behavior for investor pitches and user testing.",
    image: "/animation.jpg",
    tags: ["Framer Motion", "GSAP", "Micro-Interactions"],
  },
  {
    id: "04",
    title: "UX Audit & Product Improvement",
    description: "Analyzing your existing digital product, identifying friction points, and re-designing it to boost engagement and retention.",
    image: "/ui.jpg",
    tags: ["Pixel-Perfect", "Mobile-First", "Architecture"],
  }
]

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleServiceClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <section className="relative bg-black min-h-screen w-full overflow-hidden py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24" id='services'>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="text-xs sm:text-sm md:text-base tracking-[0.3em] text-zinc-500 uppercase">
            ( Services )
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white">
            How I Can <span className="text-zinc-400">Help</span>
          </h2>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px]">
          
          {/* Service Names - Single Line with Horizontal Scroll */}
          <div className="w-full mb-8 md:mb-12">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 sm:gap-3 md:gap-4 min-w-max px-4 sm:px-0">
                {services.map((service, idx) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(idx)}
                    className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                      activeIndex === idx
                        ? 'bg-zinc-700 text-white shadow-lg'
                        : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
                    }`}
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium">
                      {service.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl sm:rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 md:gap-8 lg:gap-12">
                  
                  {/* Left Side - Content */}
                  <div className="p-6 sm:p-8 md:p-10 lg:p-12 space-y-4 sm:space-y-6 md:space-y-8">
                    
                    {/* ID and Counter */}
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-sm sm:text-base md:text-lg font-bold text-zinc-400">
                        {services[activeIndex].id}
                      </span>
                      <div className="w-8 md:w-12 h-[1px] bg-zinc-700" />
                      <span className="text-xs sm:text-sm text-zinc-500">
                        {activeIndex + 1}/{services.length}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                      {services[activeIndex].title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
                      {services[activeIndex].description}
                    </p>

                    {/* Tags */}
                    {/* <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
                      {services[activeIndex].tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05, duration: 0.3 }}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-zinc-800 text-[10px] sm:text-xs md:text-sm tracking-wider text-zinc-400 bg-zinc-900/40"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div> */}
                  </div>

                  {/* Right Side - Image */}
                  {/* <div className="relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black via-black/50 to-transparent z-10" />
                      <img 
                        src={services[activeIndex].image} 
                        alt={services[activeIndex].title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border border-zinc-700/30 rounded-full z-20" />
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border border-zinc-700/30 rounded-full z-20" />
                    </motion.div>
                  </div> */}

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - Centered */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
            <button
              onClick={() => handleServiceClick(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className={`p-2 sm:p-3 rounded-full transition-all duration-300 ${
                activeIndex === 0
                  ? 'bg-zinc-900 text-zinc-700 cursor-not-allowed'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => handleServiceClick(Math.min(services.length - 1, activeIndex + 1))}
              disabled={activeIndex === services.length - 1}
              className={`p-2 sm:p-3 rounded-full transition-all duration-300 ${
                activeIndex === services.length - 1
                  ? 'bg-zinc-900 text-zinc-700 cursor-not-allowed'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Scroll Indicators for Tabs */}
          <div className="absolute left-0 top-[72px] md:top-[88px] hidden md:block">
            <div className="w-12 h-8 bg-gradient-to-r from-black to-transparent pointer-events-none opacity-0" />
          </div>
          <div className="absolute right-0 top-[72px] md:top-[88px] hidden md:block">
            <div className="w-12 h-8 bg-gradient-to-l from-black to-transparent pointer-events-none opacity-0" />
          </div>

        </div>
      </div>

      {/* Style for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}