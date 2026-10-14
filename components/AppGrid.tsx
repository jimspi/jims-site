"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import AppCard from "./AppCard";
import type { App } from "@/lib/apps";

interface AppGridProps {
  apps: App[];
  sectionLabel: string;
  subLabel?: string;
  variant?: "professional" | "personal";
}

export default function AppGrid({
  apps,
  sectionLabel,
  subLabel,
  variant = "professional",
}: AppGridProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const shouldReduce = useReducedMotion();

  const isProfessional = variant === "professional";

  return (
    <section
      ref={ref}
      className={`border-t border-line py-14 px-8 md:px-16 lg:px-24 ${
        isProfessional ? "bg-surface" : "bg-bg"
      }`}
      aria-label={sectionLabel}
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="section-label mb-4"
      >
        {sectionLabel}
      </motion.p>

      {/* Sub-label */}
      {subLabel && (
      <motion.p
        initial={{ opacity: 0, y: shouldReduce ? 0 : 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 12 }}
        transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" as const }}
        className="font-body text-muted mb-6 leading-relaxed"
        style={{ fontSize: "1rem", fontStyle: "italic", maxWidth: "52ch" }}
      >
        {subLabel}
      </motion.p>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12">
        {apps.map((app, i) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            animate={
              inView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: shouldReduce ? 0 : 20 }
            }
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" as const }}
          >
            <AppCard app={app} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
