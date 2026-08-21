"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion-variants";
import { blogPosts } from "@/data/blog";

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tag="Blog" title="Notes on frontend engineering" align="center" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08, 0.15)}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={fadeUp}>
              <GlassCard className="group flex h-full flex-col gap-3 p-6 transition-transform duration-300 hover:-translate-y-1">
                <Badge variant="secondary" className="w-fit">
                  {post.category}
                </Badge>
                <h3 className="font-display text-lg font-semibold">{post.title}</h3>
                <p className="flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Read <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
