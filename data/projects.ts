// Project cards on the right-hand column.
// All positions are in Figma pixels on a 1000 × 567 card and are scaled
// responsively in the component, so you can copy numbers straight from Figma.

export type Rect = {
  left?: number; // px from card's left edge; omit to centre horizontally
  top: number;
  width: number;
  height: number;
  radius?: number;
};

export type PhoneLayer = Rect & {
  /** Transparent PNG exported at the Figma frame size; fills the rect. */
  src: string;
};

export type Project = {
  slug: string;
  title: string;
  date: string;
  background: string;
  /** Glow gradient — colours exactly as in Figma. */
  glow: string;
  /** Which way the glow drifts: 1 = right, -1 = left. */
  drift: 1 | -1;
  /** 1 = standard motion, lower = calmer. */
  energy?: number;
  tagWidth?: number;
  href?: string;
} & (
  | {
      device: "laptop";
      screen: Rect;
      /** MP4 path in /public. A .webm with the same name is used first when present. Leave empty for a placeholder. */
      video?: string;
      poster?: string;
    }
  | { device: "phone"; phones: PhoneLayer[] }
);

export const projects: Project[] = [
  {
    slug: "tech-company-website",
    title: "Tech Company Website",
    date: "June 2026",
    background: "#141414",
    glow: "linear-gradient(to bottom, #46f698 0%, #defc3e 74.882%)",
    drift: 1,
    device: "laptop",
    screen: { top: 169.8, width: 427, height: 256.402, radius: 6.057 },
    video: "/videos/tech-company.mp4",
    poster: "/videos/tech-company.jpg",
  },
  {
    slug: "voice-agents-platform",
    title: "Voice Agents Platform",
    date: "Jan 2026",
    background: "#141414",
    glow: "linear-gradient(to bottom, #fc7c53 26.458%, #63c6ff 42.399%, #b316e0 69.468%)",
    drift: 1,
    device: "laptop",
    screen: { top: 172, width: 429, height: 243, radius: 9 },
    video: "/videos/voice-agents.mp4",
    poster: "/videos/voice-agents.jpg",
  },
  {
    slug: "logistic-management",
    title: "Logistic Management",
    date: "May 2026",
    background: "#151515",
    glow: "linear-gradient(to bottom, #34eeff 0%, #ff8a15 74.882%)",
    drift: -1,
    device: "laptop",
    screen: { top: 171.8, width: 428.578, height: 254.201, radius: 5 },
    video: "/videos/logistics.mp4",
    poster: "/videos/logistics.jpg",
  },
  {
    slug: "event-bus-management",
    title: "Event Bus Management",
    date: "Aug 2026",
    background: "#141414",
    glow: "linear-gradient(to bottom, #53b0fc 18.483%, #c474ef 31.754%)",
    drift: -1,
    device: "laptop",
    screen: { left: 285.15, top: 175, width: 428.698, height: 244, radius: 8 },
    video: "/videos/event-bus.mp4",
    poster: "/videos/event-bus.jpg",
  },
  {
    slug: "art-marketplace-app",
    title: "Exquisite Art Marketplace App",
    date: "Nov 2025",
    background: "#141414",
    glow: "linear-gradient(to bottom, #fab52c 18.483%, #f13a3a 31.754%)",
    drift: 1,
    energy: 0.7,
    tagWidth: 201,
    device: "phone",
    phones: [
      {
        src: "/assets/phone-art.png",
        top: 113,
        width: 369.343,
        height: 383,
      },
    ],
  },
  {
    slug: "trip-planner-app",
    title: "Trip Planner App",
    date: "Oct 2025",
    background: "#141414",
    glow: "linear-gradient(to bottom, #46f698 0%, #defc3e 74.882%)",
    drift: 1,
    device: "phone",
    phones: [
      // Both phones exported together from Figma (242,141 → 773.49,515.21)
      {
        src: "/assets/phone-trip.png",
        left: 242,
        top: 141,
        width: 531.49,
        height: 374.212,
      },
    ],
  },
];
