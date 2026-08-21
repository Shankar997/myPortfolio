import type { NavLink, SocialLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  // { label: "Testimonials", href: "#testimonials" },
  // { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Shankar997", icon: "github" },
  { label: "Email", href: "mailto:shankar300597@gmail.com", icon: "mail" },
  { label: "WhatsApp", href: "https://wa.me/917015034609", icon: "whatsapp" },
];

export const siteConfig = {
  name: "Shankar",
  role: "Senior Frontend Developer",
  email: "shankar300597@gmail.com",
  phone: "+91 7015034609",
  location: "Ambala, India",
  github: "https://github.com/Shankar997",
  resumeUrl: "/resume.pdf",
  calendlyUrl: "https://calendly.com/",
};
