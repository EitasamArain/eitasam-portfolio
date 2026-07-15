"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ImageIcon, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl border border-surface-light bg-surface/40 hover:bg-surface/60 transition-all hover:border-accent/20"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-accent/0 group-hover:bg-accent/40 rounded-l-xl transition-all" />

      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
          <div>
            <span className="font-mono text-xs text-accent tracking-wider">
              {String(index + 1).padStart(2, "0")}
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
  );
}

export default function ProjectsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main>
        <section className="py-24 sm:py-32 px-6">
          <div ref={ref} className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors font-mono"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            <SectionHeading
              number="All Projects"
              title="Every project, one page"
            />

            <div className="space-y-8">
              {projects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
