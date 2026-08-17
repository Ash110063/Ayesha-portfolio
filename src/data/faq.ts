import type { FaqItem } from "@/types";

export const FAQ_META = {
  heading: "Let's Clear Things Up",
  sub: "Everything you wanted to ask — already answered.",
} as const;

export const TESTIMONIAL = {
  name: "Ryan Harper",
  company: "HARPER EDUCATION",
  rating: "5.0",
  quote:
    "Working with Ayesha felt like having a product partner, not a freelancer. She clarified our messy requirements, shipped a polished system, and stayed involved through handoff.",
  avatar: "/images/clients/ryan-harper.jpg",
} as const;

export const FAQS: FaqItem[] = [
  {
    q: "What services do you offer?",
    a: "End-to-end Product Design, UI/UX Architecture, SaaS Dashboard Design, Mobile App Design, and scalable design systems. If it's an interface, I architect it for maximum engagement.",
  },
  {
    q: "How do I start working with you?",
    a: "Send a short brief via email or LinkedIn — goals, timeline, and any existing research or product links. We'll book a discovery call, align on scope, and I'll share a clear proposal with milestones.",
  },
  {
    q: "What design tools do you use?",
    a: "Primarily Figma for UI, prototypes, and design systems, plus FigJam/Miro for workshops, Loom for walkthroughs, and motion tools when interaction detail matters.",
  },
  {
    q: "Do you deliver code or just designs?",
    a: "I deliver production-ready designs with specs and assets. For select projects I also partner on front-end implementation so interaction quality survives engineering.",
  },
  {
    q: "How long does a project take?",
    a: "Most product design engagements run 3–8 weeks depending on scope. Audits and focused redesigns can be shorter; full design systems and multi-platform products take longer.",
  },
  {
    q: "Do you provide revisions?",
    a: "Yes. Every proposal includes structured review rounds. Feedback is consolidated in Figma so we iterate efficiently without endless ping-pong.",
  },
  {
    q: "What industries do you work with?",
    a: "SaaS, AI platforms, logistics, healthtech, education, and consumer apps. The common thread is complex workflows that need clarity and conversion.",
  },
];
