"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (shouldReduce) { setCount(target); return; }
    const start = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
      else setCount(target);
    };
    requestAnimationFrame(frame);
  }, [active, target, duration, shouldReduce]);

  return count;
}

const stats = [
  { value: 100, suffix: "K+", label: "Followers", detail: "Across Facebook & Instagram" },
  { value: 100, suffix: "M+", label: "Annual Views", detail: "Video content, year over year" },
];

const platforms = [
  {
    name: "Facebook",
    handle: "Jim Spiewak",
    followers: "96K followers",
    href: "https://www.facebook.com/JimSpiewakKUTV2/",
    color: "#4f7396",
    screenshot: "/social/facebook-profile.jpg",
    aspectRatio: "16/9",
  },
  {
    name: "Instagram",
    handle: "@jimkutv",
    followers: "4,414 followers",
    href: "https://www.instagram.com/jimkutv",
    color: "#c9a84c",
    screenshot: "/social/instagram-profile-v2.jpg",
    aspectRatio: "16/9",
  },
];

export default function SocialReach() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const shouldReduce = useReducedMotion();

  const count0 = useCountUp(stats[0].value, inView, 1600);
  const count1 = useCountUp(stats[1].value, inView, 2000);
  const counts = [count0, count1];

  return (
    <section
      ref={ref}
      className="bg-bg border-t border-line py-14 px-8 md:px-16 lg:px-24"
      aria-label="Audience and social reach"
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="section-label mb-8"
      >
        // THE AUDIENCE
      </motion.p>

      {/* Stat pair */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 24 }}
            transition={{ delay: 0.08 + i * 0.12, duration: 0.6, ease: "easeOut" as const }}
            className="border-t border-rule pt-8 pb-10"
            style={{
              borderRight: i === 0 ? "1px solid #2a2824" : "none",
              paddingRight: i === 0 ? "3rem" : 0,
              paddingLeft: i === 1 ? "3rem" : 0,
            }}
          >
            <div className="flex items-end gap-1 leading-none mb-3">
              <span
                className="font-display font-bold text-ink"
                style={{ fontSize: "clamp(4rem, 9vw, 7.5rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
              >
                {counts[i]}
              </span>
              <span
                className="font-display font-bold text-gold"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.01em", lineHeight: 1, paddingBottom: "0.15em" }}
              >
                {stat.suffix}
              </span>
            </div>
            <p className="font-serif text-warm mb-1" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", fontStyle: "italic" }}>
              {stat.label}
            </p>
            <p className="font-mono text-muted" style={{ fontSize: "0.62rem", letterSpacing: "0.14em" }}>
              {stat.detail}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Narrative */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 16 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" as const }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 border-t border-rule pt-6 mb-8"
      >
        <div>
          <p className="font-serif text-warm leading-relaxed" style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)", fontStyle: "italic" }}>
            The audience was never handed to me. It was built one story at a time — because the reporting was worth watching, and people kept sharing it.
          </p>
        </div>
        <div>
          <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.9rem" }}>
            Nearly two decades of investigative and breaking news content has compounded into a following that reaches across Utah and beyond. The content that drives the most views isn't viral gimmicks — it's accountability journalism that hits people where they live: their safety, their government, their kids. When a story matters, the audience finds it.
          </p>
        </div>
      </motion.div>

      {/* Platform cards with screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {platforms.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 20 }}
            transition={{ delay: 0.42 + i * 0.12, duration: 0.6, ease: "easeOut" as const }}
            className="group block"
            style={{ textDecoration: "none", border: "1px solid #2a2824", background: "#0d0d0b" }}
          >
            {/* Chrome bar */}
            <div style={{
              height: 28,
              background: "#0a0a08",
              borderBottom: "1px solid #1e1d1b",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
              gap: 8,
            }}>
              <div style={{ display: "flex", gap: 3 }}>
                <div style={{ width: 5, height: 5, background: "#1e1d1b" }} />
                <div style={{ width: 5, height: 5, background: "#1e1d1b" }} />
                <div style={{ width: 5, height: 5, background: p.color, opacity: 0.7 }} />
              </div>
              <span className="font-mono" style={{ fontSize: "0.42rem", letterSpacing: "0.1em", color: "#4a4744" }}>
                {p.name.toLowerCase()} — {p.followers}
              </span>
            </div>

            {/* Screenshot */}
            <div style={{ position: "relative", width: "100%", aspectRatio: p.aspectRatio, overflow: "hidden" }}>
              <Image
                src={p.screenshot}
                alt={`${p.name} profile — ${p.handle}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                  filter: "brightness(0.92)",
                  transition: "filter 0.3s ease",
                }}
                className="group-hover:brightness-100"
              />
              {/* Subtle vignette */}
              <div style={{
                position: "absolute", inset: 0,
                boxShadow: "inset 0 0 40px rgba(8,8,7,0.4)",
                pointerEvents: "none",
              }} />
            </div>

            {/* Footer */}
            <div style={{
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #1e1d1b",
            }}>
              <div>
                <p className="font-mono mb-0.5" style={{ fontSize: "0.55rem", letterSpacing: "0.16em", color: p.color }}>
                  {p.name.toUpperCase()}
                </p>
                <p className="font-display font-bold uppercase text-warm" style={{ fontSize: "0.9rem", letterSpacing: "0.08em" }}>
                  {p.handle}
                </p>
              </div>
              <span
                className="font-mono text-muted group-hover:text-gold transition-colors duration-200"
                style={{ fontSize: "0.62rem", letterSpacing: "0.12em" }}
              >
                Follow &rarr;
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
