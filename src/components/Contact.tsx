import { motion } from 'motion/react';

export default function Contact() {
  return (
    <>
      <div className="diagonal-divider bg-[var(--red)]"></div>
      <section id="contact" className="bg-[var(--red)] px-8 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_2px,transparent_2px)] bg-[length:16px_16px]"></div>

        <div className="absolute top-[10%] left-[5%] text-5xl pointer-events-none animate-[wiggle_2s_infinite]">⭐</div>
        <div className="absolute top-[15%] right-[8%] text-4xl pointer-events-none animate-[wiggle_2.5s_infinite_0.5s]">💥</div>
        <div className="absolute bottom-[15%] left-[10%] text-4xl pointer-events-none animate-[wiggle_2s_infinite_1s]">⚡</div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center pt-12 pb-4 relative z-10"
        >
          <div className="boom-label" data-text="LET'S TALK" style={{ WebkitTextStroke: 'unset', color: 'var(--white)' }}>LET'S TALK</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 max-w-2xl mx-auto my-8 text-center"
        >
          <div className="contact-bubble">
            <div className="font-heading text-3xl md:text-5xl tracking-widest text-[var(--black)] mb-2">LET'S WORK TOGETHER! 🤝</div>
            <p className="text-lg text-gray-800 mb-6">Got a project in mind? Drop me a line and let's make something unforgettable.</p>
            <a href="mailto:hello@powdesign.co" className="font-heading text-2xl tracking-widest text-[var(--red)] no-underline block mb-6 transition-colors duration-150 hover:text-[var(--blue)]">hello@powdesign.co</a>
            <div className="flex gap-4 justify-center flex-wrap mt-4">
              <a href="#" className="inline-flex items-center gap-1.5 font-heading text-base tracking-wider px-4 py-2 border-[var(--outline)] bg-[var(--black)] text-[var(--white)] no-underline transition-all duration-150 cursor-none hover:bg-[var(--yellow)] hover:text-[var(--black)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,0.4)]">🐦 TWITTER</a>
              <a href="#" className="inline-flex items-center gap-1.5 font-heading text-base tracking-wider px-4 py-2 border-[var(--outline)] bg-[var(--black)] text-[var(--white)] no-underline transition-all duration-150 cursor-none hover:bg-[var(--yellow)] hover:text-[var(--black)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,0.4)]">📸 INSTAGRAM</a>
              <a href="#" className="inline-flex items-center gap-1.5 font-heading text-base tracking-wider px-4 py-2 border-[var(--outline)] bg-[var(--black)] text-[var(--white)] no-underline transition-all duration-150 cursor-none hover:bg-[var(--yellow)] hover:text-[var(--black)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,0.4)]">💼 BEHANCE</a>
              <a href="#" className="inline-flex items-center gap-1.5 font-heading text-base tracking-wider px-4 py-2 border-[var(--outline)] bg-[var(--black)] text-[var(--white)] no-underline transition-all duration-150 cursor-none hover:bg-[var(--yellow)] hover:text-[var(--black)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,0.4)]">🎨 DRIBBBLE</a>
            </div>
            <div className="mt-6">
              <a href="#" className="font-heading text-2xl tracking-widest bg-[var(--red)] text-[var(--white)] border-[var(--outline-thick)] px-9 py-3.5 cursor-none transition-all duration-150 shadow-[6px_6px_0_var(--black)] mt-4 inline-block hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--black)] hover:bg-[var(--blue)]">SEND A MESSAGE →</a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
