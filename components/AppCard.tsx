"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { App } from "@/lib/apps";

function AppScreenshot({ app }: { app: App }) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ border: "1px solid #2a2824", background: "#080807" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-3"
        style={{
          height: 28,
          background: "#0d0d0b",
          borderBottom: "1px solid #1e1d1b",
        }}
      >
        <div style={{ display: "flex", gap: 4 }}>
          <div style={{ width: 6, height: 6, background: "#1a1916" }} />
          <div style={{ width: 6, height: 6, background: "#1a1916" }} />
          <div style={{ width: 6, height: 6, background: "#7a6330", opacity: 0.6 }} />
        </div>
        <div
          className="flex-1 flex items-center px-2"
          style={{ height: 14, background: "#111110", border: "1px solid #1e1d1b" }}
        >
          <span
            className="font-mono"
            style={{ fontSize: "0.4rem", letterSpacing: "0.08em", color: "#4a4744" }}
          >
            {app.tag.replace(/[\[\]]/g, "").toLowerCase()}
          </span>
        </div>
      </div>

      {/* Screenshot area */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
        {app.screenshotUrl ? (
          <>
            <Image
              src={app.screenshotUrl}
              alt={`${app.name} interface`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              style={{ objectFit: "cover", objectPosition: "top left" }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                boxShadow: "inset 0 0 48px rgba(8,8,7,0.6)",
              }}
            />
          </>
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #111110 0%, #080807 100%)",
              display: "flex",
              alignItems: "flex-end",
              padding: "14px",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <p
              className="font-mono relative z-10"
              style={{ fontSize: "0.48rem", letterSpacing: "0.12em", color: "#4a4744" }}
            >
              SCREENSHOT PENDING
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AppCard({ app }: { app: App }) {
  const shouldReduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const href = app.liveUrl ?? app.githubUrl ?? "#";
  const hasLink = !!(app.liveUrl || app.githubUrl);
  const linkLabel = app.liveUrl ? "View App" : app.githubUrl ? "GitHub" : null;

  return (
    <motion.article
      whileHover={shouldReduce ? {} : { y: -4, transition: { duration: 0.22, ease: "easeOut" as const } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border-t border-rule pt-7 pb-9"
      style={{
        borderLeft: `2px solid ${hovered ? "#c9a84c" : "transparent"}`,
        paddingLeft: "1.5rem",
        transition: "border-color 0.25s ease-out",
      }}
    >
      {/* Screenshot */}
      <div className="mb-6">
        <AppScreenshot app={app} />
      </div>

      {/* Tag */}
      <p
        className="font-mono mb-2"
        style={{ fontSize: "0.58rem", letterSpacing: "0.16em", color: "#7a6330" }}
      >
        {app.tag}
      </p>

      {/* Name */}
      <h3
        className="font-serif text-warm leading-tight mb-3"
        style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", fontStyle: "italic", letterSpacing: "-0.01em" }}
      >
        {app.name}
      </h3>

      {/* Description */}
      <p className="font-body text-muted leading-relaxed mb-5" style={{ fontSize: "0.875rem" }}>
        {app.description}
      </p>

      {/* Link */}
      {hasLink && linkLabel && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-gold font-mono"
          style={{ fontSize: "0.65rem", letterSpacing: "0.14em", color: "#7a6330" }}
        >
          {linkLabel} &rarr;
        </a>
      )}
    </motion.article>
  );
}
