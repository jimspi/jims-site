"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const certified = [
  { label: "Claude Code in Action", issuer: "Anthropic", highlight: true },
];

const proficiencies = [
  { name: "Claude Code", category: "AI Dev" },
  { name: "Claude API", category: "AI Dev" },
  { name: "Model Context Protocol", category: "AI Dev" },
  { name: "AI Agent Development", category: "AI Dev" },
  { name: "OpenAI API", category: "AI Dev" },
  { name: "Next.js", category: "Web Stack" },
  { name: "TypeScript", category: "Web Stack" },
  { name: "Tailwind CSS", category: "Web Stack" },
  { name: "Supabase", category: "Web Stack" },
  { name: "Postgres (Neon)", category: "Web Stack" },
  { name: "Vercel", category: "Infrastructure" },
  { name: "GitHub", category: "Infrastructure" },
  { name: "GitHub Actions", category: "Infrastructure" },
  { name: "Progressive Web Apps", category: "Infrastructure" },
];

const categories = ["AI Dev", "Web Stack", "Infrastructure"];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const shouldReduce = useReducedMotion();

  return (
    <section
      ref={ref}
      className="bg-bg border-t border-line py-14 px-8 md:px-16 lg:px-24"
      aria-label="Tools and proficiencies"
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="section-label mb-8"
      >
        // TOOLS &amp; PLATFORMS
      </motion.p>

      {/* Claude Code in Action badge — hero treatment */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 16 }}
        transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" as const }}
        className="border-t border-rule pt-5 pb-5 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <p className="font-mono mb-3" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#c9a84c" }}>
            ANTHROPIC — COURSE COMPLETED
          </p>
          <p
            className="font-display font-bold uppercase text-ink"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)", letterSpacing: "0.06em" }}
          >
            Claude Code in Action
          </p>
        </div>
        <a
          href="https://verify.skilljar.com/c/ev7qdwsadodo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: "1px solid #7a6330",
            padding: "0.5rem 1.25rem",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div style={{ width: 6, height: 6, background: "#c9a84c" }} />
          <span className="font-mono text-gold" style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}>
            VERIFY CREDENTIAL &rarr;
          </span>
        </a>
      </motion.div>

      {/* Proficiencies by category */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {categories.map((cat, ci) => {
          const items = proficiencies.filter((p) => p.category === cat);
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 16 }}
              transition={{ delay: 0.18 + ci * 0.1, duration: 0.55, ease: "easeOut" as const }}
              className="border-t border-rule pt-7 pb-8"
              style={{
                borderRight: ci < 2 ? "1px solid #2a2824" : "none",
                paddingRight: ci < 2 ? "2.5rem" : 0,
                paddingLeft: ci > 0 ? "2.5rem" : 0,
              }}
            >
              <p className="font-mono mb-6" style={{ fontSize: "0.6rem", letterSpacing: "0.18em", color: "#7a6330" }}>
                {cat.toUpperCase()}
              </p>
              <ul className="space-y-3">
                {items.map((item, ii) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: shouldReduce ? 0 : -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: shouldReduce ? 0 : -8 }}
                    transition={{ delay: 0.26 + ci * 0.1 + ii * 0.05, duration: 0.4, ease: "easeOut" as const }}
                    className="flex items-center gap-3"
                  >
                    <div style={{ width: 3, height: 3, background: "#7a6330", flexShrink: 0 }} />
                    <span
                      className="font-body text-warm"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {item.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
