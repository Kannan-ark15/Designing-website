import { motion } from 'motion/react';

const story = [
  { n: '01', icon: '👶', bg: 'var(--sky)', color: 'var(--ink)', title: 'The Origin', text: 'Grew up with markers in hand and walls as canvases. Fell in love with color before I could spell "design."' },
  { n: '02', icon: '🎓', bg: 'var(--yellow)', color: 'var(--ink)', title: 'The Training', text: 'Studied Graphic Design and never stopped learning. Mastered Illustrator, Photoshop, and the art of the perfect typeface pairing.' },
  { n: '03', icon: '💥', bg: 'var(--red)', color: '#FFFFFF', title: 'The Mission', text: 'Making brands impossible to ignore. Every project is a visual punch — bold, memorable, built to last.' },
  { n: '04', icon: '🚀', bg: 'var(--blue)', color: '#FFFFFF', title: "What's Next", text: "Dropping new collections, collabs, and client projects monthly. The studio never sleeps. Let's build something legendary." },
];

const stats = [
  { n: '120+', label: 'Projects Done', bg: 'var(--yellow)', color: 'var(--ink)' },
  { n: '48', label: 'Happy Clients', bg: 'var(--red)', color: '#FFFFFF' },
  { n: '7+', label: 'Years Exp.', bg: 'var(--sky)', color: 'var(--ink)' },
];

export default function About() {
  return (
    <>
      <div className="diagonal-divider-rev" />
      <section id="about" className="bg-[var(--white)] px-6 md:px-12 py-20 relative border-t-[4px] border-b-[4px] border-[var(--ink)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-12"
        >
          <span className="comic-tag mb-4 inline-block">My Story</span>
          <h2 className="section-title">
            <span>Life in Panels</span>
          </h2>
          <p
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
            className="text-[var(--muted-foreground)] mt-4 text-sm"
          >
            Every good story is told in panels.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-[4px] border-[var(--ink)] max-w-6xl mx-auto"
        >
          {story.map((s) => (
            <div
              key={s.n}
              className="border-[3px] border-[var(--ink)] p-6 md:p-8 relative overflow-hidden transition-transform duration-200 hover:scale-[1.02] hover:z-10"
              style={{ background: s.bg, color: s.color }}
            >
              <span
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, opacity: 0.12 }}
                className="absolute top-2 right-3 text-4xl"
              >
                {s.n}
              </span>
              <span className="text-5xl block mb-4 select-none">{s.icon}</span>
              <p
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
                className="text-xl tracking-tight mb-2"
              >
                {s.title}
              </p>
              <p
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, opacity: 0.85 }}
                className="text-sm leading-relaxed"
              >
                {s.text}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 flex-wrap mt-14 max-w-6xl mx-auto"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="stat-card"
              style={{ background: s.bg, color: s.color }}
            >
              <p
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
                className="text-5xl tracking-tight leading-none"
              >
                {s.n}
              </p>
              <p
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                className="text-xs tracking-widest uppercase mt-1"
              >
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
