"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="Who I am and what drives my work"
        />

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-5 text-muted leading-relaxed"
          >
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
              Specializing in WhatsApp AI agents and CRM automation for e-commerce &amp; service businesses
            </p>
            <p className="text-foreground text-lg font-heading font-semibold">
              IT Graduate from University of Sindh Jamshoro.
              <span className="text-accent"> Freelance developer.</span>
            </p>
            <p>
              Based in Karachi, I started my professional journey at Easyaiz
              Software House, where I cut my teeth on real-world client projects
              and learned what it takes to ship production-grade software.
            </p>
            <p>
              Today, I build custom websites, WordPress themes, and full-stack
              applications for international clients — alongside automation
              systems powered by n8n, Zapier, and GoHighLevel. From WhatsApp AI
              sales agents to e-commerce platforms and CRM pipelines, I bridge
              the gap between traditional web development and workflow automation.
            </p>
            <p>
              Every project starts with a clear problem statement and ends with
              a measurable outcome. No fluff, just systems that work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <div className="relative group">
              <div className="relative rounded-xl overflow-hidden border border-accent/30 group-hover:border-accent/60 transition-colors duration-300">
                <Image
                  src="/profile.png"
                  alt="Profile photo"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent/40 group-hover:border-accent/70 transition-colors pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent/40 group-hover:border-accent/70 transition-colors pointer-events-none" />
              </div>
              <div className="absolute -bottom-1.5 -right-1.5 flex items-center gap-1.5 bg-background/90 backdrop-blur-sm border border-accent/30 rounded-full px-2.5 py-1">
                <span className="w-2 h-2 rounded-full bg-accent animate-[node-pulse_2s_ease-in-out_infinite]" />
                <span className="text-[10px] font-mono text-accent tracking-widest font-semibold">PHOTO</span>
              </div>
            </div>

            <div className="rounded-lg border border-surface-light bg-surface/50 p-5">
              <h3 className="font-heading font-semibold text-foreground mb-3 text-sm tracking-widest uppercase text-accent">
                Core Belief
              </h3>
              <p className="text-muted text-sm leading-relaxed italic">
                &ldquo;Good automation feels like magic. Great automation feels
                like nothing at all — it just works, invisibly, every time.&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-surface-light bg-surface/50 p-5">
              <h3 className="font-heading font-semibold text-foreground mb-3 text-sm tracking-widest uppercase text-accent">
                Currently
              </h3>
              <ul className="text-muted text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  Building WhatsApp AI agents for e-commerce clients
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  Developing full-stack apps with Next.js &amp; Node.js
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  Integrating CRMs with custom automation pipelines
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
