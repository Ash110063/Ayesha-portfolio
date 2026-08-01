'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import Link from 'next/link'

const TESTIMONIALS = [
  {
    id: 1,
    name: "James R.",
    role: "Product Manager, UK",
    rating: 5,
    image: "/client1.jpg",
    content: "Ayesha Riaz just gets it. Handed over the brief and she delivered something better than I imagined. Zero back and forth needed.",
  },
  {
    id: 2,
    name: "Abdul Majeed",
    role: "Fexen Founder",
    rating: 5.0,
    image: "/client2.jpg",
    content: "The animations alone made our product feel premium. Our users actually commented on how smooth everything felt.",
  },
  {
    id: 3,
    name: "Aliana s.",
    role: "Swag Studio",
    rating: 5,
    image: "/client3.jpg",
    content: "Reliable, fast, and genuinely cares about the outcome. Exactly the kind of developer you want on your team.",
  },
];

const Testimonials = () => {
  const container = useRef(null);
  
  return (
    <section ref={container} className="relative bg-[#0a0a0a] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Side: Content (Sticky only on Large screens) */}
        <div className="lg:sticky lg:top-32 h-fit space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 text-[10px] md:text-xs text-white rounded-[20px]"
            style={{
              backgroundColor: "rgb(17,17,17)",
              boxShadow: `rgba(0, 0, 0, 0.4) 16px 24px 20px 8px, rgba(184, 180, 180, 0.08) 0px 2px 0px 0px inset`
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="tracking-widest uppercase font-medium">Happy Clients</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.1]">
            Clients Love <span className="text-white/60 md:text-[#fff9]">Working With Me</span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-lg">
            Real feedback from real people I've had the pleasure of building for.
          </p>

          {/* Stats Grid - Responsive Column Logic */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full py-8 border-t border-zinc-800/50">
            <StatBox number="100+" label="Projects Delivered" />
            <StatBox number="10+" label="Companies" />
            <StatBox number="5.0" label="Rating" className="col-span-2 md:col-span-1" />
          </div>

          {/* Buttons - Same styling as Hero for consistency */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full font-bold text-black bg-gradient-to-b from-white to-[#a3a3a3] text-[13px] sm:text-sm shadow-lg active:scale-95 transition-transform">
              Contact Now
            </Link>
            {/* <Link
              href="/projects"
              className="w-full sm:w-auto text-center px-8 py-3.5 text-[13px] sm:text-sm font-medium transition-all text-white border border-white/10 rounded-full hover:bg-white/5"
              style={{
                background: `linear-gradient(180deg, rgba(120,120,120,0.1) -382%, rgba(10,10,10,1) 100%)`
              }}
            >
              See All Projects
            </Link> */}
          </div>
        </div>

        {/* Right Side: Animated Cards */}
        <div className="flex flex-col gap-6 md:gap-1">
          {TESTIMONIALS.map((testimonial, i) => (
            <Card 
              key={testimonial.id} 
              i={i} 
              {...testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ i, name, role, rating, image, content }) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div 
      ref={container} 
      className="lg:sticky lg:top-32 w-full"
      style={{ 
        paddingTop: `calc(${i} * 1.5rem)` // Responsive gap for stacking
      }}
    >
      <motion.div
        style={{
          scale,
          background: `linear-gradient(121deg, rgba(120,120,120,0.2) -52%, rgb(17,17,17) 19%, rgb(10,10,10) 100%)`
        }}
        className="relative w-full border border-zinc-800/50 rounded-3xl p-6 md:p-10 flex flex-col justify-between shadow-2xl overflow-hidden min-h-[320px] md:min-h-[380px]"
      >
        <div className="space-y-6 z-10">
          <div className="flex items-center gap-4">
            <img src={image} alt={name} className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover border border-zinc-700" />
            <div>
              <h4 className="text-lg md:text-xl font-semibold">{name}</h4>
              <p className="text-zinc-500 uppercase text-[10px] tracking-widest">{role}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-zinc-400 font-medium text-sm">{rating}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index} 
                  size={12} 
                  fill={index < Math.floor(rating) ? "#EAB308" : "none"} 
                  stroke={index < Math.floor(rating) ? "#EAB308" : "#444"} 
                />
              ))}
            </div>
          </div>

          <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light italic">
            &quot;{content}&quot;
          </p>
        </div>
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent)] pointer-events-none" />
      </motion.div>
    </div>
  );
};

const StatBox = ({ number, label, className = "" }) => (
  <div className={`p-4 rounded-2xl bg-[#111] border border-zinc-900/50 text-center flex flex-col justify-center ${className}`}>
    <div className="text-xl md:text-2xl font-bold mb-1 text-white">{number}</div>
    <div className="text-[10px] md:text-[11px] text-zinc-500 uppercase tracking-tighter">{label}</div>
  </div>
);

export default Testimonials;