import { motion } from 'motion/react';

import elementalsTee from '@assets/Carpe_organiser_1776494843417.jpg';
import headsTee from '@assets/KS_Heads_1776494843420.jpg';

const projects = [
  {
    id: 1,
    img: elementalsTee,
    imgAlt: 'Carpediem Elementals Organizer T-Shirt',
    badge: 'Featured Merch',
    badgeBg: '#D63031',
    title: 'Elementals\nOrganizer Tee',
    desc: 'A bold merch design for Carpediem — SASTRA\'s annual cultural fest. The "Elementals" theme across fire, water, earth & air was brought to life in this screen-print ready design.',
    tools: ['Adobe Illustrator', 'Photoshop', 'Procreate'],
    btnBg: 'var(--ink)',
    btnText: 'var(--yellow)',
    imgBg: '#6B1B1B',
  },
  {
    id: 2,
    img: headsTee,
    imgAlt: 'Kuruksastra Head of Informals T-Shirt',
    badge: 'Featured Merch',
    badgeBg: '#1D2A6B',
    title: 'Kuruksastra\nHead Tee',
    desc: 'Identity merch for SASTRA\'s flagship tech fest Kuruksastra 2023. Each tee was personalised with the wearer\'s agent code and role — a fusion of grunge typography and cinematic design.',
    tools: ['Illustrator', 'Photoshop'],
    btnBg: 'var(--blue)',
    btnText: '#FFFFFF',
    imgBg: '#1A2050',
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
          <span className="comic-tag red mb-4 inline-block">Deep Dive</span>
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
                className="flex items-center justify-center p-8 min-h-[300px] relative group overflow-hidden"
                style={{ background: p.imgBg }}
              >
                <div className="absolute inset-0 halftone-light pointer-events-none opacity-50" />
                <img
                  src={p.img}
                  alt={p.imgAlt}
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 max-h-[320px] w-auto object-contain transition-transform duration-400 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    background: p.badgeBg,
                    color: '#FFFFFF',
                  }}
                  className="text-xs tracking-widest uppercase px-3 py-1.5 border-[2.5px] border-[var(--ink)] mb-5 w-fit -rotate-[1deg] inline-block shadow-[3px_3px_0_var(--ink)]"
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
                  className="text-sm leading-relaxed text-gray-600 mb-5"
                >
                  {p.desc}
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                      className="text-xs tracking-wide px-3 py-1.5 border-[2.5px] border-[var(--ink)] bg-[var(--sky)]"
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
                  className="text-xs tracking-widest uppercase px-7 py-3 border-[3px] border-[var(--ink)] w-fit transition-all duration-150 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0_var(--ink)]"
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
