import { useState } from 'react';
import { motion } from 'motion/react';

const categories = {
  posters: [
    { icon: '🗼', name: 'CITY SERIES' },
    { icon: '🌅', name: 'SUNRISE DROP' },
    { icon: '🎪', name: 'CIRCUS NIGHTS' },
  ],
  tshirts: [
    { icon: '🦅', name: 'EAGLE PRINT' },
    { icon: '🌺', name: 'FLORAL BOLD' },
    { icon: '🏄', name: 'SURF CULTURE' },
  ],
  graphics: [
    { icon: '💻', name: 'DIGITAL ART' },
    { icon: '📐', name: 'VECTOR PACK' },
    { icon: '🎭', name: 'BRAND KIT' },
  ],
};

export default function Categories() {
  const [activeTab, setActiveTab] = useState<keyof typeof categories>('posters');

  return (
    <>
      <div className="diagonal-divider-rev bg-[var(--blue)]"></div>
      <section id="categories" className="bg-[var(--blue)] px-8 py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(76,201,240,0.2)_2px,transparent_2px)] bg-[length:16px_16px]"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center pt-12 pb-4 relative z-10"
        >
          <div className="boom-label blue" data-text="THE GALLERY">THE GALLERY</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center gap-4 flex-wrap my-8 relative z-10"
        >
          <button 
            onClick={() => setActiveTab('posters')}
            className={`font-heading text-2xl tracking-widest px-7 py-3 border-[var(--outline-thick)] cursor-none transition-all duration-150 relative top-0 ${activeTab === 'posters' ? 'bg-[var(--red)] text-[var(--white)] -translate-x-1 -translate-y-1 shadow-[8px_8px_0_var(--black)]' : 'bg-[var(--white)] text-[var(--black)] hover:bg-[var(--yellow)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--black)]'}`}
          >
            📋 POSTERS
          </button>
          <button 
            onClick={() => setActiveTab('tshirts')}
            className={`font-heading text-2xl tracking-widest px-7 py-3 border-[var(--outline-thick)] cursor-none transition-all duration-150 relative top-0 ${activeTab === 'tshirts' ? 'bg-[var(--red)] text-[var(--white)] -translate-x-1 -translate-y-1 shadow-[8px_8px_0_var(--black)]' : 'bg-[var(--white)] text-[var(--black)] hover:bg-[var(--yellow)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--black)]'}`}
          >
            👕 T-SHIRTS
          </button>
          <button 
            onClick={() => setActiveTab('graphics')}
            className={`font-heading text-2xl tracking-widest px-7 py-3 border-[var(--outline-thick)] cursor-none transition-all duration-150 relative top-0 ${activeTab === 'graphics' ? 'bg-[var(--red)] text-[var(--white)] -translate-x-1 -translate-y-1 shadow-[8px_8px_0_var(--black)]' : 'bg-[var(--white)] text-[var(--black)] hover:bg-[var(--yellow)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--black)]'}`}
          >
            🎨 GRAPHICS
          </button>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div 
            key={activeTab}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {categories[activeTab].map((item, idx) => (
              <div key={idx} className="bg-[var(--white)] border-[var(--outline-thick)] p-6 text-center transition-all duration-150 shadow-[6px_6px_0_rgba(0,0,0,0.5)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgba(0,0,0,0.5)] group">
                <span className="text-5xl block">{item.icon}</span>
                <div className="font-heading text-xl tracking-wider mt-2">{item.name}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
