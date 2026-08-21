"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-variants";
import { stats } from "@/data/stats";

const facts = [
  "Started my career converting PSD designs into responsive HTML in 2019",
  "Lead frontend teams as Team Lead across two agencies",
  "Shipped production dashboards, marketing sites, and Shopify storefronts",
  "Based in Ambala, India — working with teams across time zones",
];

export function About() {
  return (
    <section id="about" aria-label="About me" className="relative px-6 py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-start">
        <div className="flex-1">
          <SectionHeading
            tag="About"
            title="Six years of turning briefs into shipped products"
            description="I'm a Senior Frontend Developer based in Ambala, India, focused on React, Next.js, and TypeScript — with a background that started in WordPress and Photoshop, which is exactly why I care this much about pixel accuracy."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.1, 0.2)}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {facts.map((fact) => (
              <motion.div
                key={fact}
                variants={fadeUp}
                className="glass rounded-2xl p-5 text-sm text-muted-foreground"
              >
                {fact}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08, 0.1)}
          className="grid w-full max-w-md grid-cols-2 gap-4 self-start"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <GlassCard className="flex flex-col gap-1 p-6">
                <span className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
