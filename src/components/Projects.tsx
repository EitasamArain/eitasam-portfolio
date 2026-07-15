"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ImageIcon, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

const previewCount = 3;

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 sm:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeading
          number="06"
          title="Featured Projects"
          subtitle="Case studies in automation and full-stack development"
        />

        <div className="space-y-8">
          {projects.slice(0, previewCount).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative rounded-xl border border-surface-light bg-surface/40 hover:bg-surface/60 transition-all hover:border-accent/20"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent/0 group-hover:bg-accent/40 rounded-l-xl transition-all" />

              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="font-mono text-xs text-accent tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mt-1">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm mt-0.5">{project.client}</p>
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden mb-5 aspect-video bg-surface-light/30">
                  {project.video ? (
                    <video
                      src={project.video}
                      controls
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                      playsInline
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-muted/40" />
                    </div>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-muted mb-2">
                      Problem
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-muted mb-2">
                      Solution
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {project.results && project.results.length > 0 && (
                  <div className="mt-5 pt-5 border-t border-surface-light">
                    <p className="font-heading text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                      Key Results
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {project.results.map((result) => (
                        <div
                          key={result}
                          className="rounded-lg border border-accent/15 bg-accent/5 px-3 py-2"
                        >
                          <p className="font-heading text-sm font-bold text-accent leading-tight">
                            {result}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className={`flex flex-wrap gap-2 ${project.results && project.results.length > 0 ? "mt-5" : "mt-5 pt-5 border-t border-surface-light"}`}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-full border border-surface-light text-muted bg-background/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-semibold text-sm tracking-wide hover:bg-accent/90 hover:shadow-[0_0_20px_#F59E0B30] transition-all"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
