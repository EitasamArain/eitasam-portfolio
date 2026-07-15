"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface TerminalLine {
  text: string;
  delay: number;
  instant?: boolean;
}

const lines: TerminalLine[] = [
  { text: "Eitasam@portfolio:~$ whoami", delay: 400 },
  { text: "> eitasam", delay: 600 },
  { text: "Eitasam@portfolio:~$ cat role.txt", delay: 500 },
  { text: "> Full-Stack Developer & AI Automation Specialist", delay: 700 },
  { text: "> Karachi, Pakistan", delay: 500 },
  { text: "Eitasam@portfolio:~$ ./stack --current", delay: 600 },
  { text: "> Next.js  |  WordPress  |  n8n  |  Zapier  |  GHL  |  API Integration", delay: 700 },
  { text: "", delay: 300 },
];

function useTypedLines(lines: TerminalLine[]) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setDone(true);
      return;
    }

    const line = lines[currentLineIndex];
    const timer = setTimeout(
      () => {
        if (line.instant) {
          setVisibleLines((prev) => {
            const next = [...prev];
            next[currentLineIndex] = line.text;
            return next;
          });
          setCurrentLineIndex((i) => i + 1);
          setCurrentCharIndex(0);
        } else if (currentCharIndex < line.text.length) {
          setVisibleLines((prev) => {
            const next = [...prev];
            const prevText = next[currentLineIndex] ?? "";
            next[currentLineIndex] = prevText + line.text[currentCharIndex];
            return next;
          });
          setCurrentCharIndex((i) => i + 1);
        } else {
          setCurrentLineIndex((i) => i + 1);
          setCurrentCharIndex(0);
        }
      },
      currentCharIndex === 0 ? line.delay : 25 + Math.random() * 20
    );

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, lines]);

  return { visibleLines, done };
}

function useScrollOpacity() {
  const [opacity, setOpacity] = useState(0.5);

  const onScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight * 0.5;
    const newOpacity = Math.max(0, 0.5 - (scrollY / maxScroll) * 0.5);
    setOpacity(newOpacity);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return opacity;
}

export default function TerminalHero() {
  const { visibleLines, done } = useTypedLines(lines);
  const scrollOpacity = useScrollOpacity();
  const spotlightRef = useRef<HTMLDivElement>(null);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = "ontouchstart" in window;
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    if (isTouchDevice.current || !spotlightRef.current) return;
    const rect = spotlightRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    spotlightRef.current.style.setProperty("--spot-x", `${x}%`);
    spotlightRef.current.style.setProperty("--spot-y", `${y}%`);
  }

  return (
    <section
      id="hero"
      ref={spotlightRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, #F59E0B08 0%, transparent 60%)",
          opacity: scrollOpacity,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-200"
        style={{
          background:
            "radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 50%), #F59E0B06 0%, transparent 60%)",
        }}
      />

      <div className="relative w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-xl border border-surface-light bg-surface/60 backdrop-blur-sm overflow-hidden"
          style={{
            animation: done ? "pulse-glow 3s ease-in-out infinite" : "none",
          }}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-light bg-background/40">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 font-mono text-xs text-muted">
              eitasam@portfolio — -zsh: ~
            </span>
          </div>

          <div className="p-5 sm:p-8 font-mono text-sm sm:text-base leading-relaxed min-h-[280px]">
            {lines.map((_, idx) => (
              <div key={idx} className="mb-1">
                {idx < visibleLines.length && visibleLines[idx] !== undefined ? (
                  <span>
                    {visibleLines[idx].startsWith(">") ? (
                      <>
                        <span className="text-accent/70">&gt;</span>
                        <span className="text-accent">
                          {visibleLines[idx].slice(1)}
                        </span>
                      </>
                    ) : visibleLines[idx].length === 0 ? (
                      <br />
                    ) : (
                      <span className="text-foreground/90">
                        {visibleLines[idx]}
                      </span>
                    )}
                  </span>
                ) : idx === visibleLines.length &&
                  idx < lines.length &&
                  lines[idx].text.length > 0 ? (
                  <span>
                    {lines[idx].text.startsWith(">") ? (
                      <>
                        <span className="text-accent/70">&gt;</span>
                        <span className="text-accent">{" ".repeat(lines[idx].text.length - 1)}</span>
                      </>
                    ) : null}
                    <span className="text-accent animate-[blink_1s_step-end_infinite]">
                      ▊
                    </span>
                  </span>
                ) : idx === visibleLines.length && idx < lines.length ? (
                  <span className="text-accent animate-[blink_1s_step-end_infinite]">
                    ▊
                  </span>
                ) : null}
              </div>
            ))}

            {done && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-1"
              >
                <span className="text-accent animate-[blink_1s_step-end_infinite]">
                  ▊
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center gap-3 mt-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-accent text-background font-semibold text-sm tracking-wide hover:bg-accent/90 transition-all hover:shadow-[0_0_20px_#F59E0B30]"
            >
              See My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-lg border border-surface-light text-foreground font-semibold text-sm tracking-wide hover:border-accent/50 hover:text-accent transition-all"
            >
              Download Resume
            </a>
            <a
              href="https://wa.me/923123795464"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-surface-light text-foreground font-semibold text-sm tracking-wide hover:border-accent/50 hover:text-accent transition-all"
            >
              Book a Free Call
            </a>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-muted font-medium">
              Available for new projects
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-muted animate-bounce"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}


