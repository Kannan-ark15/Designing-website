import { motion } from 'motion/react';

export default function About() {
  return (
    <>
      <div className="diagonal-divider-rev"></div>
      <section id="about" className="bg-[var(--white)] px-8 py-16 relative border-t-[var(--outline-thick)] border-b-[var(--outline-thick)]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center pt-12 pb-4 relative"
        >
          <div className="boom-label" data-text="MY STORY">MY STORY</div>
          <p className="font-sans text-gray-600 mt-2">Life told in panels — like every good story should be</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-[var(--outline-thick)] max-w-6xl mx-auto mt-8"
        >
          <div className="border-[var(--outline-thick)] p-6 md:p-8 relative overflow-hidden transition-transform duration-200 hover:scale-[1.03] hover:z-10 bg-[var(--sky)]">
            <span className="absolute top-2 right-3 font-heading text-3xl text-black/15 tracking-wider">01</span>
            <span className="text-5xl block mb-4">👶</span>
            <div className="font-heading text-2xl tracking-widest mb-2">THE ORIGIN</div>
            <p className="text-[0.95rem] leading-relaxed">Grew up with markers in hand and walls as canvases. Fell in love with color before I could spell "design."</p>
          </div>
          <div className="border-[var(--outline-thick)] p-6 md:p-8 relative overflow-hidden transition-transform duration-200 hover:scale-[1.03] hover:z-10 bg-[var(--yellow)]">
            <span className="absolute top-2 right-3 font-heading text-3xl text-black/15 tracking-wider">02</span>
            <span className="text-5xl block mb-4">🎓</span>
            <div className="font-heading text-2xl tracking-widest mb-2">THE TRAINING</div>
            <p className="text-[0.95rem] leading-relaxed">Studied Graphic Design and never stopped learning. Mastered Illustrator, Photoshop, and the art of the perfect typeface pairing.</p>
          </div>
          <div className="border-[var(--outline-thick)] p-6 md:p-8 relative overflow-hidden transition-transform duration-200 hover:scale-[1.03] hover:z-10 bg-[var(--red)]">
            <span className="absolute top-2 right-3 font-heading text-3xl text-black/15 tracking-wider">03</span>
            <span className="text-5xl block mb-4">💥</span>
            <div className="font-heading text-2xl tracking-widest mb-2">THE MISSION</div>
            <p className="text-[0.95rem] leading-relaxed">Making brands impossible to ignore. Every project is a visual punch — bold, memorable, built to last.</p>
          </div>
          <div className="border-[var(--outline-thick)] p-6 md:p-8 relative overflow-hidden transition-transform duration-200 hover:scale-[1.03] hover:z-10 bg-[var(--blue)] text-[var(--white)]">
            <span className="absolute top-2 right-3 font-heading text-3xl text-white/15 tracking-wider">04</span>
            <span className="text-5xl block mb-4">🚀</span>
            <div className="font-heading text-2xl tracking-widest mb-2">WHAT'S NEXT</div>
            <p className="text-[0.95rem] leading-relaxed text-white/85">Dropping new collections, collabs, and client projects monthly. The studio never sleeps. Let's build something legendary.</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center gap-8 flex-wrap mt-12"
        >
          <div className="text-center border-4 border-[var(--black)] px-8 py-6 bg-[var(--yellow)] shadow-[6px_6px_0_var(--black)]">
            <div className="font-heading text-5xl tracking-widest">120+</div>
            <div className="font-heading text-base tracking-widest">PROJECTS DONE</div>
          </div>
          <div className="text-center border-4 border-[var(--black)] px-8 py-6 bg-[var(--red)] text-[var(--white)] shadow-[6px_6px_0_var(--black)]">
            <div className="font-heading text-5xl tracking-widest">48</div>
            <div className="font-heading text-base tracking-widest">HAPPY CLIENTS</div>
          </div>
          <div className="text-center border-4 border-[var(--black)] px-8 py-6 bg-[var(--sky)] shadow-[6px_6px_0_var(--black)]">
            <div className="font-heading text-5xl tracking-widest">7+</div>
            <div className="font-heading text-base tracking-widest">YEARS EXP.</div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
