import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    bg: '#D63031',
    emoji: '👕',
    badge: 'Featured Project',
    badgeBg: '#D63031',
    title: 'Wave Culture\nTee Collection',
    desc: 'A bold streetwear graphic collection inspired by surf culture and 80s pop aesthetics. Every line drawn with purpose — loud, proud, and screen-print ready.',
    tools: ['Photoshop', 'Illustrator', 'Procreate'],
    btnBg: 'var(--ink)',
    btnText: 'var(--yellow)',
  },
  {
    id: 2,
    bg: '#2D3436',
    emoji: '🗓️',
    badge: 'New Release',
    badgeBg: '#2D3436',
    title: 'City Pulse\nPoster Series',
    desc: 'Limited edition 18×24" screen-printed posters celebrating the energy of urban life. Bold type meets geometric illustration for a collector\'s piece.',
    tools: ['InDesign', 'Illustrator'],
    btnBg: 'var(--blue)',
    btnText: '#FFFFFF',
  },
];

export default function ProjectSpotlight() {
  return (
    <>
      <div className="diagonal-divider" style={{ background: 'var(--yellow)' }} />
      <section id="projects" className="bg-[var(--yellow)] px-6 md:px-12 py-20 relative">
        <div className="absolute inset-0 halftone pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-12 relative z-10"
        >
          <h2 className="section-title">
            <span>Project Spotlight</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col gap-10 relative z-10">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 border-[4px] border-[var(--ink)] bg-[var(--white)] shadow-[8px_8px_0_var(--ink)] overflow-hidden"
            >
              <div
                className="flex items-center justify-center p-10 min-h-[280px] relative group"
                style={{ backgroundColor: p.bg }}
              >
                <div className="absolute inset-0 halftone-light pointer-events-none" />
                <span className="text-[7rem] z-10 select-none transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  {p.emoji}
                </span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    background: p.badgeBg,
                    color: '#FFFFFF',
                  }}
                  className="text-xs tracking-widest uppercase px-3 py-1 border-[2.5px] border-[var(--ink)] mb-5 w-fit -rotate-[1deg] inline-block"
                >
                  {p.badge}
                </span>
                <h3
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
                  className="text-3xl md:text-4xl leading-tight tracking-tight text-[var(--ink)] mb-4 whitespace-pre-line"
                >
                  {p.title}
                </h3>
                <p
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                  className="text-sm leading-relaxed text-gray-700 mb-5"
                >
                  {p.desc}
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                      className="text-xs tracking-wide px-3 py-1 border-[2.5px] border-[var(--ink)] bg-[var(--sky)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    background: p.btnBg,
                    color: p.btnText,
                  }}
                  className="text-sm tracking-wide uppercase px-7 py-3 border-[3px] border-[var(--ink)] w-fit transition-all duration-150 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0_var(--ink)]"
                >
                  View Full Project →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
