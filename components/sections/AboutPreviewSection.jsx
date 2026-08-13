"use client";

import { motion } from "framer-motion";
import { Twitter, Circle, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { Data } from "../../data/devSaadData"; // adjust path if needed
import { useState } from "react";

export default function AboutPreviewSection() {
  const about = Data[0].about;
  const [activeTab, setActiveTab] = useState(0)

  const skills = about.skills;
  const experience = about.highlights;

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-black text-white overflow-hidden px-4" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] md:text-[10px] uppercase tracking-widest mb-6">
            <Circle size={8} className="fill-white animate-pulse" />
            {about.subtitle}
          </div>

          <h2 className="text-4xl md:text-6xl font-medium mb-4 leading-tight">
            Designing experiences <span className="text-[#fff9]">that solve real problems</span>
          </h2>

          <p className="text-gray-300 text-sm md:text-xl max-w-2xl mx-auto">
            {about.shortDescription}
          </p>
        </motion.div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Left Card: Profile */}
          <motion.div variants={itemVars} className="lg:col-span-5 group">
            <div className="bg-[#0f0f0f] rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-white/5 h-full flex flex-col items-center text-center relative overflow-hidden">
              <div className="relative w-full aspect-square mb-6 md:mb-8 rounded-2xl overflow-hidden">
                <img
                  src={about.image}
                  alt={about.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />

                <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 md:gap-2 whitespace-nowrap">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] md:text-[12px] font-medium">
                    {about.availability}
                  </span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-1">
                {about.title}
              </h3>

              <p className="text-gray-400 text-xs md:text-sm mb-6">
                {about.shortDescription}
              </p>

              <div className="flex gap-5 md:gap-6 mb-8">
                <Link
                  href={about.socials.linkedin}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={18} className="md:w-5 md:h-5" />
                </Link>

                {/* <Link
                  href={about.socials.github}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={18} className="md:w-5 md:h-5" />
                </Link>

                <Link
                  href={about.socials.twitter}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={18} className="md:w-5 md:h-5" />
                </Link> */}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Bio */}
            <motion.div
              variants={itemVars}
              className="bg-[#0f0f0f] rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-white/5"
            >
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
                {about.description}
              </p>

              {/* <div className="flex flex-wrap gap-2 md:gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg md:rounded-xl bg-[#1a1a1a] border border-white/5 text-[11px] md:text-sm font-medium hover:border-white/20 transition-colors whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div> */}
              {/* Tabs Header */}
              <div className="flex flex-wrap gap-2 mb-6">
                {about.tabs.map((tab, index) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 rounded-full border text-sm transition-all duration-300
              ${
                activeTab === index
                  ? "bg-white text-black border-white"
                  : "bg-[#1a1a1a] text-white border-white/10 hover:border-white/30"
              }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Skills Content */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {about.tabs[activeTab].skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg md:rounded-xl bg-[#1a1a1a] border border-white/5 text-[11px] md:text-sm font-medium hover:border-white/20 transition-colors whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              variants={itemVars}
              className="bg-[#0f0f0f] rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-white/5 flex-grow"
            >
              <div className="space-y-6 md:space-y-8">
                {experience.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between group cursor-default gap-2"
                  >
                    <div className="">
                      <h4 className="text-sm md:text-base font-medium truncate">
                        {item.company}
                      </h4>
                      <div className="text-gray-400 text-[11px] md:text-sm text-center italic md:not-italic">
                      {item.role}
                    </div>
                    </div>

                    

                    <div className="text-[#fff9] text-[10px] md:text-sm font-mono">
                      {item.year}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
