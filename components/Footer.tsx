export default function Footer() {
  return (
    <footer
      className="bg-bg border-t border-line py-10 px-8 md:px-16 lg:px-24"
      role="contentinfo"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p
          className="font-mono text-muted"
          style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
        >
          &copy; {new Date().getFullYear()} Jim Spiewak
        </p>
        <p
          className="font-mono text-muted"
          style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
        >
          Built with Claude Code &mdash; Salt Lake City, Utah
        </p>
      </div>
    </footer>
  );
}
