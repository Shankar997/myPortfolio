"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GlassCard } from "@/components/shared/glass-card";
import { TiltCard } from "@/components/shared/tilt-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { viewportOnce } from "@/lib/motion-variants";
import { projectFilters, projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.categories.includes(filter));
  }, [filter]);

  return (
    <section id="projects" aria-label="Projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Projects"
          title="Selected work across dashboards, marketing, and commerce"
          description="A mix of production React/Next.js applications, WordPress builds, and Shopify storefronts."
          align="center"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter projects by technology">
          {projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                filter === item
                  ? "border-accent bg-accent/15 text-accent"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard>
                  <GlassCard className="flex h-full flex-col gap-4 p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold">{project.name}</h3>
                      {project.featured && (
                        <Badge className="shrink-0 bg-accent text-white">Featured</Badge>
                      )}
                    </div>
                    <p className="flex-1 text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-2 text-sm">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-accent hover:underline"
                        >
                          Live <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                        >
                          <FaGithub className="h-3.5 w-3.5" /> Code
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="ml-auto text-muted-foreground hover:text-foreground"
                      >
                        Case Study →
                      </button>
                    </div>
                  </GlassCard>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={Boolean(activeProject)} onOpenChange={(open) => !open && setActiveProject(null)}>
        <DialogContent className="glass max-w-lg border-none">
          {activeProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-xl">{activeProject.name}</DialogTitle>
                <DialogDescription>
                  {activeProject.role ?? "Frontend Developer"}
                  {activeProject.year ? ` · ${activeProject.year}` : ""}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">
                {activeProject.longDescription ?? activeProject.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono">
                    {tech}
                  </Badge>
                ))}
              </div>
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-1 text-sm text-accent hover:underline"
                >
                  Visit live site <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
