"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { apps } from "@/lib/apps";
import { certifications } from "@/lib/certs";
import type { Cert } from "@/lib/certs";

const NAME = "JIM SPIEWAK";

function pad<T>(arr: T[], min: number): T[] {
  if (!arr.length) return arr;
  const out = [...arr];
  while (out.length < min) out.push(...arr);
  return out;
}

// Upper row: professional apps  |  Lower row: certifications
const screened = apps.filter((a) => a.screenshotUrl !== null);
const row1 = pad(screened.filter((a) => a.category === "professional"), 5);
const row2 = pad(certifications, 7);

function firstSentence(text: string): string {
  const s = text.split(". ")[0];
  return s.length > 90 ? s.slice(0, 88) + "…" : s;
}

function MarqueeCard({ app }: { app: (typeof apps)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="shrink-0 overflow-hidden"
      style={{
        width: 250,
        marginRight: 12,
        border: "1px solid #1e1d1b",
        background: "#111110",
        position: "relative",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Chrome bar */}
      <div
        style={{
          height: 22,
          background: "#0a0a08",
          borderBottom: "1px solid #1e1d1b",
          display: "flex",
          alignItems: "center",
          padding: "0 8px",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 3 }}>
          <div style={{ width: 5, height: 5, background: "#1e1d1b" }} />
          <div style={{ width: 5, height: 5, background: "#1e1d1b" }} />
          <div style={{ width: 5, height: 5, background: "#7a6330", opacity: 0.8 }} />
        </div>
        <div
          style={{
            flex: 1, height: 11, background: "#1e1d1b",
            display: "flex", alignItems: "center", padding: "0 6px",
          }}
        >
          <span className="font-mono" style={{ fontSize: "0.4rem", letterSpacing: "0.08em", color: "#6b6760" }}>
            {app.tag.replace(/[\[\]]/g, "").toLowerCase()}
          </span>
        </div>
      </div>

      {/* Screenshot */}
      <div style={{ position: "relative", width: 250, height: 140 }}>
        {app.screenshotUrl && (
          <Image
            src={app.screenshotUrl}
            alt={app.name}
            fill
            sizes="250px"
            style={{ objectFit: "cover", objectPosition: "top left" }}
          />
        )}

        {/* Default gradient + name */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(10,10,8,0.88) 0%, rgba(10,10,8,0.15) 55%, transparent 100%)",
            transition: "opacity 0.2s ease",
            opacity: hovered ? 0 : 1,
          }}
        />
        <p
          className="font-serif"
          style={{
            position: "absolute", bottom: 8, left: 10, right: 10,
            fontSize: "0.68rem", fontStyle: "italic", color: "#e8e4dc", lineHeight: 1.2,
            transition: "opacity 0.2s ease",
            opacity: hovered ? 0 : 1,
          }}
        >
          {app.name}
        </p>

        {/* Hover overlay — short description */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "rgba(10,10,8,0.88)",
            display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "12px 14px",
            transition: "opacity 0.2s ease",
            opacity: hovered ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          <p
            className="font-mono"
            style={{ fontSize: "0.52rem", letterSpacing: "0.12em", color: "#c9a84c", marginBottom: 6 }}
          >
            {app.tag.replace(/[\[\]]/g, "")}
          </p>
          <p
            className="font-serif"
            style={{ fontSize: "0.68rem", fontStyle: "italic", color: "#e8e4dc", lineHeight: 1.5 }}
          >
            {firstSentence(app.description)}
          </p>
        </div>
      </div>
    </div>
  );
}

function CertMarqueeCard({ cert }: { cert: Cert }) {
  return (
    <div
      className="shrink-0 overflow-hidden"
      style={{
        width: 250,
        marginRight: 12,
        border: "1px solid #1e1d1b",
        background: "#111110",
        position: "relative",
        cursor: "default",
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          height: 22,
          background: "#0a0a08",
          borderBottom: "1px solid #1e1d1b",
          display: "flex",
          alignItems: "center",
          padding: "0 8px",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 3 }}>
          <div style={{ width: 5, height: 5, background: "#1e1d1b" }} />
          <div style={{ width: 5, height: 5, background: "#1e1d1b" }} />
          <div style={{ width: 5, height: 5, background: "#7a6330", opacity: 0.8 }} />
        </div>
        <div
          style={{
            flex: 1, height: 11, background: "#1e1d1b",
            display: "flex", alignItems: "center", padding: "0 6px",
          }}
        >
          <span className="font-mono" style={{ fontSize: "0.4rem", letterSpacing: "0.08em", color: "#6b6760" }}>
            {cert.issuer.toLowerCase()} — verified
          </span>
        </div>
      </div>

      {/* Cert image */}
      <div style={{ position: "relative", width: 250, height: 140 }}>
        <Image
          src={cert.imageUrl}
          alt={cert.title}
          fill
          sizes="250px"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(10,10,8,0.88) 0%, rgba(10,10,8,0.1) 55%, transparent 100%)",
          }}
        />
        <p
          className="font-serif"
          style={{
            position: "absolute", bottom: 8, left: 10, right: 10,
            fontSize: "0.62rem", fontStyle: "italic", color: "#e8e4dc", lineHeight: 1.2,
          }}
        >
          {cert.title}
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 22 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: shouldReduce ? 0 : i * 0.04, duration: 0.45, ease: "easeOut" as const },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 16 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: shouldReduce ? 0 : 0.6 + i * 0.12, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  return (
    <header className="relative min-h-screen overflow-hidden bg-bg">

      {/* ── HEADSHOT ── desktop only ──────────────────────────────────── */}
      <div
        className="hidden md:block absolute inset-y-0 right-0 w-[55%] pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/headshot.jpg"
          alt="Jim Spiewak, anchor and chief investigative reporter at KUTV CBS Salt Lake City"
          fill priority sizes="55vw"
          style={{ objectFit: "cover", objectPosition: "top center", filter: "sepia(20%) contrast(1.05) brightness(0.9)" }}
        />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, #0a0a08 0%, rgba(10,10,8,0.85) 22%, rgba(10,10,8,0.25) 55%, transparent 80%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to bottom, #0a0a08 0%, transparent 12%, transparent 50%, #0a0a08 100%)" }} />
      </div>

      {/* ── MOBILE headshot texture ──────────────────────────────────── */}
      <div className="md:hidden absolute inset-0 pointer-events-none select-none" aria-hidden="true" style={{ opacity: 0.12 }}>
        <Image src="/headshot.jpg" alt="" fill priority sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "top center", filter: "sepia(20%) contrast(1.05)" }} />
      </div>
      <div className="md:hidden absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, rgba(10,10,8,0.7) 0%, rgba(10,10,8,0.5) 50%, rgba(10,10,8,0.85) 100%)" }} />

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <div className="relative flex flex-col min-h-screen" style={{ zIndex: 2 }}>

        {/* ── NAME ───────────────────────────────────────────────────── */}
        <div
          className="px-8 md:px-16 lg:px-24"
          style={{ paddingTop: "clamp(2rem, 8vh, 4rem)", paddingBottom: "1.25rem" }}
        >
          <div className="max-w-[52%] md:max-w-[48%] lg:max-w-[46%]">
            <h1
              className="font-display font-bold uppercase text-ink leading-none mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 5rem)", letterSpacing: "0.06em", whiteSpace: "nowrap" }}
            >
              {mounted
                ? NAME.split("").map((char, i) => (
                    <motion.span key={i} custom={i} variants={letterVariants} initial="hidden" animate="visible" style={{ display: "inline-block" }}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))
                : <span>{NAME}</span>
              }
            </h1>

            {/* Descriptor line */}
            {mounted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="font-mono text-muted"
                style={{ fontSize: "clamp(0.52rem, 0.7vw, 0.68rem)", letterSpacing: "0.16em" }}
              >
                LEADER&nbsp;&nbsp;·&nbsp;&nbsp;STORYTELLER&nbsp;&nbsp;·&nbsp;&nbsp;CONTENT CREATOR&nbsp;&nbsp;·&nbsp;&nbsp;INFLUENCER&nbsp;&nbsp;·&nbsp;&nbsp;AI SERVICE BUILDER
              </motion.p>
            )}
          </div>
        </div>

        {/* ── CONDENSED DUAL CAREER — stacked, below name ─────────────── */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate={mounted ? "visible" : "hidden"}
          className="px-8 md:px-16 lg:px-24"
          style={{ paddingBottom: "1.25rem" }}
        >
          <div style={{ maxWidth: "52%", borderTop: "1px solid #1e1d1b", paddingTop: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>

            {/* Journalism */}
            <div>
              <p className="font-serif text-warm mb-1 leading-snug" style={{ fontSize: "clamp(0.78rem, 0.95vw, 0.92rem)", fontStyle: "italic" }}>
                Nearly two decades of telling stories.
              </p>
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "clamp(0.68rem, 0.82vw, 0.8rem)" }}>
                Sarasota, Fort Myers, Memphis, Salt Lake City — every market sharpened the instinct for the story underneath the story. 4pm anchor at KUTV CBS Utah, special project reporter, and YouTube Originals creator. Investigations that changed state policy and moved legislation. FAA Part 107 certified drone pilot.
              </p>
            </div>

            {/* Thin rule between the two */}
            <div style={{ borderTop: "1px solid #1e1d1b" }} />

            {/* Builder */}
            <div>
              <p className="font-serif text-warm mb-1 leading-snug" style={{ fontSize: "clamp(0.78rem, 0.95vw, 0.92rem)", fontStyle: "italic" }}>
                I just started building.
              </p>
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "clamp(0.68rem, 0.82vw, 0.8rem)" }}>
                I started messing around with AI to save time in my workflow. Now I've got agents for work, games for my kids, and a few things for clients.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Spacer — keeps strip below the face */}
        <div style={{ flex: 1, minHeight: "8vh" }} />

        {/* ── SCROLLING STRIP ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <div style={{ paddingTop: "0.6rem", marginBottom: "0.75rem", paddingLeft: "2rem" }}>
            <span className="font-mono text-muted" style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}>
              APPS &amp; SERVICES DEVELOPED
            </span>
          </div>

          <div className="marquee-wrap" style={{ overflow: "hidden", position: "relative" }}>
            {/* Edge fades */}
            <div aria-hidden="true" style={{ position: "absolute", inset: "0 auto 0 0", width: 80, background: "linear-gradient(to right, #0a0a08, transparent)", zIndex: 10, pointerEvents: "none" }} />
            <div aria-hidden="true" style={{ position: "absolute", inset: "0 0 0 auto", width: 80, background: "linear-gradient(to left, #0a0a08, transparent)", zIndex: 10, pointerEvents: "none" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: "2rem" }}>
              {/* Row 1 — professional, scrolls left */}
              <div style={{ overflow: "hidden" }}>
                <div className="marquee-left">
                  {[...row1, ...row1].map((app, i) => <MarqueeCard key={`r1-${app.id}-${i}`} app={app} />)}
                </div>
              </div>
              {/* Row 2 label */}
              <div style={{ paddingLeft: "2rem", paddingTop: "0.4rem", paddingBottom: "0.6rem" }}>
                <span className="font-mono text-muted" style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}>
                  CERTIFICATIONS
                </span>
              </div>

              {/* Row 2 — certifications, scrolls right */}
              <div style={{ overflow: "hidden" }}>
                <div className="marquee-right">
                  {[...row2, ...row2].map((cert, i) => <CertMarqueeCard key={`r2-${cert.imageUrl}-${i}`} cert={cert} />)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </header>
  );
}
