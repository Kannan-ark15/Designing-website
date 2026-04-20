import { motion } from 'motion/react';
import carpeParticipant from '@assets/Carpe_participant_1776494843418.jpg';
import moneyball from '@assets/moneyball_1776494843420.jpg';

const story = [
  { n: '01', icon: 'O', bg: 'var(--sky)', color: 'var(--ink)',  title: 'The Origin',   text: 'Grew up with markers in hand and walls as canvases. Fell in love with color before I could spell "design."' },
  { n: '02', icon: 'T', bg: 'var(--yellow)', color: 'var(--ink)', title: 'The Training', text: 'Studied Graphic Design and never stopped. Mastered Illustrator, Photoshop, and the art of the perfect typeface pairing.' },
  { n: '03', icon: 'M', bg: 'var(--red)', color: '#FFFFFF',    title: 'The Mission',  text: 'Making brands impossible to ignore. Every project is a visual punch — bold, memorable, built to last.' },
  { n: '04', icon: 'N', bg: 'var(--blue)', color: '#FFFFFF',   title: "What's Next",  text: "Dropping new collections, collabs, and client projects monthly. The studio never sleeps. Let's build something legendary." },
];

const stats = [
  { n: '120+', label: 'Projects Done', bg: 'var(--yellow)', color: 'var(--ink)' },
  { n: '48',   label: 'Happy Clients', bg: 'var(--red)',    color: '#FFFFFF' },
];

export default function About() {
  return (
    <>
      <div className="diagonal-divider-rev" />
      <section id="about" className="bg-[var(--cream)] px-6 md:px-12 py-20 relative border-t-[4px] border-[var(--ink)]">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="comic-tag mb-4 inline-block">Our Story</span>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 border-[4px] border-[var(--ink)] overflow-hidden group"
            >
              <div className="relative h-full min-h-[320px]">
                <img
                  src={carpeParticipant}
                  alt="Carpediem Participant T-shirt"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="comic-tag red text-xs">Merch Drop</span>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
                    className="text-white text-xl mt-1"
                  >
                    Carpediem 2023
                  </p>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                    className="text-white/70 text-xs"
                  >
                    Participant T-Shirt Design
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="lg:col-span-2 border-[4px] border-l-0 border-[var(--ink)]"
            >
              <div className="grid grid-cols-2 h-full">
                {story.map((s, i) => (
                  <div
                    key={s.n}
                    className={`p-6 md:p-8 relative overflow-hidden transition-transform duration-200 hover:scale-[1.02] hover:z-10 ${i % 2 === 0 ? 'border-b-[3px]' : 'border-b-[3px]'} ${i < 2 ? 'border-b-[3px]' : ''} border-r-[3px] last:border-r-0 border-[var(--ink)] ${i === 1 || i === 3 ? 'border-r-0' : ''}`}
                    style={{ background: s.bg, color: s.color }}
                  >
                    <span
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, opacity: 0.12 }}
                      className="absolute top-2 right-3 text-3xl"
                    >
                      {s.n}
                    </span>
                    <span className="text-4xl block mb-3 select-none">{s.icon}</span>
                    <p
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
                      className="text-base tracking-tight mb-1.5"
                    >
                      {s.title}
                    </p>
                    <p
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, opacity: 0.85 }}
                      className="text-xs leading-relaxed"
                    >
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-[4px] border-[var(--ink)]"
          >
            <div className="lg:col-span-2 border-r-[4px] border-[var(--ink)] overflow-hidden group relative min-h-[220px]">
              <img
                src={moneyball}
                alt="Money Ball event poster"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
                  className="text-white text-2xl md:text-3xl text-center tracking-tight px-8"
                >
                  "Crafting visuals that<br />
                  <em className="not-italic text-[var(--yellow)]">can't be ignored.</em>"
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`stat-card flex-1 flex flex-col items-center justify-center ${i < stats.length - 1 ? 'border-b-[3px] border-[var(--ink)]' : ''}`}
                  style={{ background: s.bg, color: s.color }}
                >
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
                    className="text-4xl tracking-tight leading-none"
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
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
