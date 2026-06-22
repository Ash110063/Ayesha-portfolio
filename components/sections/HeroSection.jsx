"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MousePointer2 } from "lucide-react";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Logis AI",
      img: "/projects/logis-ai.png",
      size: "lg:col-span-2 lg:row-span-1",
      link: "https://abcricketshop.com/",
    },
    {
      id: 2,
      title: "Aynigma",
      img: "/projects/aynigma.png",
      size: "lg:col-span-2 lg:row-span-1",
      link: "https://aynigma-security.vercel.app/",
    },
    {
      id: 3,
      title: "Nurexa",
      img: "/projects/nurexa.png",
      size: "lg:col-span-2 lg:row-span-1",
      link: "https://smart-fc-ai.vercel.app/",
    },
    {
      id: 4,
      title: "FC Football",
      img: "/projects/fc-football.png",
      size: "lg:col-span-2 lg:row-span-1",
      link: "https://travel-master-eight.vercel.app/",
    },
    {
      id: 5,
      title: "Wittify",
      img: "/projects/wittify.png",
      size: "lg:col-span-2 lg:row-span-1",
      link: "https://travel-master-eight.vercel.app/",
    },
    {
      id: 6,
      title: "Healix",
      img: "/projects/healix.png",
      size: "lg:col-span-2 lg:row-span-1",
      link: "https://travel-master-eight.vercel.app/",
    },
  ];

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-6 overflow-x-hidden bg-black">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-[50%] md:h-[70%] z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10" >
        {/* Project Cursor - Disabled on touch devices */}
        <motion.div
          className="fixed top-0 left-0 w-28 h-10 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[11px] font-medium rounded-full pointer-events-none z-[60] hidden md:flex items-center justify-center shadow-2xl"
          animate={{
            x: mousePos.x - 56,
            y: mousePos.y - 20,
            scale: hoveredProject ? 1 : 0,
            opacity: hoveredProject ? 1 : 0,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 150,
            mass: 0.5,
          }}
        >
          View project
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <motion.div
              style={{
                backgroundColor: "rgb(17, 17, 17)",
                borderRadius: "20px",
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px, rgba(184, 180, 180, 0.08) 0px 2px 0px 0px inset",
              }}
              className="flex items-center gap-2 w-fit px-4 py-2 mb-6"
            >
              <Sparkles size={12} className="text-white" />
              <span className="text-[9px] md:text-[10px] font-medium text-gray-300 tracking-widest uppercase">
                UI/UX & Product Design Lead
              </span>
            </motion.div>

            <motion.h1 className="text-4xl sm:text-5xl md:text-7xl font-medium mb-6 text-white leading-[1.1]">
              CREATIVE  <span className="text-[#fff9]">PORTFOLIO</span>
            </motion.h1>

            <p className="text-gray-400 text-sm md:text-lg max-w-md leading-relaxed mb-10 px-4 lg:px-0">
              Product Architect & Design Lead Specialist in AI Platforms, Chatbots, SaaS & Web3
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
              {/* Primary Button */}
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-bold text-black bg-gradient-to-b from-white to-[#a3a3a3] text-[13px] sm:text-sm shadow-lg active:scale-95 transition-transform order-1 sm:order-2"
              >
                Contact Now
              </Link>

              {/* Secondary Button */}
              <Link
                href="#projects"
                className="w-full sm:w-auto text-center px-6 py-2.5 sm:px-8 sm:py-3 text-[13px] sm:text-sm font-medium transition-all rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 active:scale-95 order-2 sm:order-1"
              >
                See All Projects
              </Link>
            </div>
          </div>

          {/* Right Content: Floating Reviews - Hidden on small screens to prevent overlap */}
          <div className="hidden lg:flex lg:col-span-6 relative h-[400px] items-center justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-25 left-20 rotate-[-6deg] w-[240px] bg-[#323232] p-5 rounded-2xl shadow-[inset_0px_2px_0px_0px_rgba(184,180,180,0.08)] z-20"
            >
              <p className="text-[13px] leading-relaxed text-gray-300 font-medium">
                &quot;Ayesha just gets it. Delivered perfectly, zero back and
                forth.&quot;
              </p>
              <p className="text-right text-[11px] text-gray-400 mt-4">
                — Lukas M., Germany
              </p>
            </motion.div>
            <motion.div
              animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-[55%] left-[45%] z-30"
            >
              <MousePointer2
                size={24}
                className="text-white fill-white rotate-[15deg]"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-13 right-20 rotate-[4deg] w-[240px] bg-[#323232] p-5 rounded-2xl shadow-[inset_0px_2px_0px_0px_rgba(184,180,180,0.08)] z-20"
            >
              <p className="text-[13px] leading-relaxed text-gray-300 font-medium">
                &quot;The animations blew our entire team away. Hired her again
                instantly.&quot;
              </p>
              <p className="text-right text-[11px] text-gray-400 mt-4">
                — James R., UK
              </p> 
            </motion.div>
          </div>
        </div>

        {/* Bento Grid Projects - Re-architected for mobile */}
        <div className="mt-20 md:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]" id="projects"> 
         {projects.map((proj) => (
  <Link
    key={proj.id}
    href={proj.link}
    target={proj.link.startsWith("http") ? "_blank" : "_self"}
    className={`${proj.size} relative rounded-[24px] overflow-hidden group bg-[#0d0d0d] border border-white/5 block touch-manipulation`}
    onMouseEnter={() => setHoveredProject(true)}
    onMouseLeave={() => setHoveredProject(false)}
  >
    {/* flex aur flex-col add kiya aur items-end taake sab kuch neeche se align ho */}
    <motion.div className="w-full h-full flex flex-col justify-end items-end">
      <img
        src={proj.img}
        /* object-bottom use kiya taake image card ke bottom se chipki rahe */
        className="w-full h-auto object-contain object-bottom transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
        alt={proj.title}
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />

      {/* Arrow indicator - Larger touch target for mobile */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center z-10">
        <ArrowUpRight
          size={18}
          className="text-white group-hover:rotate-45 transition-transform duration-300"
        />
      </div>

      {/* Title visible on mobile since there is no 'hover' */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
        <span className="text-white text-[10px] font-semibold tracking-widest uppercase bg-black/50 px-2 py-1 rounded backdrop-blur-sm md:bg-transparent md:p-0">
          {proj.title}
        </span>
      </div>
    </motion.div>
  </Link>
))}
        </div>

        {/* Footer Button */}
        {/* <div className="mt-16 md:mt-20 flex justify-center">
          <Link
            href="/projects"
            className="flex items-center gap-2 group text-gray-400 hover:text-white transition-colors py-4"
          >
            <span className="text-sm md:text-md font-medium">
              More Projects
            </span>
            <ArrowUpRight
              size={18}
              className="rotate-90 group-hover:translate-y-1 transition-transform"
            />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
