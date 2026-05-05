"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, type Transition } from "framer-motion";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jimspiewak/",
    display: "linkedin.com/in/jimspiewak",
  },
  {
    label: "Substack",
    href: "https://jimspiewak.substack.com",
    display: "jimspiewak.substack.com",
  },
  {
    label: "KUTV Profile",
    href: "https://kutv.com/contact/people/jim-spiewak",
    display: "kutv.com/jim-spiewak",
  },
  {
    label: "Email",
    href: "mailto:jpsthesecond@gmail.com",
    display: "jpsthesecond@gmail.com",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduce ? 0 : 16 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduce ? 0 : 16 },
    transition: { delay, duration: 0.55, ease: "easeOut" as const } as Transition,
  });

  return (
    <section
      ref={ref}
      className="bg-bg border-t border-line py-14 px-8 md:px-16 lg:px-24"
      aria-label="Contact and links"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="section-label mb-8"
      >
        // FIND ME
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — title block */}
        <motion.div {...fadeUp(0.1)}>
          <div className="border-t border-rule pt-8">
            <p
              className="font-display font-bold uppercase text-ink leading-tight mb-2"
              style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.9rem)", letterSpacing: "0.06em" }}
            >
              KUTV CBS
              <br />
              Salt Lake City
            </p>
            <p
              className="font-serif text-gold leading-snug mb-1"
              style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)", fontStyle: "italic" }}
            >
              Anchor / Chief Investigative Reporter
            </p>
            <p
              className="font-mono text-muted"
              style={{ fontSize: "0.6rem", letterSpacing: "0.14em" }}
            >
              YouTube Originals Creator
            </p>
          </div>
        </motion.div>

        {/* Right — links */}
        <motion.div {...fadeUp(0.18)}>
          <nav aria-label="External links" className="border-t border-rule pt-8">
            <ul className="space-y-0">
              {links.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.28 + i * 0.08, duration: 0.45, ease: "easeOut" as const }}
                  className="flex items-center justify-between border-b border-rule py-4"
                >
                  <span
                    className="font-mono text-muted"
                    style={{ fontSize: "0.6rem", letterSpacing: "0.16em" }}
                  >
                    {link.label}
                  </span>
                  {link.href !== "#" ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-gold font-mono text-warm"
                      style={{ fontSize: "0.78rem", letterSpacing: "0.04em" }}
                    >
                      {link.display}
                    </a>
                  ) : (
                    <span
                      className="font-mono text-muted"
                      style={{ fontSize: "0.78rem", letterSpacing: "0.04em" }}
                    >
                      {link.display}
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
