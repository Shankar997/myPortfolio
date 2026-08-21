"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProgressRing } from "@/components/shared/progress-ring";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-variants";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Skills"
          title="A stack built for shipping, not just demos"
          description="Categorized by where each tool actually earns its place in a real project."
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08, 0.15)}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.key} variants={fadeUp}>
              <GlassCard className="group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-5">
                  <h3 className="font-display text-lg font-semibold">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-sm text-foreground/90">
                        {skill.name}
                      </span>
                      {/* <ProgressRing value={skill.level} />  */}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
