"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface Doc {
  id: string;
  title: string;
  context: string;
}

const docs: Doc[] = [
  {
    id: "uro21QicXAs",
    title: "Decades-old mysteries of abandoned newborns in Utah could be solved with DNA advancements",
    context:
      "An investigation into unidentified infants discovered across Utah over decades — and how modern DNA technology is finally giving them names, and giving families answers.",
  },
  {
    id: "khvvLRTKh_Y",
    title: "DNA evidence clears Utah man of murder after 19 years in prison, fails to identify new suspect",
    context:
      "The story of a man who spent nearly two decades incarcerated for a crime the evidence now says he did not commit — and the unresolved question of who did.",
  },
];

function VideoCard({ doc, delay, inView }: { doc: Doc; delay: number; inView: boolean }) {
  const [playing, setPlaying] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduce ? 0 : 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 28 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" as const }}
      className="flex flex-col"
    >
      {/* Video area */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          background: "#080807",
          border: "1px solid #2a2824",
          overflow: "hidden",
          cursor: playing ? "default" : "pointer",
        }}
        onClick={() => !playing && setPlaying(true)}
        role={playing ? undefined : "button"}
        aria-label={playing ? undefined : `Play: ${doc.title}`}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${doc.id}?autoplay=1&rel=0&modestbranding=1`}
            title={doc.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        ) : (
          <>
            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${doc.id}/hqdefault.jpg`}
              alt={doc.title}
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
                filter: "sepia(20%) contrast(1.08) brightness(0.7)",
              }}
            />

            {/* Gradient veil */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(8,8,7,0.75) 0%, rgba(8,8,7,0.1) 50%, transparent 100%)",
            }} />

            {/* Play button */}
            <div
              style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -60%)",
                width: 52, height: 52,
                border: "1px solid rgba(201,168,76,0.7)",
                background: "rgba(8,8,7,0.65)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.25s ease, border-color 0.25s ease",
              }}
            >
              <div
                style={{
                  width: 0, height: 0,
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderLeft: "14px solid #c9a84c",
                  marginLeft: 3,
                }}
              />
            </div>

            {/* Bottom label bar */}
            <div
              style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "1.75rem 1.25rem 1rem",
                background: "linear-gradient(to top, rgba(8,8,7,0.95) 0%, transparent 100%)",
              }}
            >
              <p
                className="font-mono"
                style={{ fontSize: "0.55rem", letterSpacing: "0.18em", color: "#c9a84c" }}
              >
                KUTV CBS — INVESTIGATIVE
              </p>
            </div>
          </>
        )}
      </div>

      {/* Title + context */}
      <div style={{ paddingTop: "1.5rem" }}>
        <h3
          className="font-serif text-warm leading-snug mb-3"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            fontStyle: "italic",
            letterSpacing: "-0.01em",
          }}
        >
          {doc.title}
        </h3>
        <div style={{ width: 32, height: 1, background: "#7a6330", marginBottom: "1rem" }} />
        <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.875rem" }}>
          {doc.context}
        </p>
      </div>
    </motion.article>
  );
}

export default function Documentaries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section
      ref={ref}
      className="bg-bg border-t border-line py-14 px-8 md:px-16 lg:px-24"
      aria-label="Investigative documentaries"
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="section-label mb-3"
      >
        // THE WORK
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" as const }}
        className="font-serif text-warm mb-8"
        style={{ fontSize: "clamp(1.2rem, 2vw, 1.7rem)", fontStyle: "italic", letterSpacing: "-0.01em" }}
      >
        Memorable storytelling.
      </motion.p>

      {/* Video grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {docs.map((doc, i) => (
          <VideoCard key={doc.id} doc={doc} delay={0.12 + i * 0.14} inView={inView} />
        ))}
      </div>
    </section>
  );
}
