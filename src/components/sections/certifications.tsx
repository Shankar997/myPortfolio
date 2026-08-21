"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-variants";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section aria-label="Certifications" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tag="Certifications" title="Credentials" align="center" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08, 0.15)}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={fadeUp}>
              <GlassCard className="group flex h-full flex-col gap-3 p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} · {cert.date}
                </p>
                <button
                  type="button"
                  className="mt-auto inline-flex w-fit items-center gap-1 text-sm text-accent opacity-80 hover:opacity-100"
                >
                  View Certificate <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
