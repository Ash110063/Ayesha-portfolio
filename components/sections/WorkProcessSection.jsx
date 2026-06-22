'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'

const steps = [
  { step: "01", title: "Discovery & Research", description: "Tell me everything—your vision, target users, and business goals. I map out user personas and study your competitors." },
  { step: "02", title: "Wireframing & Architecture", description: "Before the styling begins, we lock down the layout, user flows, and product structure to avoid structural changes later." },
  { step: "03", title: "Visual Design & Systems", description: "Turning wireframes into polished, pixel-perfect, and cohesive interfaces using modern typography and custom design tokens." },
  { step: "04", title: "Interactive Prototyping", description: "Adding micro-interactions and transitions so you can feel the look, flow, and motion of the design before development." },
  { step: "05", title: "Dev-Ready Handoff", description: "Clean, organized Figma files with clear specs, component states, and assets ready for your engineering team." },
]

export default function WorkProcessSection() {
  const targetRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"])

  return (
    <section ref={targetRef} className={`relative bg-black ${isMobile ? 'py-20 overflow-hidden' : 'h-[200vh]'}`}>
      <div className={`${isMobile ? 'block' : 'sticky top-0 flex h-screen items-center overflow-hidden'}`}>
        
        {/* HEADING SECTION - Massive on Mobile */}
        <div className={`
          ${isMobile 
            ? 'w-full text-center px-4 mb-24' 
            : 'absolute left-0 top-0 bottom-0 w-[450px] lg:w-[500px] bg-black z-30 px-6 md:px-16 flex flex-col justify-center border-r border-white/5'
          }
        `}>
          <h2 className={`
            ${isMobile 
              ? 'text-[65px] xs:text-[80px] leading-[0.8] tracking-tighter' 
              : 'text-[55px] md:text-[90px] lg:text-[110px] leading-[0.85] tracking-normal'
            } font-bold uppercase text-white animate-in fade-in slide-in-from-bottom duration-1000`}
          >
            HOW I <span className="text-white/40 outline-text"> WORK</span>
          </h2>
          
          <div className={`flex items-center gap-4 mt-8 ${isMobile ? 'justify-center' : ''}`}>
            <span className="w-12 h-[1px] bg-white/50"></span>
            <span className="text-white text-[12px] tracking-[0.5em] uppercase font-black">
              Process
            </span>
            <span className="w-12 h-[1px] bg-white/50"></span>
          </div>
        </div>

        {/* CARDS SECTION */}
        <div className="flex w-full overflow-hidden">
          {isMobile ? (
            /* MOBILE: SUPER SMOOTH AUTO CAROUSEL */
            <motion.div 
              animate={isPaused ? {} : { x: ["0%", "-50%"] }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
              }}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="flex flex-nowrap will-change-transform py-4"
            >
              {[...steps, ...steps].map((step, index) => (
                <div
                  key={index}
                  className="group relative h-[450px] w-[300px] border-l border-white/10 p-10 flex flex-col justify-between bg-zinc-950/50 flex-shrink-0 mx-2 rounded-2xl border border-white/5"
                >
                  <div>
                    <span className="text-[11px] font-bold text-white/40 tracking-[0.3em] uppercase">
                      STEP {step.step}
                    </span>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl font-semibold text-white leading-none tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
                </div>
              ))}
            </motion.div>
          ) : (
            /* DESKTOP: ORIGINAL UNTOUCHED */
            <motion.div 
              style={{ x }} 
              className="flex z-10 pl-[90%] md:pl-[500px] lg:pl-[550px] will-change-transform"
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group relative h-[500px] md:h-[600px] w-[280px] md:w-[340px] lg:w-[380px] border-r border-white p-10 md:p-12 flex flex-col justify-between bg-black flex-shrink-0 transition-colors duration-500 hover:bg-zinc-950"
                >
                  <div>
                    <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">
                      STEP {step.step}
                    </span>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-5xl lg:text-5xl font-medium text-white leading-[1.1] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                  <div className="w-0 group-hover:w-full h-[1px] bg-white transition-all duration-700 ease-in-out opacity-50" />
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}