import type { Project, Service } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "logis-ai",
    index: "01",
    name: "Logis AI",
    blurb:
      "Accurate, route-based transportation cost estimates for your logistics operations. Just select your truck category, enter pickup and drop locations, and let our system do the math.",
    image: "/images/projects/logis-ai.png",
  },
  {
    slug: "aynigma",
    index: "02",
    name: "Aynigma",
    blurb:
      "Aynigma is an AI-powered platform that helps organizations automate workflows, gain actionable insights, and boost productivity through intelligent, AI-driven solutions.",
    image: "/images/projects/aynigma.png",
  },
  {
    slug: "nurexa",
    index: "03",
    name: "Nurexa",
    blurb:
      "From scheduling appointments to answering inquiries, Nurexa transforms customer interaction into a seamless, intelligent experience — so your business never misses a beat.",
    image: "/images/projects/nurexa.png",
  },
  {
    slug: "fc-football",
    index: "04",
    name: "FC Football",
    blurb:
      "Smart Football Club uses AI and computer vision to track player movement, analyze performance, and deliver actionable insights in real time. It's not just cameras — it's a complete football intelligence platform.",
    image: "/images/projects/fc-football.png",
  },
  {
    slug: "wittify",
    index: "05",
    name: "Wittify",
    blurb:
      "Wittify AI is an omnichannel conversational AI platform that lets businesses build and deploy voice and text AI agents without coding.",
    image: "/images/projects/wittify-card.png",
    background: "/images/projects/wittify-bg.jpg",
  },
  {
    slug: "healix",
    index: "06",
    name: "Healix",
    blurb:
      "Automate patient communication, scheduling, and administrative workflows with AI that works 24/7, so your care team can focus on what truly matters — delivering exceptional patient care.",
    image: "/images/projects/healix.png",
  },
];

export const SERVICES: Service[] = [
  {
    id: "product-design",
    index: "01",
    title: "Product Design (End-to-End)",
    body: "Leading the complete product design lifecycle from discovery to delivery. This includes stakeholder workshops, user journey mapping, wireframing, prototyping, UI design, design system creation, developer handoff, and iterative optimization based on user feedback and product metrics.",
  },
  {
    id: "saas-dashboard",
    index: "02",
    title: "SaaS Dashboard Design",
    body: "Designing data-dense dashboards that stay readable under load — information hierarchy, chart selection, empty and error states, responsive tables, and a component library your engineers can actually ship.",
  },
  {
    id: "prototyping",
    index: "03",
    title: "Prototyping & Interaction Design",
    body: "High-fidelity, clickable prototypes with real motion. Micro-interactions, transitions, and state changes specified precisely so what you approve is what gets built.",
  },
  {
    id: "ux-audit",
    index: "04",
    title: "UX Audit & Product Improvement",
    body: "A structured teardown of your existing product: heuristic review, funnel analysis, accessibility check, and a prioritised roadmap of fixes ranked by impact versus effort.",
  },
];

export const HERO_FOLDERS = [
  {
    shape: "/svg/folder-web.svg",
    title: "Web\nDesigns",
    body: "Designing modern, responsive websites that combine strong visuals with purposeful UX.",
  },
  {
    shape: "/svg/folder-ai.svg",
    title: "AI & SAAS\nPlatforms",
    body: "Designing intuitive, scalable AI and SaaS products that simplify complex experiences.",
  },
  {
    shape: "/svg/folder-mobile.svg",
    title: "Mobile\nApplications",
    body: "Creating seamless mobile experiences focused on usability, clarity, and engagement.",
  },
] as const;

export const HERO_TAGLINE = [
  "Crafting digital experiences that feel",
  "intuitive, intentional, and unforgettable.",
] as const;
