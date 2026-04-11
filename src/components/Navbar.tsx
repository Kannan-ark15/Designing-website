export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--yellow)] border-b-[var(--outline-thick)] flex items-center justify-between px-4 md:px-8 h-16">
      <a href="#" className="font-heading text-2xl tracking-widest text-[var(--black)] no-underline relative after:content-['!'] after:text-[var(--red)]">
        POW DESIGN
      </a>
      <ul className="hidden md:flex gap-2 list-none m-0 p-0">
        <li>
          <a href="#featured" className="font-heading text-lg tracking-wider text-[var(--black)] no-underline px-4 py-1.5 border-[var(--outline)] bg-[var(--white)] transition-all duration-150 block hover:bg-[var(--red)] hover:text-[var(--white)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--black)]">
            Work
          </a>
        </li>
        <li>
          <a href="#categories" className="font-heading text-lg tracking-wider text-[var(--black)] no-underline px-4 py-1.5 border-[var(--outline)] bg-[var(--white)] transition-all duration-150 block hover:bg-[var(--red)] hover:text-[var(--white)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--black)]">
            Gallery
          </a>
        </li>
        <li>
          <a href="#about" className="font-heading text-lg tracking-wider text-[var(--black)] no-underline px-4 py-1.5 border-[var(--outline)] bg-[var(--white)] transition-all duration-150 block hover:bg-[var(--red)] hover:text-[var(--white)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--black)]">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="font-heading text-lg tracking-wider text-[var(--black)] no-underline px-4 py-1.5 border-[var(--outline)] bg-[var(--white)] transition-all duration-150 block hover:bg-[var(--red)] hover:text-[var(--white)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--black)]">
            Contact
          </a>
        </li>
      </ul>
      <a href="#contact" className="font-heading text-xl bg-[var(--red)] text-[var(--white)] border-[var(--outline-thick)] px-5 py-2 cursor-none no-underline transition-all duration-150 inline-block -rotate-2 hover:-translate-x-1 hover:-translate-y-1 hover:-rotate-2 hover:shadow-[6px_6px_0_var(--black)]">
        🛒 SHOP NOW
      </a>
    </nav>
  );
}
