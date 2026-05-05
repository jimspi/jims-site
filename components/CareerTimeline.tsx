"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface TimelineStop {
  city: string;
  state: string;
  years: string;
  role: string;
  narrative: string;
}

const stops: TimelineStop[] = [
  {
    city: "SARASOTA",
    state: "FL",
    years: "2004–2006",
    role: "Reporter",
    narrative:
      "First market. Florida AP recognition. Learned to find the story in every mundane assignment. The early discipline that makes or breaks a journalist.",
  },
  {
    city: "FORT MYERS",
    state: "FL",
    years: "2006–2009",
    role: "Anchor & Investigative Reporter",
    narrative:
      "Suncoast Emmy recognition. Fluoroquinolone antibiotics investigation begins — the reporting that would eventually define a national career.",
  },
  {
    city: "MEMPHIS",
    state: "TN",
    years: "2009–2012",
    role: "Anchor & Chief Investigative Reporter",
    narrative:
      "RTDNA, Mid-South Emmys, Tennessee AP. Changed city policy through reporting. The work started mattering beyond the broadcast.",
  },
  {
    city: "SALT LAKE CITY",
    state: "UT",
    years: "2012–Present",
    role: "Anchor / Chief Investigative Reporter / YouTube Originals Creator",
    narrative:
      "KUTV CBS. National Murrow Award. National Headliner Award. YouTube Originals division — created it, led it, built the audience from zero. Early AI adoption brought into the newsroom before anyone else was asking about it.",
  },
];

function Stop({
  stop,
  index,
  inView,
}: {
  stop: TimelineStop;
  index: number;
  inView: boolean;
}) {
  const shouldReduce = useReducedMotion();
  const delay = 0.08 + index * 0.13;
  const ordinal = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 20 }}
      transition={{ delay, duration: 0.55, ease: "easeOut" as const }}
      className="relative border-t border-rule pt-5 pb-8"
    >
      {/* Ordinal */}
      <p
        className="font-mono mb-5"
        style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#7a6330" }}
      >
        {ordinal}
      </p>

      {/* City */}
      <p
        className="font-display font-bold text-ink uppercase leading-none mb-1"
        style={{ fontSize: "clamp(1.3rem, 2vw, 1.8rem)", letterSpacing: "0.06em" }}
      >
        {stop.city}
        <span className="text-gold" style={{ marginLeft: "0.4em" }}>{stop.state}</span>
      </p>

      {/* Year */}
      <p
        className="font-mono text-muted mb-6"
        style={{ fontSize: "0.65rem", letterSpacing: "0.14em" }}
      >
        {stop.years}
      </p>

      {/* Role */}
      <p
        className="font-serif text-warm leading-snug mb-4"
        style={{ fontSize: "clamp(0.88rem, 1.1vw, 1rem)", fontStyle: "italic" }}
      >
        {stop.role}
      </p>

      {/* Narrative */}
      <p
        className="font-body text-muted leading-relaxed"
        style={{ fontSize: "0.875rem" }}
      >
        {stop.narrative}
      </p>
    </motion.article>
  );
}

export default function CareerTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section
      ref={ref}
      className="bg-bg border-t border-line py-14 px-8 md:px-16 lg:px-24"
      aria-label="Career timeline"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="section-label mb-8"
      >
        // THE CAREER
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-0">
        {stops.map((stop, i) => (
          <Stop key={stop.city} stop={stop} index={i} inView={inView} />
        ))}
      </div>

      {/* Journey line — mobile */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.65, duration: 0.4 }}
        className="mt-12 lg:hidden font-mono text-muted"
        style={{ fontSize: "0.6rem", letterSpacing: "0.16em" }}
      >
        SARASOTA &rarr; FORT MYERS &rarr; MEMPHIS &rarr; SALT LAKE CITY
      </motion.p>
    </section>
  );
}
