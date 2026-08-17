export const SECTION_IDS = {
  hero: "home",
  work: "work",
  about: "about",
  whyMe: "why-me",
  services: "services",
  process: "process",
  faq: "faq",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const NAV_LINKS = [
  { label: "Home", target: SECTION_IDS.hero },
  { label: "About Me", target: SECTION_IDS.about },
  { label: "Projects", target: SECTION_IDS.work },
  { label: "Services", target: SECTION_IDS.services },
  { label: "Process", target: SECTION_IDS.process },
  { label: "FAQ", target: SECTION_IDS.faq },
  { label: "Contact", target: SECTION_IDS.contact },
] as const;
