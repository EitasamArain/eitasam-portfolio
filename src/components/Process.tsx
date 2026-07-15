"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We discuss your goals, requirements, and what success looks like.",
  },
  {
    number: "02",
    title: "Proposal & Timeline",
    description:
      "You get a clear scope of work, cost, and delivery date — no surprises.",
  },
  {
    number: "03",
    title: "Build & Updates",
    description:
      "I build in stages with regular progress updates so you're never in the dark.",
  },
  {
    number: "04",
    title: "Delivery & Support",
    description:
      "Final delivery plus support to make sure everything runs smoothly.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-24 sm:py-32 px-6 bg-surface/20">
      <div ref={ref} className="max-w-4xl mx-auto">
        <SectionHeading
          number="05"
          title="How I Work"
          subtitle="A clear process from idea to delivery"
        />

        <div className="relative">
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-px bg-surface-light" />

          <div className="space-y-10 sm:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
                className="relative sm:pl-20 sm:pb-10 last:pb-0"
              >
                <div className="hidden sm:flex absolute left-5 top-0 w-7 h-7 rounded-full bg-background border-2 border-accent items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                <div className="sm:hidden flex items-center gap-4 mb-3">
                  <span className="font-mono text-sm text-accent font-semibold">
                    {step.number}
                  </span>
                  <div className="flex-1 h-px bg-surface-light" />
                </div>

                <div className="pl-0 sm:pl-0">
                  <span className="hidden sm:block font-mono text-sm text-accent font-semibold mb-1">
                    {step.number}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted mt-1 max-w-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
