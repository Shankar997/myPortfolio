"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeUp, viewportOnce } from "@/lib/motion-variants";
import { experience } from "@/data/experience";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" aria-label="Experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          tag="Experience"
          title="Where the work actually happened"
          description="Five roles, one throughline: ship reliable frontend work and make the people around me better at it."
          align="center"
        />

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-[7px] top-0 h-full w-px bg-border sm:left-[15px]" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[7px] top-0 w-px bg-gradient-to-b from-accent to-accent-cyan sm:left-[15px]"
          />

          <div className="flex flex-col gap-12">
            {experience.map((item) => (
              <motion.div
                key={`${item.company}-${item.start}`}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="relative pl-8 sm:pl-12"
              >
                <span
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 sm:h-[1.9rem] sm:w-[1.9rem] sm:left-0 sm:top-0 sm:flex sm:items-center sm:justify-center ${
                    item.current ? "border-accent bg-accent/20" : "border-border bg-background"
                  }`}
                >
                  {item.current && (
                    <span className="hidden h-2 w-2 animate-pulse rounded-full bg-accent sm:block" />
                  )}
                </span>

                <GlassCard className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{item.role}</h3>
                      <p className="text-sm text-accent">
                        {item.company} · {item.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.start} — {item.end}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground">{item.summary}</p>

                  <ul className="mt-4 flex flex-col gap-1.5">
                    {item.responsibilities.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-foreground/85">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
