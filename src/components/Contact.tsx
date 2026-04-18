import { motion } from 'motion/react';

const socials = [
  { label: 'Twitter', icon: '🐦' },
  { label: 'Instagram', icon: '📸' },
  { label: 'Behance', icon: '💼' },
  { label: 'Dribbble', icon: '🎨' },
];

export default function Contact() {
  return (
    <>
      <div className="diagonal-divider" style={{ background: 'var(--red)' }} />
      <section
        id="contact"
        className="bg-[var(--red)] px-6 md:px-12 py-24 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 halftone-light pointer-events-none" />

        <div className="absolute top-[8%] left-[6%] text-4xl pointer-events-none animate-[wiggle_2.2s_ease-in-out_infinite]">⭐</div>
        <div className="absolute top-[12%] right-[7%] text-3xl pointer-events-none animate-[wiggle_2.5s_ease-in-out_infinite_0.4s]">💥</div>
        <div className="absolute bottom-[12%] left-[9%] text-3xl pointer-events-none animate-[wiggle_2s_ease-in-out_infinite_0.8s]">⚡</div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mb-10"
        >
          <span className="comic-tag sky inline-block mb-5">Get In Touch</span>
          <h2
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
            className="text-white text-5xl md:text-7xl tracking-tight leading-none"
          >
            Let's Talk
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <div className="contact-bubble text-left">
            <h3
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
              className="text-2xl md:text-3xl tracking-tight text-[var(--ink)] mb-2"
            >
              Let's Work Together 🤝
            </h3>
            <p
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
              className="text-sm text-gray-700 mb-5"
            >
              Got a project in mind? Drop me a line and let's make something unforgettable.
            </p>
            <a
              href="mailto:hello@powdesign.co"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              className="text-lg text-[var(--red)] no-underline block mb-6 hover:text-[var(--blue)] transition-colors"
            >
              hello@powdesign.co
            </a>

            <div className="flex gap-3 flex-wrap mb-6">
              {socials.map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                  className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase px-4 py-2 border-[2.5px] border-[var(--ink)] bg-[var(--ink)] text-[var(--white)] no-underline transition-all duration-150 hover:bg-[var(--yellow)] hover:text-[var(--ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                >
                  {icon} {label}
                </a>
              ))}
            </div>

            <a
              href="#"
              className="comic-btn primary w-full text-center block"
            >
              Send a Message →
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
