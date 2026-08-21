"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeUp, viewportOnce } from "@/lib/motion-variants";
import { processSteps } from "@/data/process";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.5"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section aria-label="Process" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Process"
          title="A predictable process, not a black box"
          description="The same seven steps whether it's a landing page or a full product build."
          align="center"
        />

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-3 top-0 h-full w-px bg-border sm:left-0 sm:top-3 sm:h-px sm:w-full">
            <motion.div
              style={{ width: lineWidth }}
              className="hidden h-px bg-gradient-to-r from-accent to-accent-cyan sm:block"
            />
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-y-10">
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="relative w-full pl-8 sm:w-[calc(50%-1.5rem)] sm:pl-0 lg:w-[calc(100%/7-1.2rem)]"
              >
                <div className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background sm:static sm:mb-4 sm:translate-x-0" />
                <h3 className="font-mono text-sm text-accent">{step.step}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
