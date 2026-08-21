"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-variants";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" aria-label="Services" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Services"
          title="How I can help"
          description="From a single landing page to a full product build — end to end frontend ownership."
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.06, 0.15)}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;
            return (
              <motion.div key={service.title} variants={fadeUp}>
                <GlassCard className="group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
