"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Web Development",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
        <path d="M12 6v12M18 12H6" />
        <rect x="2" y="3" width="20" height="18" rx="3" />
      </svg>
    ),
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "WordPress",
      "Node.js / Express",
      "REST APIs",
      "Full-Stack Architecture",
    ],
    color: "accent",
  },
  {
    title: "Automation & AI Agents",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    items: [
      "n8n Workflows",
      "Zapier",
      "WhatsApp Cloud API",
      "GoHighLevel CRM",
      "AI Agent Pipelines",
      "OpenAI Integrations",
      "Meta Conversions API",
    ],
    color: "accent",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 bg-surface/20">
      <div ref={ref} className="max-w-5xl mx-auto">
        <SectionHeading
          number="02"
          title="Skills & Expertise"
          subtitle="Two disciplines, one workflow"
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-0 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-surface-light -translate-x-1/2" />
          <div className="hidden md:block absolute left-1/2 top-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2" />

          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className={`relative p-6 md:p-8 ${
                i === 0 ? "md:pr-10" : "md:pl-10"
              }`}
            >
              <div className="rounded-xl border border-surface-light bg-surface/60 p-6 h-full hover:border-accent/20 transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
