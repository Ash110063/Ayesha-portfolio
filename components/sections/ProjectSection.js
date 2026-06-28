// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowUpRight, Sparkles, MousePointer2, Section } from "lucide-react";

// const ProjectSection = () => {
//      const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [hoveredProject, setHoveredProject] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const projects = [
//     {
//       id: 1,
//       title: "Logis AI",
//       img: "/projects/logis-ai.png",
//       size: "lg:col-span-2 lg:row-span-1",
//       link: "/projects/logis-ai",
//     },
//     {
//       id: 2,
//       title: "Aynigma",
//       img: "/projects/aynigma.png",
//       size: "lg:col-span-2 lg:row-span-1",
//       link: "/projects/aynigma",
//     },
//     {
//       id: 3,
//       title: "Nurexa",
//       img: "/projects/nurexa.png",
//       size: "lg:col-span-2 lg:row-span-1",
//       link: "/projects/nurexa",
//     },
//     {
//       id: 4,
//       title: "FC Football",
//       img: "/projects/fc-football.png",
//       size: "lg:col-span-2 lg:row-span-1",
//       link: "/projects/smart-fc",
//     },
//     {
//       id: 5,
//       title: "Wittify",
//       img: "/projects/wittify.png",
//       size: "lg:col-span-2 lg:row-span-1",
//       link: "/projects/wittify",
//     },
//     {
//       id: 6,
//       title: "Healix",
//       img: "/projects/healix.png",
//       size: "lg:col-span-2 lg:row-span-1",
//       link: "/projects/healix",
//     },
//   ];
//   return (
//     <div>
//         <section>
//         <div className="max-w-7xl mx-auto relative z-10">
//         {/* Project Cursor - Disabled on touch devices */}
//         <motion.div
//           className="fixed top-0 left-0 w-28 h-10 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[11px] font-medium rounded-full pointer-events-none z-[60] hidden md:flex items-center justify-center shadow-2xl"
//           animate={{
//             x: mousePos.x - 56,
//             y: mousePos.y - 20,
//             scale: hoveredProject ? 1 : 0,
//             opacity: hoveredProject ? 1 : 0,
//           }}
//           transition={{
//             type: "spring",
//             damping: 20,
//             stiffness: 150,
//             mass: 0.5,
//           }}
//         >
//           View project
//         </motion.div>

        

//         {/* Bento Grid Projects - Re-architected for mobile */}
//         <div
//           className="mt-20 md:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
//           id="projects"
//         >
//           {projects.map((proj) => (
//             <Link
//               key={proj.id}
//               href={proj.link}
//               target={proj.link.startsWith("http") ? "_blank" : "_self"}
//               className={`${proj.size} relative rounded-[24px] overflow-hidden group bg-[#0d0d0d] border border-white/5 block touch-manipulation`}
//               onMouseEnter={() => setHoveredProject(true)}
//               onMouseLeave={() => setHoveredProject(false)}
//             >
//               {/* flex aur flex-col add kiya aur items-end taake sab kuch neeche se align ho */}
//               <motion.div className="w-full h-full flex flex-col justify-end items-end">
//                 <img
//                   src={proj.img}
//                   /* object-bottom use kiya taake image card ke bottom se chipki rahe */
//                   className="w-full h-auto object-contain object-bottom transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
//                   alt={proj.title}
//                 />
//                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />

//                 {/* Arrow indicator - Larger touch target for mobile */}
//                 <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center z-10">
//                   <ArrowUpRight
//                     size={18}
//                     className="text-white group-hover:rotate-45 transition-transform duration-300"
//                   />
//                 </div>

//                 {/* Title visible on mobile since there is no 'hover' */}
//                 <div className="absolute top-4 left-4 md:top-6 md:left-6 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
//                   <span className="text-white text-[10px] font-semibold tracking-widest uppercase bg-black/50 px-2 py-1 rounded backdrop-blur-sm md:bg-transparent md:p-0">
//                     {proj.title}
//                   </span>
//                 </div>
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       </section>
//     </div>
//   )
// }

// export default ProjectSection


"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ProjectSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    { id: 1, title: "Logis AI",bgImg: "/projects/logis/logis-bg.png", img: "/projects/logis/desktop.png", link: "/projects/logis-ai" },
    { id: 2, title: "Aynigma",bgImg: "/projects/aynigma/aynigma-bg.png", img: "/projects/aynigma/desktop.png", link: "/projects/aynigma" },
    { id: 3, title: "Nurexa",bgImg: "/projects/nurexa/nurexa-bg.png", img: "/projects/nurexa/desktop.png", link: "/projects/nurexa" },
    { id: 4, title: "FC Football",bgImg: "/projects/smart-fc/smart-fc-bg.png", img: "/projects/smart-fc/desktop.png", link: "/projects/smart-fc" },
    { id: 5, title: "Wittify",bgImg: "/projects/wittify/wittify-bg.png", img: "/projects/wittify/desktop.png", link: "/projects/wittify" },
    { id: 6, title: "Healix",bgImg: "/projects/healix/healix-bg.png", img: "/projects/healix/desktop.png", link: "/projects/healix" },
  ];

  return (
    <div className="bg-black text-white py-20 md:py-32">
      <section className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
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

          <h2 className="text-4xl md:text-6xl font-medium mb-4 leading-tight text-center">
            Some of My <span className="text-[#fff9]">Work</span>
          </h2>
        {/* Sticky Stack Container (Reference site jaisa custom stacked layout) */}
        <div className="mt-20 md:mt-32 flex flex-col gap-12" id="projects">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className="sticky top-20 md:top-12 w-full"
              style={{ 
                // Har card ke darmiyan scroll offset stack banata hai
                paddingTop: `${index * 24}px` 
              }}
            >
                {/* Background Image with Gradient Overlay - Fixed for mobile */}
  
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                
                <Link
                  href={proj.link}
                  target={proj.link.startsWith("http") ? "_blank" : "_self"}
                  className="relative w-full h-[350px] md:h-[500px] rounded-[32px] overflow-hidden group bg-[#0d0d0d] border border-white/5 block touch-manipulation shadow-2xl"
                  onMouseEnter={() => setHoveredProject(true)}
                  onMouseLeave={() => setHoveredProject(false)}
                >
                    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none ">
    <img
      src={proj.bgImg} 
      alt="Hero Background"
      className="w-full !h-full object-cover"
    />
    {/* Dark Gradient Overlay taake glass text achi tarah pop ho */}
    {/* <div className="absolute inset-0 bg-white/10 blur-sm"></div> */}
  </div>
                  <div className="w-full h-full flex flex-col justify-end items-end p-6 md:p-12">
                    
                    {/* Project Image */}
                    {/* <img
                      src={proj.img}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-auto max-h-[75%] object-contain object-bottom transition-all duration-700 group-hover:scale-102 filter grayscale group-hover:grayscale-0 z-0"
                      alt={proj.title}
                    /> */}
                    <img
                      src={proj.img}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-auto max-h-[75%] object-contain object-bottom transition-all duration-700 group-hover:scale-102 filter  z-0"
                      alt={proj.title}
                    />
                    
                    {/* Dark Tint Overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-black/30 transition-colors duration-500 z-10" /> */}

                    {/* Arrow indicator */}
                    <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center z-20 transition-all duration-300 group-hover:bg-white group-hover:border-white">
                      <ArrowUpRight
                        size={20}
                        className="text-white group-hover:text-black group-hover:rotate-45 transition-transform duration-300"
                      />
                    </div>

                    {/* Project Title (Always beautiful & visible) */}
                    <div className="absolute top-6 left-6 md:top-0 md:left-12 transition-all duration-300 z-20">
        <div className="flex flex-wrap leading-tight lg:leading-40 text-[24px] md:text-[40px] lg:text-[60px] font-bold tracking-normal select-none uppercase">
          <span className="text-white/20 bg-clip-text bg-white/30 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] [text-shadow:0_0_20px_rgba(255,255,255,0.1),_inset_0_2px_4px_rgba(255,255,255,0.4)]">
            {proj.title}
          </span>
        </div>
      </div>
                    {/* <div className="absolute top-6 left-6 md:top-12 md:left-12 transition-all duration-300 z-20">
                      <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-white uppercase font-sans">
                        {proj.title}
                      </h3>
                    </div> */}

                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;