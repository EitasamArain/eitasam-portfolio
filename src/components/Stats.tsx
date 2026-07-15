"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "5+", label: "Projects Delivered" },
  { value: "2+", label: "Years Experience" },
  { value: "<2hr", label: "Response Time" },
  { value: "100%", label: "Remote Work" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            className="text-center"
          >
            <p className="font-heading text-3xl sm:text-4xl font-bold text-accent">
              {stat.value}
            </p>
            <p className="text-muted text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
