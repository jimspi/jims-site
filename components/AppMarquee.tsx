"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { apps } from "@/lib/apps";

const screened = apps.filter((a) => a.screenshotUrl !== null);
const row1 = screened.filter((_, i) => i % 2 === 0);
const row2 = screened.filter((_, i) => i % 2 !== 0);

// Pad short rows so the marquee loop always looks full
function padToMin<T>(arr: T[], min: number): T[] {
  if (arr.length === 0) return arr;
  const result = [...arr];
  while (result.length < min) result.push(...arr);
  return result;
}

const CARD_W = 320;
const CARD_H = 200;

function MarqueeCard({ app }: { app: (typeof apps)[0] }) {
  return (
    <div
      className="shrink-0 relative overflow-hidden"
      style={{
        width: CARD_W,
        marginRight: 16,
        border: "1px solid #1e1d1b",
        background: "#111110",
      }}
    >
      {/* Browser chrome bar */}
      <div
        className="flex items-center gap-3 px-3"
        style={{
          height: 28,
          background: "#0a0a08",
          borderBottom: "1px solid #1e1d1b",
        }}
      >
        {/* Square traffic lights — no circles per design rules */}
        <div style={{ display: "flex", gap: 4 }}>
          <div style={{ width: 7, height: 7, background: "#1e1d1b" }} />
          <div style={{ width: 7, height: 7, background: "#1e1d1b" }} />
          <div style={{ width: 7, height: 7, background: "#c9a84c", opacity: 0.6 }} />
        </div>
        {/* Fake URL bar */}
        <div
          className="flex-1 flex items-center px-2"
          style={{ height: 14, background: "#1e1d1b" }}
        >
          <span
            className="font-mono text-muted"
            style={{ fontSize: "0.45rem", letterSpacing: "0.08em", lineHeight: 1 }}
          >
            {app.tag.replace(/[\[\]]/g, "").toLowerCase()}
          </span>
        </div>
      </div>

      {/* Screenshot */}
      <div style={{ position: "relative", width: CARD_W, height: CARD_H }}>
        {app.screenshotUrl && (
          <Image
            src={app.screenshotUrl}
            alt={`${app.name} screenshot`}
            fill
            sizes={`${CARD_W}px`}
            style={{ objectFit: "cover", objectPosition: "top left" }}
          />
        )}
        {/* Bottom gradient overlay with app name */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,10,8,0.92) 0%, rgba(10,10,8,0.3) 45%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 12,
            right: 12,
          }}
        >
          <p
            className="font-serif text-warm"
            style={{ fontSize: "0.75rem", fontStyle: "italic", lineHeight: 1.2 }}
          >
            {app.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AppMarquee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const r1 = padToMin(row1, 6);
  const r2 = padToMin(row2, 6);

  return (
    <section
      ref={ref}
      className="bg-bg border-t border-line overflow-hidden"
      style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      aria-label="App showcase"
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-muted px-8 md:px-16 lg:px-24 mb-8"
        style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}
      >
        // SHIPPED PRODUCTS
      </motion.p>

      {/* Fade edges */}
      <div style={{ position: "relative" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "0 auto 0 0",
            width: 120,
            background: "linear-gradient(to right, #0a0a08, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "0 0 0 auto",
            width: 120,
            background: "linear-gradient(to left, #0a0a08, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        <div className="marquee-wrap flex flex-col gap-4">
          {/* Row 1 — scrolls left */}
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-left">
              {[...r1, ...r1].map((app, i) => (
                <MarqueeCard key={`r1-${app.id}-${i}`} app={app} />
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-right">
              {[...r2, ...r2].map((app, i) => (
                <MarqueeCard key={`r2-${app.id}-${i}`} app={app} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
