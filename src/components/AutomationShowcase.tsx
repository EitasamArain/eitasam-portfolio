"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const nodes = [
  { id: "trigger", label: "WhatsApp\nMessage", x: 10, y: 50 },
  { id: "ai", label: "AI Processing\n(OpenAI)", x: 35, y: 50 },
  { id: "data", label: "Data Layer\n(Google Sheets)", x: 60, y: 50 },
  { id: "response", label: "Response\n(WhatsApp)", x: 85, y: 50 },
];

const connections = [
  { from: "trigger", to: "ai" },
  { from: "ai", to: "data" },
  { from: "data", to: "response" },
];

export default function AutomationShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="automation"
      className="py-24 sm:py-32 px-6 bg-surface/20"
    >
      <div ref={ref} className="max-w-5xl mx-auto">
        <SectionHeading
          number="07"
          title="Automation in Action"
          subtitle="What an n8n-based AI agent workflow looks like"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl border border-surface-light bg-surface/40 p-4 sm:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-accent animate-[node-pulse_2s_ease-in-out_infinite]" />
            <span className="font-heading text-sm font-semibold text-foreground">
              n8n Workflow
            </span>
            <span className="font-mono text-xs text-muted ml-auto">
              live
            </span>
          </div>

          <div className="relative w-full aspect-[3/1] sm:aspect-[4/1]">
            <svg
              viewBox="0 0 400 100"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {connections.map((conn, i) => {
                const from = nodes.find((n) => n.id === conn.from)!;
                const to = nodes.find((n) => n.id === conn.to)!;
                const x1 = (from.x / 100) * 380 + 10;
                const y1 = from.y;
                const x2 = (to.x / 100) * 380 + 10;
                const y2 = to.y;

                return (
                  <g key={conn.from + conn.to}>
                    <line
                      x1={x1 + 30}
                      y1={y1}
                      x2={x2 - 30}
                      y2={y2}
                      stroke="#1E2440"
                      strokeWidth="2"
                    />
                    <motion.line
                      x1={x1 + 30}
                      y1={y1}
                      x2={x2 - 30}
                      y2={y2}
                      stroke="#F59E0B"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ strokeDashoffset: 100, opacity: 0 }}
                      animate={
                        isInView
                          ? {
                              strokeDashoffset: 0,
                              opacity: 0.6,
                              transition: {
                                duration: 1.5,
                                delay: 0.5 + i * 0.3,
                                repeat: Infinity,
                                repeatDelay: 2,
                              },
                            }
                          : {}
                      }
                    />
                    <motion.circle
                      cx={x1 + 30}
                      cy={y1}
                      r="3"
                      fill="#F59E0B"
                      initial={{ opacity: 0 }}
                      animate={
                        isInView
                          ? {
                              opacity: [0, 1, 0],
                              cx: [x1 + 30, x2 - 30],
                              transition: {
                                duration: 2,
                                delay: 0.5 + i * 0.3,
                                repeat: Infinity,
                                repeatDelay: 2,
                                ease: "linear",
                              },
                            }
                          : {}
                      }
                    />
                  </g>
                );
              })}

              {nodes.map((node, i) => (
                <motion.g
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.4, delay: 0.3 + i * 0.15 },
                        }
                      : {}
                  }
                >
                  <rect
                    x={(node.x / 100) * 380 + 10 - 25}
                    y={node.y - 18}
                    width="50"
                    height="36"
                    rx="6"
                    fill="#111827"
                    stroke={
                      node.id === "trigger" || node.id === "response"
                        ? "#1E2440"
                        : "#F59E0B40"
                    }
                    strokeWidth="1.5"
                  />
                  {i > 0 && i < nodes.length - 1 && (
                    <rect
                      x={(node.x / 100) * 380 + 10 - 25}
                      y={node.y - 18}
                      width="50"
                      height="36"
                      rx="6"
                      fill="#F59E0B08"
                      stroke="#F59E0B60"
                      strokeWidth="1.5"
                    />
                  )}
                  <text
                    x={(node.x / 100) * 380 + 10}
                    y={node.y - 4}
                    textAnchor="middle"
                    fill="#F59E0B"
                    fontSize="8"
                    fontFamily="IBM Plex Mono, monospace"
                    fontWeight="500"
                  >
                    {node.label.split("\n")[0]}
                  </text>
                  <text
                    x={(node.x / 100) * 380 + 10}
                    y={node.y + 8}
                    textAnchor="middle"
                    fill="#64748B"
                    fontSize="7"
                    fontFamily="IBM Plex Mono, monospace"
                  >
                    {node.label.split("\n")[1]}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Trigger", desc: "Inbound WhatsApp message triggers the workflow" },
              { label: "Process", desc: "AI interprets intent and extracts entities" },
              { label: "Data", desc: "Queries/livres Google Sheets for context" },
              { label: "Respond", desc: "Formulates reply and sends via WhatsApp API" },
            ].map((step) => (
              <div
                key={step.label}
                className="rounded-lg border border-surface-light bg-background/50 p-3"
              >
                <h4 className="font-mono text-xs text-accent mb-1">{step.label}</h4>
                <p className="text-muted text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
