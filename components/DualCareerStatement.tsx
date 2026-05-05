"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-mono text-muted mb-10"
      style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}
    >
      {children}
    </p>
  );
}

export default function DualCareerStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: shouldReduce ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.55, ease: "easeOut" as const },
    },
  });

  return (
    <section
      ref={ref}
      className="bg-bg border-t border-line py-24 px-8 md:px-16 lg:px-24"
      aria-label="Dual career statement"
    >
      {/* Section label */}
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SectionLabel>// WHO I AM</SectionLabel>
      </motion.div>

      {/* Two-column split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* LEFT — Journalism */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div
            className="border-t border-gold-dim pt-8 mb-6"
            style={{ borderTopWidth: 1 }}
          />
          <h2
            className="font-serif text-warm mb-8 leading-tight"
            style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)", fontStyle: "italic" }}
          >
            Nearly two decades of holding power accountable.
          </h2>
          <p className="font-body text-warm leading-loose" style={{ fontSize: "1.05rem" }}>
            Starting in Sarasota and Fort Myers, Florida, then Memphis, Tennessee,
            now Salt Lake City — every market shaped a sharper instinct for the
            story underneath the story. I anchor the midday newscast at KUTV,
            CBS&rsquo;s affiliate in Utah, lead the station&rsquo;s investigative
            unit, and created and run the YouTube Originals division from the
            ground up. My investigations have changed state and local policy and
            moved legislation. I also hold an FAA Part 107 drone pilot
            certification — because sometimes the story is only visible from above.
          </p>
        </motion.div>

        {/* RIGHT — Builder */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div
            className="border-t border-gold-dim pt-8 mb-6"
            style={{ borderTopWidth: 1 }}
          />
          <h2
            className="font-serif text-warm mb-8 leading-tight"
            style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)", fontStyle: "italic" }}
          >
            Building the tools I always wished existed.
          </h2>
          <p className="font-body text-warm leading-loose" style={{ fontSize: "1.05rem" }}>
            I taught myself to build software because I needed tools that
            didn&rsquo;t exist. What started as AI experiments to make my newsroom
            work faster became a habit of shipping real products — for my work,
            for my kids, for my friends, and for the businesses I consult. I
            build with Next.js, Supabase, TypeScript, and the Anthropic Claude
            API. Claude Code is my development environment. I don&rsquo;t use
            templates.
          </p>
        </motion.div>
      </div>

      {/* Stat bar */}
      <motion.div
        variants={fadeUp(0.35)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-16"
      >
        <div className="border-t border-gold-dim pt-8">
          <p
            className="font-mono text-muted tracking-widest"
            style={{ fontSize: "0.75rem", letterSpacing: "0.15em" }}
          >
            18+ YEARS IN BROADCAST&nbsp;&nbsp;/&nbsp;&nbsp;2 CAREERS&nbsp;&nbsp;/&nbsp;&nbsp;10+ APPS SHIPPED&nbsp;&nbsp;/&nbsp;&nbsp;ZERO SHORTCUTS
          </p>
        </div>
      </motion.div>
    </section>
  );
}
