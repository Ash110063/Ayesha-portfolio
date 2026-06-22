'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Star } from 'lucide-react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "End-to-end Product Design, UI/UX Architecture, SaaS Dashboard Design, Mobile App Design, and scalable design systems. If it’s an interface, I architect it for maximum engagement."
  },
  {
    question: "How do I start working with you?",
    answer: "Simple — just reach out. We'll start with a brief discovery call to align on your product goals, scope, and timeline, followed by a formal design strategy. No complex onboarding."
  },
  {
    question: "What design tools do you use?",
    answer: "Figma is my primary workspace for high-fidelity UI/UX and advanced design systems. I use Framer for interactive web experiences, and Miro/FigJam for user mapping and product wireframing."
  },
  {
    question: "Do you deliver code or just designs?",
    answer: "My focus is pure UI/UX architecture and high-fidelity design handoffs. However, all components are structured meticulously with precise design tokens, making the handoff completely seamless for your development team."
  },
  {
    question: "How long does a project take?",
    answer: "It depends heavily on the product's complexity. A high-converting landing page structure can take 2 to 3 days, while a multi-module SaaS dashboard requires a few weeks. I provide fixed timelines upfront."
  },
  {
    question: "Do you provide revisions?",
    answer: "Yes, collaboration is key. We review iterations over interactive Figma links and Loom videos to ensure the final user experience aligns perfectly with your business goals."
  },
  {
    question: "What industries do you work with?",
    answer: "I specialize in AI platforms, agentic chatbots, B2B SaaS dashboards, Web3 experiences, and high-growth digital startups looking for premium product aesthetics."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section 
      className="relative text-white py-24 px-6 overflow-hidden min-h-screen flex items-center"
      style={{
        // 
        backgroundImage: 'url("/faq-bg.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' 
      }}
    >
     

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start w-full">
        
        {/* Left Side: Content */}
        <div className="lg:sticky lg:top-24 space-y-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white rounded-[20px]"
            style={{
              backgroundColor: "rgba(17,17,17, 0.8)",
              boxShadow: `rgba(0, 0, 0, 0.4) 16px 24px 20px 8px, rgba(184, 180, 180, 0.08) 0px 2px 0px 0px inset`,
              backdropFilter: "blur(10px)"
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            FAQ Section
          </div>

          <h2 className="text-5xl md:text-7xl font-medium tracking-tight">
            Let's Clear <span className="text-zinc-500">Things Up</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-md">
            Everything you wanted to ask — already answered.
          </p>

          {/* Testimonial Card */}
          <div
            className="p-7 max-w-[600px] rounded-[16px] overflow-hidden border border-white/5"
            style={{
              background: `linear-gradient(121deg, rgba(40,40,40,0.7) -52%, rgba(17,17,17,0.9) 19%, rgba(10,10,10,0.9) 100%)`,
              width: "100%",
              boxShadow: "rgba(184, 180, 180, 0.08) 0px 2px 0px 0px inset",
              backdropFilter: "blur(12px)"
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/client1.jpg"
                alt="Ryan"
                className="w-16 h-16 rounded-[8px] object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">Ryan Harper</h4>
                <p className="text-gray-300 text-xs uppercase tracking-wider">
                  Harper Education
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-4 text-yellow-500">
              <span className="text-white text-sm font-bold mr-1">5.0</span>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Ayesha Riaz just gets it. Handed over the brief and she delivered something better than I imagined. Zero back and forth needed.
            </p>
          </div>
        </div>

        {/* Right Side: Scrollable FAQs */}
        <div className="relative pt-4">
          <div className="space-y-3 pb-32">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                {...faq}
              />
            ))}
          </div>
          
          {/* Edge Blur Fade (Bottom) */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 " />
        </div>
      </div>
    </section>
  );
}

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className="transition-all duration-300 border border-white/5"
      style={{
        backgroundColor: "rgba(17,17,17, 0.7)", // Glassmorphism touch
        width: "100%",
        borderRadius: "15px",
        boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px, rgba(184, 180, 180, 0.08) 0px 2px 0px 0px inset",
        backdropFilter: "blur(8px)"
      }}
    >
      <button onClick={onClick} className="w-full flex items-center justify-between p-5 text-left">
        <span className="text-base font-medium tracking-tight text-white">{question}</span>
        <div className="bg-zinc-900/50 p-1 rounded-md">
          {isOpen ? <X size={16} className="text-gray-300" /> : <Plus size={16} className="text-zinc-400" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-5 text-gray-300 text-sm leading-relaxed max-w-[95%]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};