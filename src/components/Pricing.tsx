"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Tab = "automation" | "webdev";

const tabs: { key: Tab; label: string }[] = [
  { key: "automation", label: "Automation" },
  { key: "webdev", label: "Web Development" },
];

const tiers: Record<Tab, { name: string; price: string; desc: string; popular: boolean }[]> = {
  automation: [
    {
      name: "Automation Starter",
      price: "Starting at $150",
      desc: "Single workflow automation (e.g. one WhatsApp bot or n8n pipeline), setup, and testing.",
      popular: false,
    },
    {
      name: "Business Automation",
      price: "Starting at $400",
      desc: "Multi-step automation system, CRM integration, and 2 weeks of post-launch support.",
      popular: true,
    },
    {
      name: "Enterprise Automation",
      price: "Custom Quote",
      desc: "Complex multi-platform automation systems with ongoing maintenance and support — scope discussed on a call.",
      popular: false,
    },
  ],
  webdev: [
    {
      name: "Landing Page",
      price: "Starting at $100",
      desc: "A single, polished landing page — ideal for portfolios, product launches, or lead generation. Responsive design included.",
      popular: false,
    },
    {
      name: "Business Website",
      price: "Starting at $250",
      desc: "Multi-page website (About, Services, Contact, etc.) with contact form integration and responsive design.",
      popular: true,
    },
    {
      name: "Full-Stack Web App",
      price: "Custom Quote",
      desc: "Custom web application with backend, database, authentication, and admin features — scope discussed on a call.",
      popular: false,
    },
  ],
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<Tab>("automation");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-24 sm:py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <SectionHeading
          number="04"
          title="Packages"
          subtitle="Starting points — every project is scoped individually"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-surface rounded-full p-1 border border-surface-light">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold font-mono tracking-wider transition-colors duration-200 ${
                  activeTab === tab.key
                    ? "text-background"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {activeTab === tab.key && (
                  <motion.span
                    layoutId="pricing-tab-bg"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    className="absolute inset-0 rounded-full bg-accent"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid md:grid-cols-3 gap-5 sm:gap-6 items-start"
          >
            {tiers[activeTab].map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.08 }}
                className={`relative rounded-xl border p-6 flex flex-col ${
                  tier.popular
                    ? "border-accent/50 bg-accent/5"
                    : "border-surface-light bg-surface/40"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-accent text-background text-xs font-semibold font-mono tracking-wider">
                    Most Popular
                  </span>
                )}

                <h3 className="font-heading text-lg font-bold text-foreground mt-1">
                  {tier.name}
                </h3>
                <p className="font-heading text-2xl font-bold text-accent mt-3">
                  {tier.price}
                </p>
                <p className="text-muted text-sm leading-relaxed mt-3 flex-1">
                  {tier.desc}
                </p>
                <a
                  href="#contact"
                  className={`mt-6 w-full px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide text-center transition-all flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-accent text-background hover:bg-accent/90 hover:shadow-[0_0_20px_#F59E0B30]"
                      : "border border-surface-light text-foreground hover:border-accent/50 hover:text-accent"
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-muted text-sm mt-8"
        >
          Final pricing depends on project scope — book a free call to get an
          accurate quote.
        </motion.p>
      </div>
    </section>
  );
}
