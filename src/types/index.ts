export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "mail" | "whatsapp";
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  responsibilities: string[];
  tech: string[];
}

export type ProjectCategory = "React" | "Next.js" | "TypeScript" | "WordPress" | "Shopify";

export interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  categories: ProjectCategory[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  role?: string;
  year?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  key: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}
