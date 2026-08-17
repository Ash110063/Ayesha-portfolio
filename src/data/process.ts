import type { ProcessStep } from "@/types";

export const PROCESS_META = {
  heading: "How I Work",
  label: "PROCESS",
} as const;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Research",
    body: "Tell me everything—your vision, target users, and business goals. I map out user personas and study your competitors.",
  },
  {
    step: "02",
    title: "Wireframing & Architecture",
    body: "Before the styling begins, we lock down the layout, user flows, and product structure to avoid structural changes later.",
  },
  {
    step: "03",
    title: "Visual Design & Systems",
    body: "Turning wireframes into polished, pixel-perfect, and cohesive interfaces using modern typography and custom design tokens.",
  },
  {
    step: "04",
    title: "Interactive Prototyping",
    body: "Adding micro-interactions and transitions so you can feel the look, flow, and motion of the design before development.",
  },
  {
    step: "05",
    title: "Dev-Ready Handoff",
    body: "Clean, organized Figma files with clear specs, component states, and assets ready for your engineering team.",
  },
];
