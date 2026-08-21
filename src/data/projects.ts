import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "krisper",
    name: "Krisper",
    description:
      "Marketing website with an emphasis on responsive, cross-device layouts.",
    categories: ["React"],
    tech: ["HTML5", "CSS3", "Bootstrap5", "Responsive Design"],
    liveUrl: "http://krisper.in",
    role: "Frontend Developer",
  },
  {
    slug: "grill-masters",
    name: "Grill Masters",
    description:
      "Restaurant brand site with a clean, conversion-focused responsive UI.",
    categories: ["WordPress"],
    tech: ["HTML5", "CSS3", "Bootstrap4", "Responsive Design"],
    liveUrl: "https://grillmasters.in",
    role: "Web Developer",
  },
  {
    slug: "gulla-cpa",
    name: "Gulla CPA",
    description:
      "Professional services site optimized for mobile responsiveness across devices.",
    categories: ["WordPress"],
    tech: ["WordPress", "Responsive Design", "SEO"],
    liveUrl: "https://gullacpa.com",
    role: "Web Developer",
  },
  {
    slug: "weekend-maids",
    name: "Weekend Maids",
    description:
      "Services-booking site with UI improvements aimed at conversion and clarity.",
    categories: ["WordPress"],
    tech: ["WordPress", "JavaScript", "Responsive Design"],
    liveUrl: "https://weekendmaids.net",
    role: "Frontend Developer",
  },
  {
    slug: "mondo-fresca",
    name: "Mondo Fresca",
    description:
      "Shopify storefront customization with a responsive, on-brand UI.",
    categories: ["Shopify"],
    tech: ["Shopify", "Liquid", "CSS"],
    liveUrl: "https://mondofrescala.myshopify.com",
    role: "Shopify Developer",
  },
  {
    slug: "shepherd-app",
    name: "Shepherd App",
    description:
      "Responsive frontend for a care-coordination application, built feature-by-feature.",
    categories: ["React", "TypeScript"],
    tech: ["React.js", "TypeScript", "REST APIs"],
    liveUrl: "https://shepherdcares.com",
    role: "Frontend Developer",
  },

  {
    slug: "whetness",
    name: "Whetness",
    description:
      "Responsive marketing site with a focus on UX polish and API-driven content.",
    categories: ["React"],
    tech: ["React.js", "REST APIs", "Responsive Design"],
    liveUrl: "https://whetness.com",
    role: "Frontend Developer",
  },
  {
    slug: "jobr-merchant-admin",
    name: "Jobr Merchant Admin",
    description:
      "Merchant-facing admin dashboard for managing listings, orders, and account settings.",
    longDescription:
      "A responsive merchant admin console built with React.js, Next.js, and Tailwind CSS. Focused on a reusable component architecture so new dashboard modules could ship quickly, with REST API integration for live merchant data and account management.",
    categories: ["React", "Next.js"],
    tech: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://merchant-admin.jobr.com",
    featured: true,
    role: "Frontend Developer",
  },
  {
    slug: "jobr-admin-panel",
    name: "Jobr Admin Panel",
    description:
      "Internal administrative dashboard with wallet management and reporting views.",
    longDescription:
      "Administrative dashboard with wallet management interfaces, responsive data tables, and role-based views for internal operations teams.",
    categories: ["React", "Next.js"],
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    liveUrl: "https://adminpanel.jobr.com",
    role: "Frontend Developer",
  },
];

export const projectFilters = [
  "All",
  "React",
  "Next.js",
  "TypeScript",
  "WordPress",
  "Shopify",
] as const;
