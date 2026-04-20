export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--white)] border-t-[4px] border-[var(--ink)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-6 bg-[var(--red)] border-2 border-[var(--yellow)] rotate-[6deg]" />
          <span
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
            className="text-lg tracking-tight"
          >
            Design Studio
          </span>
        </div>

        <p
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
          className="text-xs tracking-wide text-white/60"
        >
          Copyright 2026 Design Studio - Made with creativity and lots of coffee
        </p>

        <div className="flex gap-4">
          {['Work', 'About', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              className="text-xs tracking-wide text-white/60 no-underline hover:text-[var(--yellow)] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
