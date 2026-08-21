"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-variants";
import { stats } from "@/data/stats";

export function StatsBand() {
  return (
    <section aria-label="Statistics" className="relative px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08, 0)}
          className="glass glow-ring grid grid-cols-2 gap-8 rounded-3xl p-10 sm:grid-cols-5"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="flex flex-col items-center text-center">
              <span className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
