"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Mail, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) {
      return;
    }
    setLoading(true);
    setError(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

    console.log("EmailJS env vars:", {
      serviceId: serviceId ? "set" : "UNDEFINED",
      templateId: templateId ? "set" : "UNDEFINED",
      publicKey: publicKey ? "set" : "UNDEFINED",
    });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        { name, email, message },
        publicKey
      );
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setError(
        "Something went wrong, please try again or contact me directly via WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 bg-surface/20">
      <div ref={ref} className="max-w-5xl mx-auto">
        <SectionHeading
          number="10"
          title="Get in Touch"
          subtitle="Free 15-minute call to discuss your project — no commitment required"
        />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted leading-relaxed mb-8">
              Whether you need a full-stack application, an AI automation
              pipeline, or just want to discuss an idea — I&apos;m available for
              freelance work and collaboration.
            </p>

            <div className="space-y-5">
              <a
                href="https://wa.me/923123795464"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg border border-surface-light bg-surface/50 flex items-center justify-center group-hover:border-accent/40 transition-all">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm group-hover:text-accent transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-muted text-xs">+92 312 3795464</p>
                </div>
              </a>

              <a
                href="mailto:muhammadeitasam@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg border border-surface-light bg-surface/50 flex items-center justify-center group-hover:border-accent/40 transition-all">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm group-hover:text-accent transition-colors">
                    Email
                  </p>
                  <p className="text-muted text-xs">muhammadeitasam@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  Message Sent
                </h3>
                <p className="text-muted text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute -left-[9999px]"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-muted mb-1.5 tracking-wider uppercase"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-lg border border-surface-light bg-background/50 text-foreground placeholder:text-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-muted mb-1.5 tracking-wider uppercase"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-surface-light bg-background/50 text-foreground placeholder:text-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-muted mb-1.5 tracking-wider uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-2.5 rounded-lg border border-surface-light bg-background/50 text-foreground placeholder:text-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2.5">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 rounded-lg bg-accent text-background font-semibold text-sm tracking-wide hover:bg-accent/90 transition-all hover:shadow-[0_0_20px_#F59E0B30] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
