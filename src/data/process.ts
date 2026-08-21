import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "Discovery",
    title: "Discovery",
    description: "Understand the goal, the users, and the constraints before touching any code.",
  },
  {
    step: "Planning",
    title: "Planning",
    description: "Break the work into a clear scope, architecture, and timeline.",
  },
  {
    step: "Design",
    title: "Design",
    description: "Translate Figma or requirements into a component and interaction plan.",
  },
  {
    step: "Development",
    title: "Development",
    description: "Build with reusable, typed, well-tested components — no shortcuts.",
  },
  {
    step: "Testing",
    title: "Testing",
    description: "Cross-browser, cross-device, and accessibility checks before anything ships.",
  },
  {
    step: "Deployment",
    title: "Deployment",
    description: "Ship with CI/CD, monitoring, and a rollback plan in place.",
  },
  {
    step: "Support",
    title: "Support",
    description: "Stay involved post-launch for fixes, iteration, and new features.",
  },
];
