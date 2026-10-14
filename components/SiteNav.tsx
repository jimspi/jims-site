const sections = [
  { label: "The Work", href: "#work" },
  { label: "Social", href: "#social" },
  { label: "Awards", href: "#awards" },
  { label: "Certifications", href: "#certifications" },
  { label: "Career", href: "#career" },
  { label: "Apps", href: "#apps" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNav() {
  return (
    <div
      className="sticky top-0 z-50 border-b border-line"
      style={{ background: "rgba(10,10,8,0.92)", backdropFilter: "blur(8px)" }}
    >
      <div className="flex items-center justify-between gap-6 px-8 md:px-16 lg:px-24 h-11">
        <nav aria-label="Jump to section" className="flex gap-6 overflow-x-auto whitespace-nowrap">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="link-gold font-mono text-muted hover:text-gold"
              style={{ fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:jpsthesecond@gmail.com"
          className="link-gold font-mono text-gold shrink-0 hidden md:inline"
          style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
        >
          jpsthesecond@gmail.com
        </a>
      </div>
    </div>
  );
}
