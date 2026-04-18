export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--white)] border-b-[4px] border-[var(--ink)] flex items-center justify-between px-6 md:px-12 h-[68px]">
      <a
        href="#"
        className="flex items-center gap-2 no-underline group"
      >
        <span className="inline-block w-8 h-8 bg-[var(--red)] border-2 border-[var(--ink)] rotate-[8deg] group-hover:rotate-[-4deg] transition-transform duration-200" />
        <span
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
          className="text-xl tracking-tight text-[var(--ink)] leading-none"
        >
          POW<span className="text-[var(--red)]">!</span> DESIGN
        </span>
      </a>

      <ul className="hidden md:flex gap-1 list-none m-0 p-0">
        {[
          { label: 'Work', href: '#featured' },
          { label: 'Gallery', href: '#categories' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' },
        ].map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              className="text-sm tracking-wide text-[var(--ink)] no-underline px-5 py-2 block transition-all duration-150 hover:bg-[var(--yellow)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--ink)] border-2 border-transparent hover:border-[var(--ink)]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="comic-btn primary text-sm"
      >
        Hire Me →
      </a>
    </nav>
  );
}
