import { motion } from 'motion/react';
import relics from '@assets/relics_1776494843422.jpg';

const socials = [
  { label: 'Twitter',   icon: '𝕏' },
  { label: 'Instagram', icon: '◻' },
  { label: 'Behance',   icon: 'Be' },
  { label: 'Dribbble',  icon: '⚪' },
];

export default function Contact() {
  return (
    <>
      <div className="diagonal-divider" style={{ background: 'var(--ink)' }} />
      <section id="contact" className="bg-[var(--ink)] px-6 md:px-12 py-20 relative overflow-hidden">
        <div className="absolute inset-0 halftone-light pointer-events-none opacity-30" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 border-[4px] border-[var(--yellow)]">
          <div className="relative overflow-hidden min-h-[400px] lg:min-h-0 group border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-[var(--yellow)]">
            <img
              src={relics}
              alt="Race for the Relics event poster"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--ink)]/80 lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 to-transparent lg:hidden" />
            <div className="absolute bottom-6 left-6 lg:hidden">
              <span className="comic-tag sky text-xs">Recent Project</span>
              <p
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
                className="text-white text-xl mt-1"
              >
                Race for the Relics
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center bg-[var(--ink)]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="comic-tag sky mb-5 inline-block">Get In Touch</span>
              <h2
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
                className="text-white text-4xl md:text-5xl tracking-tight leading-none mb-4"
              >
                Let's Build Something{' '}
                <em className="not-italic text-[var(--yellow)]">Legendary</em>
              </h2>
              <p
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                className="text-white/60 text-sm mb-8 leading-relaxed"
              >
                Got a project, a brief, or just an idea? Drop a line and let's make something unforgettable together.
              </p>

              <a
                href="mailto:hello@powdesign.co"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
                className="text-[var(--yellow)] text-lg no-underline block mb-8 hover:text-white transition-colors"
              >
                hello@powdesign.co
              </a>

              <div className="flex gap-3 flex-wrap mb-8">
                {socials.map(({ label, icon }) => (
                  <a
                    key={label}
                    href="#"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    className="inline-flex items-center gap-2 text-xs tracking-wide uppercase px-4 py-2.5 border-[2.5px] border-white/30 text-white no-underline transition-all duration-150 hover:bg-[var(--yellow)] hover:text-[var(--ink)] hover:border-[var(--yellow)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  >
                    <span>{icon}</span> {label}
                  </a>
                ))}
              </div>

              <a
                href="mailto:hello@powdesign.co"
                className="comic-btn secondary w-full text-center block"
                style={{ background: 'var(--yellow)', color: 'var(--ink)', borderColor: 'var(--yellow)' }}
              >
                Send a Message →
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
