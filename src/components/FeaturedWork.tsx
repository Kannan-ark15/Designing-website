import { motion } from 'motion/react';

const panels = [
  { id: 1, bg: '#D63031', textColor: '#FFFFFF', emoji: '🔥', title: 'Fire Series', sub: 'Poster Print · 18×24"', pop: 'POP!' },
  { id: 2, bg: '#FDCB6E', textColor: '#0A0A0A', emoji: '🌊', title: 'Wave Culture', sub: 'T-Shirt Graphic · 2024', pop: 'WOW!' },
  { id: 3, bg: '#74B9FF', textColor: '#0A0A0A', emoji: '⚡', title: 'Electric Signal', sub: 'Brand Identity Kit', pop: 'ZAP!' },
  { id: 4, bg: '#2D3436', textColor: '#FFFFFF', emoji: '🌙', title: 'Midnight Co.', sub: 'Apparel Collection', pop: 'BOOM!' },
  { id: 5, bg: '#D63031', textColor: '#FFFFFF', emoji: '🦋', title: 'Flutter Campaign', sub: 'Ad Campaign · 2025', pop: 'POW!' },
  { id: 6, bg: '#FDCB6E', textColor: '#0A0A0A', emoji: '🎯', title: 'Bullseye Brand', sub: 'Logo + Print · 2025', pop: 'YOW!' },
];

export default function FeaturedWork() {
  return (
    <>
      <div className="diagonal-divider" />
      <section id="featured" className="bg-[var(--white)] px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-12"
        >
          <h2 className="section-title">
            <span>Featured Designs</span>
          </h2>
          <p
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
            className="text-[var(--muted-foreground)] mt-4 text-base"
          >
            Hover any panel to reveal the drop →
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-[4px] border-[var(--ink)] max-w-6xl mx-auto"
        >
          {panels.map((panel) => (
            <div
              key={panel.id}
              className="comic-panel aspect-[3/4] border-[3px] border-[var(--ink)]"
              style={{ backgroundColor: panel.bg }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden halftone-light">
                <span className="pop-effect">{panel.pop}</span>
                <span className="text-[4.5rem] z-10 select-none drop-shadow-[3px_3px_0_rgba(0,0,0,0.35)]">
                  {panel.emoji}
                </span>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    color: panel.textColor,
                  }}
                  className="text-xl tracking-tight text-center z-10 mt-3 px-4 leading-tight"
                >
                  {panel.title}
                </p>
              </div>
              <div
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                className="absolute bottom-0 left-0 right-0 bg-[var(--ink)] text-[var(--white)] text-xs tracking-widest uppercase px-3 py-2 text-center"
              >
                {panel.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
