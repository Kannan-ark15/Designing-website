import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-[68px] grid grid-cols-1 md:grid-cols-2 bg-[var(--cream)] relative overflow-hidden border-b-[4px] border-[var(--ink)]"
    >
      <div className="hero-bg absolute inset-0 halftone opacity-60 pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-center p-10 md:p-16 lg:p-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <span className="comic-tag">Design Studio · 2025</span>
        </motion.div>

        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.1 }}
          className="speech-bubble mb-10"
        >
          <p
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
            className="text-3xl md:text-4xl leading-snug tracking-tight text-[var(--ink)]"
          >
            Hey! I'm a Designer who makes{' '}
            <em className="not-italic text-[var(--red)]">Visuals</em>{' '}
            absolutely{' '}
            <em className="not-italic text-[var(--red)]">POP 💥</em>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex gap-2 mb-8 flex-wrap"
        >
          <span className="comic-tag">Posters</span>
          <span className="comic-tag red">T-Shirts</span>
          <span className="comic-tag blue">Branding</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex gap-4 flex-wrap"
        >
          <a href="#featured" className="comic-btn primary">
            View Work ↓
          </a>
          <a href="#contact" className="comic-btn secondary">
            Hire Me
          </a>
        </motion.div>
      </div>

      <div className="relative z-10 hidden md:flex items-center justify-center p-12">
        <div className="hero-poster relative">
          <div
            className="w-[270px] h-[360px] bg-[var(--red)] border-[4px] border-[var(--ink)] shadow-[10px_10px_0_var(--ink)] flex flex-col overflow-hidden relative"
          >
            <div className="flex-1 bg-[var(--yellow)] m-3 border-[3px] border-[var(--ink)] flex flex-col items-center justify-center relative overflow-hidden halftone-yellow">
              <div className="text-[4.5rem] z-10 select-none">🎨</div>
              <p
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
                className="text-xl tracking-tight text-[var(--ink)] z-10 mt-2 text-center leading-tight"
              >
                Ultra Bold<br />Design
              </p>
            </div>
            <div
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              className="px-3 py-2 text-sm text-[var(--white)] text-center tracking-widest uppercase"
            >
              ★ Original Print ★
            </div>
          </div>
          <span
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
            className="absolute -top-3 -right-3 text-xs tracking-wider bg-[var(--sky)] border-[3px] border-[var(--ink)] px-2.5 py-1 shadow-[3px_3px_0_var(--ink)] text-[var(--ink)] rotate-[10deg] uppercase"
          >
            New!
          </span>
          <span
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
            className="absolute bottom-5 -left-4 text-xs tracking-wider bg-[var(--yellow)] border-[3px] border-[var(--ink)] px-2.5 py-1 shadow-[3px_3px_0_var(--ink)] text-[var(--ink)] -rotate-[6deg] uppercase"
          >
            Limited
          </span>
        </div>
      </div>
    </section>
  );
}
