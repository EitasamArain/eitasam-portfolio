"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const techGroups = [
  {
    category: "Automation Platforms",
    items: ["n8n", "Zapier", "Webhooks", "REST APIs"],
  },
  {
    category: "CRM Systems",
    items: ["GoHighLevel", "HubSpot", "Zoho", "Pipedrive", "vCita"],
  },
  {
    category: "AI & Automation",
    items: ["OpenAI API", "WhatsApp Cloud API", "AI Agent Pipelines"],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express", "JWT Auth", "MongoDB Atlas"],
  },
  {
    category: "Frontend Development",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Marketing & Integrations",
    items: ["Mailchimp", "Meta Conversions API", "Facebook Lead Ads", "Google Sheets API"],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tech" className="py-24 sm:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeading
          number="08"
          title="Tech Stack"
          subtitle="Tools and technologies I work with daily"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {techGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="rounded-xl border border-surface-light bg-surface/40 p-6 hover:border-accent/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-1 h-5 bg-accent rounded-full" />
                <h3 className="font-heading text-base font-bold text-foreground">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 text-sm rounded-lg border border-surface-light bg-background/40 text-muted font-mono hover:border-accent/30 hover:text-accent transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
