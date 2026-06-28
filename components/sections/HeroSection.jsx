"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MousePointer2, Section } from "lucide-react";

export default function HeroSection() {
  return (
    // <section className="relative h-full  px-4 md:px-6 overflow-hidden bg-black py-40">
    //   <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none blur-lg">
    //     <img
    //       src="/home-hero.png"
    //       alt="Hero Background"
    //       className="w-full h-full object-cover"
    //     />
    //     <div className="absolute inset-0 bg-white/10  blur-sm"></div>
    //   </div>
    //   <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center justify-center max-w-7xl mx-auto z-10">
    //     <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-full">
    //       <div class="flex items-center justify-center  relative overflow-hidden">
    //         <div class="flex flex-wrap leading-tight text-[50px] md:text-[90px] lg:text-[160px] font-medium tracking-normal select-none uppercase">
    //           <span class="text-white/20  bg-clip-text bg-white/30 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] [text-shadow:0_0_20px_rgba(255,255,255,0.1),_inset_0_2px_4px_rgba(255,255,255,0.4)]">
    //             CREATIVE PORTFOLIO
    //           </span>
    //         </div>
    //       </div>

    //       <p className="text-white text-sm md:text-lg max-w-md leading-relaxed mb-10 px-4 lg:px-0">
    //         Product Architect & Design Lead Specialist in AI Platforms,
    //         Chatbots, SaaS & Web3
    //       </p>
    //       <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
    //         <Link
    //           href="/contact"
    //           className="group flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3 rounded-[8px] font-medium text-white transition-all duration-300 active:scale-95 order-1 sm:order-2 text-[14px] tracking-wide select-none"
    //           style={{
    //             // 1. Exact Background Gradient (Left to Right transparent blend)
    //             background:
    //               "linear-gradient(90deg, rgba(23, 72, 57, 0.4) 0%, rgba(26, 54, 73, 0.4) 100%)",

    //             // 2. Strong Blur to create that frosted liquid glass look
    //             backdropFilter: "blur(16px)",
    //             WebkitBackdropFilter: "blur(16px)",

    //             // 3. Perfect Clean Glass Border (Uniform around all corners)
    //             border: "1.2px solid rgba(255, 255, 255, 0.15)",

    //             // 4. Smooth Outer Glow + Drop Shadow
    //             boxShadow:
    //               "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0px rgba(255, 255, 255, 0.1)",
    //           }}
    //         >
    //           <span className="font-sans antialiased text-white/95">
    //             Lets Talk!
    //           </span>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.8}
    //             stroke="currentColor"
    //             className="w-[18px] h-[18px] text-white/90 transform group-hover:translate-x-1 transition-transform duration-300"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    //             />
    //           </svg>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className=" hidden lg:flex lg:col-span-6 relative h-[400px] items-center justify-center">
    //       <img className="absolute -right-40 -top-30" src="/hero-001.png" />
    //     </div>
    //   </div>
    // </section>
    <section className="relative min-h-screen w-full px-4 md:px-6 overflow-hidden bg-black py-40 flex items-center">
  {/* Background Image with Gradient Overlay - Fixed for mobile */}
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none blur-lg">
    <img
      src="/home-hero.png" 
      alt="Hero Background"
      className="w-full !h-full object-cover"
    />
    {/* Dark Gradient Overlay taake glass text achi tarah pop ho */}
    <div className="absolute inset-0 bg-white/10 blur-sm"></div>
  </div>

  <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center justify-center max-w-7xl mx-auto z-10 w-full">
    {/* Left Content */}
    <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-full">
      <div className="flex items-center justify-center relative overflow-hidden">
        <div className="flex flex-wrap leading-tight lg:leading-40 text-[50px] md:text-[90px] lg:text-[160px] font-bold tracking-normal select-none uppercase">
          <span className="text-white/20 bg-clip-text bg-white/30 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] [text-shadow:0_0_20px_rgba(255,255,255,0.1),_inset_0_2px_4px_rgba(255,255,255,0.4)]">
            CREATIVE PORTFOLIO
          </span>
        </div>
      </div>

      <p className="text-white text-sm md:text-lg max-w-md leading-relaxed mb-10 px-4 lg:px-0">
        Product Architect & Design Lead Specialist in AI Platforms, Chatbots,
        SaaS & Web3
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
        <Link
          href="/contact"
          className="group flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3 rounded-[8px] font-medium text-white transition-all duration-300 active:scale-95 order-1 sm:order-2 text-[14px] tracking-wide select-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(23, 72, 57, 0.4) 0%, rgba(26, 54, 73, 0.4) 100%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1.2px solid rgba(255, 255, 255, 0.15)",
            boxShadow:
              "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0px rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Text */}
          <span className="font-sans antialiased text-white/95">
            Lets Talk!
          </span>

          {/* Exact Long Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-[18px] h-[18px] text-white/90 transform group-hover:translate-x-1 transition-transform duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>

    {/* Right Content: Floating Reviews */}
    <div className="hidden lg:flex lg:col-span-6 relative h-[400px] items-center justify-center">
      <img className="absolute -right-40 -top-30" src="/hero-001.png" alt="Floating Asset" />
    </div>
  </div>
</section>
  );
}
