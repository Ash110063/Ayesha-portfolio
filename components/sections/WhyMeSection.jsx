'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import SectionHeading from '../SectionHeading'

const comparisonData = [
  {
    positive: {
      title: 'Conversion & Metric Obsessed',
      desc: 'Every interface I design is optimized for user flow, high completion rates, and cognitive ease. Your users will feel the premium difference instantly.'},
    negative: {
      title: 'The Risk Without It',
      desc: 'Clunky, confusing user journeys that drop conversions and frustrate users. An un-optimized UX is an expensive mistake.',
    },
  },
  {
    positive: {
      title: 'Animations & Micro-interactions That Matter',
      desc: 'Motion is not decoration; it’s communication. Every transition and interactive element is intentional—guiding your user through the product, not distracting them.',
    },
    negative: {
      title: 'The Risk Without It',
      desc: 'Static & forgettable interfaces. Products without motion feel outdated and mechanical instantly.',
    },
  },
  {
    positive: {
      title: `You're Always In The Loop`,
      desc: `A transparent design process with continuous Figma review links, Loom walkthroughs, and zero ghosting. You'll always know exactly where your product stands.`,
    },
    negative: {
      title: 'The Risk Without It',
      desc: 'Radio silence, misaligned features, and design revisions that waste time. You deserve a partner, not just an order-taker.',
    },
  },
]

export default function WhyMeSection() {
  return (
    <section className="relative py-20 md:py-32 bg-black text-white">
      <div className="container-custom">
        {/* Top Badge & Headings */}
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase border rounded-full border-white/20 bg-white/5">
             Why choose me
          </span>
          <h2 className="text-4xl md:text-6xl font-medium mb-4">
          Why me as Your <span className="text-[#fff9] font-light">Designing Partner</span>
          </h2>
          <p className="text-gray-300 text-lg">
          What you actually get — versus what you risk without it.
          </p>
        </div>

        {/* Sticky Cards Container */}
        <div className="flex flex-col gap-10">
          {comparisonData.map((item, index) => (
            <div 
              key={index} 
              className="sticky top-32 w-full"
              style={{ paddingTop: `${index * 20}px` }} // Adds a slight offset to the stack
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
              >
                {/* Left Side: Positive */}
                <div className="p-8 md:p-12 relative bg-neutral-900/50">
                  <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Check size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.positive.title}</h3>
                  <p className="text-gray-300 leading-relaxed max-w-sm">
                    {item.positive.desc}
                  </p>
                  {/* Vertical Divider for Desktop */}
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-white/10" />
                </div>

                {/* Right Side: Negative */}
                <div className="p-8 md:p-12 bg-neutral-950/30">
                  <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                    <X size={20} className="text-gray-500" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-200">{item.negative.title}</h3>
                  <p className="text-gray-300 leading-relaxed max-w-sm">
                    {item.negative.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}