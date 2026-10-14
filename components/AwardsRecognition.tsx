"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function AwardsRecognition() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay: number, y = 24) => ({
    initial: { opacity: 0, y: shouldReduce ? 0 : y },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : y },
    transition: { delay, duration: 0.6, ease: "easeOut" as const },
  });

  return (
    <section
      ref={ref}
      className="bg-surface border-t border-line py-14 px-8 md:px-16 lg:px-24"
      aria-label="Awards and recognition"
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="section-label mb-8"
      >
        // RECOGNITION
      </motion.p>

      {/* National awards — editorial hero treatment */}
      <div className="mb-20 space-y-0">
        {/* Murrow */}
        <motion.article {...fadeUp(0.1)} className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-16 border-t border-rule pt-6 pb-6">
          <div>
            <p
              className="font-mono mb-5"
              style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#c9a84c" }}
            >
              NATIONAL — RTDNA
            </p>
            <h3
              className="font-serif text-ink leading-none mb-0"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontStyle: "italic",
                letterSpacing: "-0.01em",
              }}
            >
              National Edward R.
              <br />
              Murrow Award
            </h3>
          </div>
          <div className="flex flex-col justify-end lg:border-l lg:border-rule lg:pl-10">
            <p
              className="font-mono mb-3"
              style={{ fontSize: "0.6rem", letterSpacing: "0.14em", color: "#7a6330" }}
            >
              EXCELLENCE IN BROADCAST JOURNALISM
            </p>
            <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.9rem" }}>
              The most prestigious award in electronic journalism. Awarded for investigative reporting on the dangers of fluoroquinolone antibiotics.
            </p>
          </div>
        </motion.article>

        {/* Headliner */}
        <motion.article {...fadeUp(0.18)} className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-16 border-t border-rule pt-6 pb-6">
          <div>
            <p
              className="font-mono mb-5"
              style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#c9a84c" }}
            >
              NATIONAL
            </p>
            <h3
              className="font-serif text-ink leading-none"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontStyle: "italic",
                letterSpacing: "-0.01em",
              }}
            >
              National
              <br />
              Headliner Award
            </h3>
          </div>
          <div className="flex flex-col justify-end lg:border-l lg:border-rule lg:pl-10">
            <p
              className="font-mono mb-3"
              style={{ fontSize: "0.6rem", letterSpacing: "0.14em", color: "#7a6330" }}
            >
              OUTSTANDING ACHIEVEMENT IN JOURNALISM
            </p>
            <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.9rem" }}>
              One of the oldest and most prestigious awards in journalism, recognizing consistently superior performance in the craft.
            </p>
          </div>
        </motion.article>
      </div>

      {/* Regional & Chapter */}
      <motion.div {...fadeUp(0.28, 16)}>
        <p className="section-label mb-8">REGIONAL &amp; CHAPTER</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-rule">
          {[
            { count: "5×", title: "Regional Murrow Awards" },
            { count: "3×", title: "Emmy Awards" },
            { count: "6×", title: "Associated Press" },
            { count: "4×", title: "Emmy Nominations" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: shouldReduce ? 0 : 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 12 }}
              transition={{ delay: 0.32 + i * 0.07, duration: 0.5, ease: "easeOut" as const }}
              className="pt-8 pb-6 pr-8"
              style={{ borderRight: i < 3 ? "1px solid #2a2824" : "none" }}
            >
              <p
                className="font-display font-bold text-gold leading-none mb-2"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "0.02em" }}
              >
                {item.count}
              </p>
              <p
                className="font-serif text-warm leading-snug mb-1"
                style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)", fontStyle: "italic" }}
              >
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Credentials strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-14 border-t border-rule pt-7"
      >
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {[
            "FAA Part 107 Certified Drone Pilot",
            "RTDNA — Mid-South Chapter",
            "Tennessee AP Broadcasters Award",
          ].map((item, i) => (
            <span key={i} className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.08em", color: "#706c66" }}>
              <span style={{ color: "#ede9e1", marginRight: 6 }}>—</span>{item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
