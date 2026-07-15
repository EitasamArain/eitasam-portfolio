"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Workflow, Zap, MessageSquare, Layout, Plug, Building2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom websites and web apps built with Next.js, React, and modern full-stack architecture — from landing pages to complete platforms.",
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    description:
      "End-to-end workflow automation connecting your tools, APIs, and data sources to eliminate manual, repetitive work.",
  },
  {
    icon: Zap,
    title: "Zapier Automation",
    description:
      "Connecting your apps and services with Zapier to automate handoffs between platforms without custom code.",
  },
  {
    icon: MessageSquare,
    title: "GoHighLevel (GHL) Workflows",
    description:
      "CRM automation, pipeline setup, and workflow building inside GoHighLevel for sales and marketing teams.",
  },
  {
    icon: Layout,
    title: "WordPress Development",
    description:
      "Custom WordPress sites, theme customization, and plugin integration for businesses that need a flexible CMS.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Connecting third-party services and platforms through REST APIs, webhooks, and custom middleware.",
  },
  {
    icon: Building2,
    title: "CRM Setup & Automation",
    description:
      "CRM workflow automation, pipeline setup, and integration with GoHighLevel, HubSpot, Zoho, Pipedrive, and vCita — streamline your sales process from lead to close.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 sm:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeading
          number="03"
          title="Services"
          subtitle="What I can build for you"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.08 }}
                className="rounded-xl border border-surface-light bg-surface/40 p-6 hover:border-accent/20 hover:bg-surface/60 transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
