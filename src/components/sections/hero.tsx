"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Download, MessageCircle, ArrowDown } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { GlassCard } from "@/components/shared/glass-card";
import { GsapTextReveal } from "@/components/shared/gsap-text-reveal";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { GridBackground } from "@/components/shared/grid-background";
import { DeveloperAvatar } from "@/components/avatar/developer-avatar";
import { SpeechBubble } from "@/components/avatar/speech-bubble";
import { TechBadge } from "@/components/avatar/tech-badge";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { siteConfig } from "@/data/nav";

const ParticleField = dynamic(
  () =>
    import("@/components/three/particle-field").then(
      (mod) => mod.ParticleField,
    ),
  { ssr: false },
);

const heroFacts = [
  { label: "Experience", value: "6+ Years" },
  { label: "Projects", value: "100+" },
  { label: "Clients", value: "50+" },
  { label: "Availability", value: "Available for Work", accent: true },
  { label: "Location", value: "India" },
  { label: "Current Focus", value: "AI + Frontend" },
];

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-32 pb-24"
    >
      <GridBackground />
      <AuroraBackground />
      <ParticleField />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-16 px-6 lg:flex-row lg:items-center lg:gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12, 0.1)}
          className="flex flex-1 flex-col gap-7"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-muted/60 px-3 py-1 font-mono text-xs text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for Work
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Hello, I&apos;m
            <br />
            <span className="">
              <GsapTextReveal text="Shankar" delay={0.5} />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-display text-xl font-medium text-gradient sm:text-2xl"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
          >
            Frontend Developer with 6+ years of experience building modern,
            scalable, responsive, accessible, and high-performance web
            applications using React.js, Next.js, TypeScript, and modern
            frontend technologies.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects
            </MagneticButton>
            <MagneticButton
              href={siteConfig.resumeUrl}
              variant="secondary"
              target="_blank"
            >
              <span className="inline-flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Resume
              </span>
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> Hire Me
              </span>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <div className="relative flex flex-1 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full max-w-md"
          >
            <SpeechBubble />
            <DeveloperAvatar />

            <TechBadge
              icon={<SiReact className="text-[#61DAFB]" />}
              className="left-[-6%] top-[8%]"
              duration={5}
            />
            <TechBadge
              icon={<SiNextdotjs className="text-foreground" />}
              className="right-[-4%] top-[26%]"
              duration={6}
              delay={0.6}
            />
            <TechBadge
              icon={<SiTypescript className="text-[#3178C6]" />}
              className="left-[-2%] bottom-[16%]"
              duration={5.5}
              delay={1.1}
            />
            <TechBadge
              icon={<SiJavascript className="text-[#F7DF1E]" />}
              className="right-[2%] bottom-[2%]"
              duration={6.5}
              delay={0.3}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-2 bottom-4 hidden w-64 sm:-right-6 sm:block lg:right-[-4.5rem]"
          >
            <GlassCard className="animate-float-slower p-5">
              <dl className="flex flex-col gap-3">
                {heroFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <dt className="text-muted-foreground">{fact.label}</dt>
                    <dd
                      className={
                        fact.accent
                          ? "font-medium text-emerald-500 dark:text-emerald-400"
                          : "font-medium"
                      }
                    >
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mx-auto mt-16 flex flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span className="font-mono tracking-widest">SCROLL TO EXPLORE</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
