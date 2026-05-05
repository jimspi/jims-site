"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const columns = [
  {
    ordinal: "01",
    headline: "I build what I need.",
    body: "Most of my apps started as a solution to a problem I had at work or at home. Not a market opportunity. Not a startup idea. A gap in my own workflow where something should exist but didn't. That constraint forces clarity about what actually matters in the product.",
  },
  {
    ordinal: "02",
    headline: "I build to understand.",
    body: "Building software is how I understand AI. Not reading about it. Not watching demos. Shipping something that has to actually work. Every app has taught me something about what these models can and can't do — and how to work with them rather than around them.",
  },
  {
    ordinal: "03",
    headline: "I build with Claude Code.",
    body: "Claude Code is my primary development environment. I use it as a collaborator, not a vending machine. I prompt it like I would brief a smart producer — with context, constraints, and a clear outcome. The result is faster, and more often than not, better than what I would have built alone.",
  },
];

export default function BuildPhilosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const shouldReduce = useReducedMotion();

  return (
    <section
      ref={ref}
      className="bg-surface border-t border-line py-14 px-8 md:px-16 lg:px-24"
      aria-label="Build philosophy"
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="section-label mb-8"
      >
        // THE PHILOSOPHY
      </motion.p>

      {/* Three columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-10">
        {columns.map((col, i) => (
          <motion.article
            key={col.ordinal}
            initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 24 }}
            transition={{ delay: 0.1 + i * 0.13, duration: 0.6, ease: "easeOut" as const }}
            className="border-t border-rule pt-5 pb-5 pr-0 md:pr-10"
            style={{ borderRight: i < 2 ? "none" : undefined }}
          >
            <p
              className="font-mono text-gold-dim mb-6"
              style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}
            >
              {col.ordinal}
            </p>
            <h3
              className="font-serif text-warm leading-snug mb-5"
              style={{ fontSize: "clamp(1.1rem, 1.7vw, 1.5rem)", fontStyle: "italic", letterSpacing: "-0.01em" }}
            >
              {col.headline}
            </h3>
            <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.9rem" }}>
              {col.body}
            </p>
          </motion.article>
        ))}
      </div>

      {/* Statement banner */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 16 }}
        transition={{ delay: 0.52, duration: 0.6, ease: "easeOut" as const }}
        className="border-t border-rule pt-6"
      >
        <p
          className="font-display font-bold uppercase text-ink"
          style={{
            fontSize: "clamp(1.1rem, 2.4vw, 2rem)",
            letterSpacing: "0.06em",
            lineHeight: 1.2,
          }}
        >
          I am not an AI enthusiast.
          <br />
          <span style={{ color: "#c9a84c" }}>I am a builder who uses AI.</span>
        </p>
      </motion.div>
    </section>
  );
}
