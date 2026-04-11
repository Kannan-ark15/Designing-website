import { motion } from 'motion/react';

export default function ProjectSpotlight() {
  return (
    <>
      <div className="diagonal-divider bg-[var(--yellow)]"></div>
      <section id="projects" className="bg-[var(--yellow)] px-8 py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.08)_2.5px,transparent_2.5px)] bg-[length:18px_18px]"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center pt-12 pb-4 relative z-10"
        >
          <div className="boom-label red" data-text="PROJECT SPOTLIGHT">PROJECT SPOTLIGHT</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto my-8 border-[var(--outline-thick)] bg-[var(--white)] shadow-[12px_12px_0_var(--black)] grid grid-cols-1 md:grid-cols-2 overflow-hidden relative z-10"
        >
          <div className="bg-[var(--red)] flex items-center justify-center p-12 border-b md:border-b-0 md:border-r-[var(--outline-thick)] min-h-[340px] relative group">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[length:12px_12px]"></div>
            <div className="text-[8rem] z-10 drop-shadow-[6px_6px_0_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">👕</div>
          </div>
          <div className="p-10 flex flex-col justify-center">
            <span className="inline-block bg-[var(--red)] text-[var(--white)] font-heading text-sm tracking-widest px-3 py-1 border-[3px] border-[var(--black)] mb-4 -rotate-2 w-fit">FEATURED PROJECT</span>
            <h2 className="font-heading text-4xl tracking-widest leading-none mb-4">WAVE CULTURE<br/>TEE COLLECTION</h2>
            <p className="text-base leading-relaxed mb-6 text-gray-800">A bold streetwear graphic collection inspired by surf culture and 80s pop aesthetics. Every line drawn with purpose — loud, proud, and screen-print ready.</p>
            <div className="flex gap-2 flex-wrap mb-6">
              <span className="font-heading text-sm tracking-wider px-3 py-1 border-[3px] border-[var(--black)] bg-[var(--sky)]">PHOTOSHOP</span>
              <span className="font-heading text-sm tracking-wider px-3 py-1 border-[3px] border-[var(--black)] bg-[var(--sky)]">ILLUSTRATOR</span>
              <span className="font-heading text-sm tracking-wider px-3 py-1 border-[3px] border-[var(--black)] bg-[var(--sky)]">PROCREATE</span>
            </div>
            <button className="font-heading text-xl tracking-widest bg-[var(--black)] text-[var(--yellow)] border-none px-7 py-3 cursor-none transition-all duration-150 w-fit hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--red)]">VIEW FULL PROJECT →</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto mt-12 mb-8 border-[var(--outline-thick)] bg-[var(--white)] shadow-[12px_12px_0_var(--black)] grid grid-cols-1 md:grid-cols-2 overflow-hidden relative z-10"
        >
          <div className="bg-[var(--blue)] flex items-center justify-center p-12 border-b md:border-b-0 md:border-r-[var(--outline-thick)] min-h-[340px] relative group">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[length:12px_12px]"></div>
            <div className="text-[8rem] z-10 drop-shadow-[6px_6px_0_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">🗓️</div>
          </div>
          <div className="p-10 flex flex-col justify-center">
            <span className="inline-block bg-[var(--blue)] text-[var(--white)] font-heading text-sm tracking-widest px-3 py-1 border-[3px] border-[var(--black)] mb-4 -rotate-2 w-fit">NEW RELEASE</span>
            <h2 className="font-heading text-4xl tracking-widest leading-none mb-4">CITY PULSE<br/>POSTER SERIES</h2>
            <p className="text-base leading-relaxed mb-6 text-gray-800">Limited edition 18×24" screen-printed posters celebrating the energy of urban life. Bold type meets geometric illustration for a collector's piece.</p>
            <div className="flex gap-2 flex-wrap mb-6">
              <span className="font-heading text-sm tracking-wider px-3 py-1 border-[3px] border-[var(--black)] bg-[var(--sky)]">INDESIGN</span>
              <span className="font-heading text-sm tracking-wider px-3 py-1 border-[3px] border-[var(--black)] bg-[var(--sky)]">ILLUSTRATOR</span>
            </div>
            <button className="font-heading text-xl tracking-widest bg-[var(--blue)] text-[var(--white)] border-none px-7 py-3 cursor-none transition-all duration-150 w-fit hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--black)]">VIEW FULL PROJECT →</button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
