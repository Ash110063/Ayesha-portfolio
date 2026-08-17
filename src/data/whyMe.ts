import type { WhyMeItem } from "@/types";

export const WHY_ME_META = {
  eyebrow: "Why choose me",
  heading: "Why me as Your Designing Partner",
  sub: "What you actually get — versus what you risk without it.",
  riskLabel: "The Risk Without It",
} as const;

export const WHY_ME: WhyMeItem[] = [
  {
    icon: "/svg/why-metrics.svg",
    title: "Conversion & Metric Obsessed",
    body: "Every interface I design is optimized for user flow, high completion rates, and cognitive ease. Your users will feel the premium difference instantly.",
    risk: "Clunky, confusing user journeys that drop conversions and frustrate users. An un-optimized UX is an expensive mistake.",
  },
  {
    icon: "/svg/why-motion.svg",
    title: "Animations & Micro-interactions That Matter",
    body: "Motion is not decoration; it's communication. Every transition and interactive element is intentional—guiding your user through the product, not distracting them.",
    risk: "Static & forgettable interfaces. Products without motion feel outdated and mechanical instantly.",
  },
  {
    icon: "/svg/why-loop.svg",
    title: "You're Always In The Loop",
    body: "A transparent design process with continuous Figma review links, Loom walkthroughs, and zero ghosting. You'll always know exactly where your product stands.",
    risk: "Radio silence, misaligned features, and design revisions that waste time. You deserve a partner, not just an order-taker.",
  },
];
