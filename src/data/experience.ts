import type { ExperienceItem } from "@/types";
import { SITE } from "@/data/site";

export const ABOUT = {
  eyebrow: "UI/UX & Product Designer",
  heading: "Designing experiences that solve real problems",
  sub: `UI/UX & Product Design Specialist based in ${SITE.location}.`,
  greeting: `Hello! I'm ${SITE.name}`,
  available: "Available for work",
  bio: "With 6+ years of experience designing digital products across SaaS, AI, logistics, healthtech, and education, I partner with founders and product teams to turn complex problems into clear, conversion-focused interfaces. My process blends research, systems thinking, and polished visual craft — so what ships feels intentional and measurable.",
  stackLabel: "My tech stack",
} as const;

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Cplusoft",
    role: "Product Design Manager & Consultant",
    years: "2024 – Present",
  },
  {
    company: "Astro Labs",
    role: "Senior User Interface and Experience Designer",
    years: "2023 – 2024",
  },
  {
    company: "Consultancy Outfit",
    role: "Senior User Interface and Experience Designer",
    years: "2021 – 2023",
  },
  {
    company: "Freelance",
    role: "Design Strategist & Consultant",
    years: "2020 – Present",
  },
];

export const TECH_STACK = [
  { name: "Figma", src: "/images/stack/figma.png" },
  { name: "Framer", src: "/images/stack/framer.png" },
  { name: "Miro", src: "/images/stack/miro.png" },
  { name: "Zapier", src: "/images/stack/zapier.png" },
  { name: "OpenAI", src: "/images/stack/openai.png" },
  { name: "Loom", src: "/images/stack/loom.png" },
  { name: "Bento", src: "/images/stack/bento.png" },
  { name: "Vercel", src: "/images/stack/vercel.png" },
  { name: "Notion", src: "/images/stack/notion.png" },
] as const;
