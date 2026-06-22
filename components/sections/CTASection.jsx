// 'use client'
// import { motion } from 'framer-motion'
// import Link from 'next/link'

// export default function CTASection() {
//   return (
//     <section
//       className="relative min-h-[650px] w-full flex items-center py-20 px-6 md:px-16 overflow-hidden bg-black"
//       style={{
//         backgroundImage: 'url("/hand-bg.png")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       {/* Dark Overlay  */}
//       <div className="absolute inset-0 bg-black/40 z-0" />

//       <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//         {/* Left Side: Big Bold Title */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-7xl md:text-[120px] font-black uppercase leading-[0.9] text-zinc-300 tracking-tighter">
//             LET'S WORK <br /> TOGETHER
//           </h2>
//         </motion.div>

//         {/* Right Side: Content & Button */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="flex flex-col items-start lg:items-end space-y-8 text-left lg:text-right"
//         >
//           <p className="text-gray-300 text-lg md:text-xl max-w-sm leading-tight">
//             Have a project in mind? I'd love to hear about it. Let's create something great together!
//           </p>
// <Link
//   href="#contact"
//   className="group relative px-12 py-4 rounded-[100px]  text-gray-300 font-bold text-sm tracking-widest uppercase transition-all overflow-hidden hover:text-black"
//   style={{
//     background: `linear-gradient(
//       180deg,
//       rgb(120,120,120) -382%,
//       rgb(10,10,10) 100%
//     )`,
//     opacity: 1,
//     willChange: "transform"
//   }}
// >
//   <span className="relative z-10">GET IN TOUCH</span>
//   <div className="absolute inset-0 bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
// </Link>
//         </motion.div>

//       </div>
//     </section>
//   )
// }

"use client";
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import DotField from "../saad/DotField";

export default function CTASection() {
  return (
    <section className="relative min-h-[650px] w-full flex items-center py-20 px-6 md:px-16 overflow-hidden bg-black">
      {/* LightRays as Full Background */}
      <div className="absolute inset-0 z-0">
       
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#fff"
          gradientTo="#B497CF"
          glowColor="#120F17"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Big Bold Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-7xl md:text-[120px] font-black uppercase leading-[0.9] text-zinc-300 tracking-tighter">
            LET'S WORK <br /> TOGETHER
          </h2>
        </motion.div>

        {/* Right Side: Content & Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-start lg:items-end space-y-8 text-left lg:text-right"
        >
          <p className="text-gray-300 text-lg md:text-xl max-w-sm leading-tight">
            Have a project in mind? I'd love to hear about it. Let's create
            something great together!
          </p>
          <Link
            href="#contact"
            className="group relative px-12 py-4 rounded-[100px] text-gray-300 font-bold text-sm tracking-widest uppercase transition-all overflow-hidden hover:text-black"
            style={{
              background: `linear-gradient(
                180deg,
                rgb(120,120,120) -382%,
                rgb(10,10,10) 100%
              )`,
              opacity: 1,
              willChange: "transform",
            }}
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <div className="absolute inset-0 bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
