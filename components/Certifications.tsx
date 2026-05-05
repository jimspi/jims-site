"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { certifications } from "@/lib/certs";
import type { Cert } from "@/lib/certs";

function pad<T>(arr: T[], min: number): T[] {
  if (!arr.length) return arr;
  const out = [...arr];
  while (out.length < min) out.push(...arr);
  return out;
}

const paddedCerts = pad(certifications, certifications.length);

function CertCard({ cert }: { cert: Cert }) {
  return (
    <div
      className="shrink-0 overflow-hidden"
      style={{
        width: 320,
        marginRight: 14,
        border: "1px solid #2a2824",
        background: "#0d0d0b",
        position: "relative",
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          height: 24,
          background: "#0a0a08",
          borderBottom: "1px solid #1e1d1b",
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 3 }}>
          <div style={{ width: 5, height: 5, background: "#1e1d1b" }} />
          <div style={{ width: 5, height: 5, background: "#1e1d1b" }} />
          <div style={{ width: 5, height: 5, background: "#7a6330", opacity: 0.7 }} />
        </div>
        <span className="font-mono" style={{ fontSize: "0.38rem", letterSpacing: "0.1em", color: "#4a4744" }}>
          {cert.issuer.toLowerCase()} — verified credential
        </span>
      </div>

      {/* Certificate image */}
      <div style={{ position: "relative", width: 320, height: 180 }}>
        <Image
          src={cert.imageUrl}
          alt={cert.title}
          fill
          sizes="320px"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
        {/* Bottom gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(10,10,8,0.88) 0%, transparent 50%)",
        }} />
        {/* Title overlay */}
        <div style={{ position: "absolute", bottom: 10, left: 12, right: 12 }}>
          <p
            className="font-serif"
            style={{ fontSize: "0.7rem", fontStyle: "italic", color: "#ede9e1", lineHeight: 1.3 }}
          >
            {cert.title}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: "8px 12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid #1e1d1b",
      }}>
        <span className="font-mono" style={{ fontSize: "0.5rem", letterSpacing: "0.1em", color: "#c9a84c" }}>
          {cert.issuer.toUpperCase()}
        </span>
        <span className="font-mono" style={{ fontSize: "0.5rem", letterSpacing: "0.08em", color: "#706c66" }}>
          {cert.issued}
        </span>
      </div>
    </div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const shouldReduce = useReducedMotion();

  return (
    <section
      ref={ref}
      className="bg-surface border-t border-line py-14"
      aria-label="Licenses and certifications"
    >
      <div className="px-8 md:px-16 lg:px-24">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="section-label mb-8"
        >
          // LICENSES &amp; CERTIFICATIONS
        </motion.p>

        {/* Stat + narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 border-t border-rule pt-10 mb-6">
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 20 }}
            transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" as const }}
          >
            <div className="flex items-end gap-1 leading-none mb-4">
              <span
                className="font-display font-bold text-ink"
                style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
              >
                50
              </span>
              <span
                className="font-display font-bold text-gold"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.01em", lineHeight: 1, paddingBottom: "0.1em" }}
              >
                +
              </span>
            </div>
            <p
              className="font-serif text-warm leading-snug"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.3rem)", fontStyle: "italic" }}
            >
              Professional certifications in AI and leadership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 20 }}
            transition={{ delay: 0.18, duration: 0.6, ease: "easeOut" as const }}
            className="flex flex-col justify-center"
          >
            <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.9rem" }}>
              More than 50 professional certifications from Anthropic, LinkedIn Learning, and Microsoft, specializing in generative AI, AI leadership, model context protocols, and workforce development.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scrolling strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="marquee-wrap"
        style={{ overflow: "hidden", position: "relative" }}
      >
        {/* Edge fades */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: "0 auto 0 0",
          width: 80,
          background: "linear-gradient(to right, #111110, transparent)",
          zIndex: 10, pointerEvents: "none",
        }} />
        <div aria-hidden="true" style={{
          position: "absolute", inset: "0 0 0 auto",
          width: 80,
          background: "linear-gradient(to left, #111110, transparent)",
          zIndex: 10, pointerEvents: "none",
        }} />

        <div className="marquee-left">
          {[...paddedCerts, ...paddedCerts].map((cert, i) => (
            <CertCard key={`cert-${i}`} cert={cert} />
          ))}
        </div>
      </motion.div>

      {/* LinkedIn link */}
      <div className="px-8 md:px-16 lg:px-24 mt-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <a
            href="https://www.linkedin.com/in/jimspiewak/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-gold font-mono text-muted"
            style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
          >
            Full profile on LinkedIn &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
