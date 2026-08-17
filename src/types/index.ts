export interface Project {
  slug: string;
  index: string;
  name: string;
  blurb: string;
  image: string;
  background?: string;
  href?: string;
}

export interface Service {
  id: string;
  index: string;
  title: string;
  body: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  years: string;
}

export interface WhyMeItem {
  icon: string;
  title: string;
  body: string;
  risk: string;
}

export interface NavLink {
  label: string;
  target: string;
}
