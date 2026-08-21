import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    title: "Frontend",
    description: "Core languages and markup",
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "HTML5", level: 97 },
      { name: "CSS3", level: 95 },
    ],
  },
  {
    key: "react-ecosystem",
    title: "React Ecosystem",
    description: "Building blocks for modern UIs",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "React Query", level: 85 },
      // { name: "Redux Toolkit", level: 82 },
      { name: "Zustand", level: 80 },
    ],
  },
  {
    key: "styling",
    title: "Styling",
    description: "Design systems and responsive layout",
    skills: [
      { name: "Tailwind CSS", level: 96 },
      { name: "Responsive Design", level: 96 },
      { name: "Figma to Code", level: 90 },
    ],
  },
  {
    key: "animation",
    title: "Animation",
    description: "Motion, interaction, and 3D",
    skills: [
      { name: "Framer Motion", level: 88 },
      { name: "GSAP", level: 84 },
      { name: "Three.js / R3F", level: 75 },
    ],
  },
  {
    key: "data",
    title: "State & Data",
    description: "Talking to APIs, keeping state sane",
    skills: [
      { name: "REST APIs", level: 93 },
      // { name: "GraphQL", level: 78 },
    ],
  },
  {
    key: "cms",
    title: "CMS & Tools",
    description: "Where a lot of client work actually lives",
    skills: [
      { name: "WordPress", level: 90 },
      { name: "SEO", level: 82 },
      { name: "Accessibility (WCAG)", level: 80 },
      { name: "Performance Optimization", level: 88 },
    ],
  },
];
