"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { automationGallery } from "@/data/automationGallery";

function Lightbox({ src, caption, onClose }: { src: string; caption: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-full max-w-[95vw] max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={caption || "Gallery image"}
          fill
          unoptimized
          className="object-contain"
          sizes="95vw"
          priority
        />
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white/90 text-sm text-center font-mono">
              {caption}
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function AutomationGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  const openLightbox = useCallback((src: string, caption: string) => {
    setLightbox({ src, caption });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  return (
    <section id="automation" className="py-24 sm:py-32 px-6 bg-surface/20">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeading
          number="07"
          title="Automation Gallery"
          subtitle="Real-world n8n automations and AI agent architectures"
        />

        <div className="space-y-8">
          {automationGallery.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className="group relative rounded-xl border border-surface-light bg-surface/40 hover:bg-surface/60 transition-all hover:border-accent/20"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent/0 group-hover:bg-accent/40 rounded-l-xl transition-all" />

              <div className="p-6 sm:p-8">
                <span className="font-mono text-xs text-accent tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mt-1 mb-5">
                  {entry.title}
                </h3>

                <div className="grid sm:grid-cols-5 gap-6">
                  <div className="sm:col-span-2">
                    <div
                      className={
                        entry.images.length > 4
                          ? "grid grid-cols-2 sm:grid-cols-4 gap-2"
                          : ""
                      }
                    >
                      {entry.images.map((img) => (
                        <div
                          key={img.src}
                          className={`relative rounded-lg overflow-hidden bg-surface-light/30 cursor-pointer ${
                            entry.images.length > 4
                              ? "aspect-[4/3]"
                              : "mb-2 aspect-video"
                          }`}
                          onClick={() => openLightbox(img.src, img.caption)}
                        >
                          <Image
                            src={img.src}
                            alt={img.caption}
                            fill
                            unoptimized
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="px-3 py-1.5 rounded-lg bg-black/60 text-white/90 text-xs font-mono backdrop-blur-sm">
                              Click to enlarge
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {entry.images.length > 0 && (
                      <p className="text-muted text-xs leading-relaxed italic mt-2">
                        {entry.images[0].caption}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-3">
                    <p className="text-muted text-sm leading-relaxed">
                      {entry.description}
                    </p>
                    {entry.results && entry.results.length > 0 && (
                      <div className="mt-5 pt-5 border-t border-surface-light">
                        <p className="font-heading text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                          Key Results
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {entry.results.map((result) => (
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
                    {entry.tools && entry.tools.length > 0 && (
                      <div className={`flex flex-wrap gap-2 ${entry.results && entry.results.length > 0 ? "mt-5" : "mt-5 pt-5 border-t border-surface-light"}`}>
                        {entry.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 text-xs font-mono rounded-full border border-surface-light text-muted bg-background/50"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            src={lightbox.src}
            caption={lightbox.caption}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
