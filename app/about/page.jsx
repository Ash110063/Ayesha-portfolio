"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/sections/CTASection";
import LightRays from "../../components/saad/LightRays";
import Lightning from "../../components/saad/Lightning";
import Galaxy from "../../components/saad/Galaxy";

const experience = [
  {
    title: "Software Engineer",
    company: "CPLUS SOFT",
    period: "2025 - Present",
    logo: "/cplus.jfif",
    description:
      "Leading frontend development of 5+ production applications using React.js and Next.js. Building animated, high-performance interfaces with Framer Motion and GSAP — focused on reusable architecture and seamless user experience.",
  },
  {
    title: "Web Developer",
    company: "Softcrust Pvt Ltd",
    logo: "/softcrust.png",
    period: "2024",
    description:
      "Developed responsive interfaces using Wordpress React.js, Next.js and Tailwind CSS. Achieved 30% faster load times through performance optimization and reusable component management.",
  },
  {
    title: "Wordpress Developer",
    company: "Green Agri Marketing",
    logo: "/greenagri.png",
    period: "2023",
    description:
      "Developed dynamic and responsive Wordpress Websites — focused on design, content integration and consistent UI delivery.",
  },
  {
    title: "Wordpress Developer",
    company: "Fiverr",
    logo: "/fiverr.png",
    period: "2022 - present",
    description:
      "Developed dynamic and responsive Wordpress Websites — focused on design, content integration and consistent UI delivery.",
  },
  {
    title: "Web Developer",
    company: "Digital Rasta",
    logo: "/digitalrasta.png",
    period: "2023 - Present Remote",
    description:
      "Started as Frontend Intern — promoted to Junior Frontend Developer. Responsible for responsive layouts, content integration and UI development.",
  },
];

const education = [
  {
    degree: "Bachelor in Software Engineering",
    school: "University of Swat",
    year: "2022",
  },
  {
    degree: "Pre Medical",
    school: "Govt Degree College Madyan",
    year: "2018",
  },
];
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Figma", "VS Code", "Webpack"],
  },
  {
    title: "Design",
    skills: [
      "UI Design",
      "UX Design",
      "Prototyping",
      "Accessibility",
      "Responsive Design",
      "Animation",
    ],
  },
];
const stats = [
  { number: "100+", label: "Projects Completed" },
  { number: "8+", label: "Companies Worked With" },
  { number: "2000+", label: "Hours Coded" },
  { number: "10+", label: "Technologies Mastered" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section - Optimized for all heights */}
      <section className="relative min-h-screen md:h-screen w-full overflow-hidden bg-black flex flex-col justify-end p-4 md:p-10">
        <div className="absolute inset-0 z-0">
          {/* <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
            <source src="/green-eye.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/40 via-transparent to-black" /> */}
          <div className="hidden md:block">
             <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={2}
            rayLength={6}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
          </div>
          <div className="block md:hidden"
          style={{ width: '100%', height: '600px', position: 'relative' }}
          >
            <Galaxy />
          </div>
         
          {/* <Lightning hue={260} xOffset={0} speed={1} intensity={1} size={1} /> */}
          {/* <Galaxy /> */}
        </div>

        {/* Massive Main Heading - Responsive sizing */}
        <div className="relative z-10 my-10 md:my-0 flex justify-center items-center h-[50vh]">
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="!text-[50px] md:!text-[8vw] leading-[0.9] font-black text-[#fff9] uppercase tracking-tighter"
          >
            CODE IS MY <br />
            <span className="text-white">CANVAS.</span>
          </motion.h1>
        </div>

        {/* Bottom Section - Flex Wrap for Mobile */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-10">
          <div className="grid grid-cols-2 gap-6 md:flex md:gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                  {stat.number}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <motion.div className="max-w-[350px] md:text-right">
            <p className="text-base md:text-xl font-medium text-white/90 leading-tight">
              A developer who believes the web should feel as good as
              it looks —
              <span className="text-white/50"> every pixel, intentional.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section - Grid Fix */}
      <section className="bg-black py-20 px-4 md:px-10 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <div>
            <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">
              (Career Path)
            </span>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.8] tracking-tighter">
              Professional <br />{" "}
              <span className="text-white/40 italic">Experience</span>
            </h2>
          </div>
          <p className="max-w-[280px] text-gray-400 text-xs md:text-sm uppercase leading-relaxed font-mono">
            Building real products from internship to full-time growth.
          </p>
        </div>

        <div className="flex flex-col border-t border-white/20">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col md:grid md:grid-cols-[1.2fr_2fr_0.8fr] py-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors"
            >
              <div className="mb-4 md:mb-0 font-mono text-sm font-bold text-gray-400">
                [{job.period}]
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase group-hover:text-gray-200 transition-colors">
                  {job.title}
                </h3>
                <p className="text-gray-400 uppercase font-bold tracking-widest text-[10px]">
                  {job.company}
                </p>
                <p className="text-gray-400 mt-4 text-sm leading-snug max-w-xl">
                  {job.description}
                </p>
              </div>
              <div className="mt-6 md:mt-0 flex md:justify-end">
                <div className="h-12 w-12 md:h-16 md:w-16 bg-white/5 rounded-lg border border-white/10 p-2 grayscale group-hover:grayscale-0 transition-all">
                  <img
                    src={job.logo}
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education - Stacked on Mobile */}
      <section className="bg-black py-20 px-4 md:px-10 border-t border-white/10">
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.8] tracking-tighter mb-12">
          Continuous <br />{" "}
          <span className="text-white/40 italic">Learning</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-black p-8 md:p-12 flex flex-col justify-between min-h-[250px]"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="font-mono text-gray-400 font-bold text-sm">
                  [{edu.year}]
                </span>
                <span className="text-gray-800 font-black text-5xl group-hover:text-white/10 transition-colors">
                  0{index + 1}
                </span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase mb-2 leading-none">
                  {edu.degree}
                </h3>
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                  {edu.school}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills - 2 columns on mobile, 3 on desktop */}
      <section className="bg-black py-20 px-4 md:px-10 border-t border-white/10">
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.8] tracking-tighter mb-12">
          Skills & <br />{" "}
          <span className="text-white/40 italic">Expertise</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-l border-t border-white/10">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="border-r border-b border-white/10 p-6 md:p-10 group hover:bg-white/[0.02] transition-all"
            >
              <h3 className="text-2xl font-bold text-white uppercase mb-8 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-white/30"></span> {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center text-gray-400 group-hover:text-white transition-colors"
                  >
                    <span className="text-[10px] font-mono mr-3 text-gray-600">
                      //
                    </span>
                    <span className="text-base uppercase font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
