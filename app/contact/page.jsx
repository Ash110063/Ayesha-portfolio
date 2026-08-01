'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <section className="pt-24 md:pt-32 pb-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Content & Stats */}
          <div className="flex-1 space-y-8 md:space-y-10">
            <div className="text-left">
              <span className="bg-[#111111] px-4 py-2.5 mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full shadow-lg border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Let's Connect
              </span>
              
              {/* Responsive Font Size: 4xl on mobile, 6xl on desktop */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-white mt-6">
                Let's Collaborate <br className="hidden md:block" />
                <span className="text-zinc-500">and Begin the work</span> 
              </h1>
            </div>

            {/* Call Booking Card: Stacks on mobile, row on tablet+ */}
            <div className="p-6 md:p-8 rounded-[24px] bg-[#0a0a0a] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
               <div className="space-y-1">
                 <h4 className="text-lg md:text-xl font-bold">Prefer to book a call?</h4>
                 <p className="text-zinc-500 text-sm">Pick a time that works for you.</p>
               </div>
               <Link href="tel:+923328556215" >
               <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#111111] border border-white/10 text-sm font-bold hover:bg-white hover:text-black transition-all whitespace-nowrap">
                  Let's Book A Call
               </button>
               </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="flex-1 w-full">
            <div className="bg-[#050505] p-6 sm:p-8 md:p-12 rounded-[32px] md:rounded-[40px] border border-white/5 shadow-2xl">
              <form className="space-y-6 md:space-y-8">
                
                {/* Responsive Grid: 1 col on mobile, 2 on tablet+ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 text-sm focus:outline-none focus:border-white/20 transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Email</label>
                    <input type="email" placeholder="Your Email" className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 text-sm focus:outline-none focus:border-white/20 transition-all" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Website (Optional)</label>
                  <input type="text" placeholder="Company Website" className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 text-sm focus:outline-none focus:border-white/20 transition-all" />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Budget</label>
                  <div className="relative">
                    <select className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 text-sm text-zinc-400 focus:outline-none appearance-none cursor-pointer">
                      <option>Select Budget...</option>
                      <option>$1k - $5k</option>
                      <option>$5k - $10k</option>
                      <option>$10k+</option>
                    </select>
                    {/* Custom Arrow for Select */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 text-xs">▼</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-2">Message</label>
                  <textarea rows={4} placeholder="Your Message" className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 text-sm focus:outline-none focus:border-white/20 transition-all resize-none" />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 md:py-5 rounded-full bg-gradient-to-b from-white to-[#a3a3a3] text-black font-black text-sm uppercase tracking-tight shadow-xl"
                >
                  Send Message
                </motion.button>
                
                <p className="text-center text-zinc-600 text-[11px] font-medium">
                  (We will reach out to you within 48hrs)
                </p>
              </form>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}