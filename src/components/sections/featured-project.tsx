"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";

const featured = projects.find((project) => project.featured) ?? projects[0];

export function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.4, 0.15]);

  return (
    <section aria-label="Featured project" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading tag="Featured" title="Flagship build" align="center" />

        <div ref={ref} className="relative mt-16">
          <motion.div
            aria-hidden
            style={{ opacity: glow }}
            className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[140px]"
          />

          <motion.div style={{ y }} className="mx-auto max-w-3xl">
            {/* Laptop mockup — swap the mocked dashboard below for a real screenshot/video capture */}
            <div className="glow-ring rounded-2xl border border-border/60 bg-[#0b0e18] p-3 shadow-2xl">
              <div className="flex items-center gap-1.5 pb-2 pl-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-3 rounded-xl bg-[#05070b] p-4">
                <div className="flex flex-col gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-6 rounded-md ${i === 1 ? "bg-accent/70" : "bg-white/5"}`}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-3 gap-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="h-16 rounded-lg bg-white/5" />
                    ))}
                  </div>
                  <div className="flex h-32 items-end gap-2 rounded-lg bg-white/[0.03] p-4">
                    {[40, 70, 55, 90, 60, 80, 45].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-accent to-accent-cyan"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto h-3 w-2/3 rounded-b-2xl bg-gradient-to-b from-white/10 to-transparent" />
          </motion.div>

          <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-4 text-center">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">{featured.name}</h3>
            <p className="text-muted-foreground">{featured.longDescription ?? featured.description}</p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {featured.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
            {featured.liveUrl && (
              <MagneticButton href={featured.liveUrl} variant="secondary" target="_blank">
                <span className="inline-flex items-center gap-1.5">
                  View Live <ArrowUpRight className="h-4 w-4" />
                </span>
              </MagneticButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
