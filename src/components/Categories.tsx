import { useState } from 'react';
import { motion } from 'motion/react';

const categories = {
  posters: [
    { icon: '🗼', name: 'City Series' },
    { icon: '🌅', name: 'Sunrise Drop' },
    { icon: '🎪', name: 'Circus Nights' },
  ],
  tshirts: [
    { icon: '🦅', name: 'Eagle Print' },
    { icon: '🌺', name: 'Floral Bold' },
    { icon: '🏄', name: 'Surf Culture' },
  ],
  graphics: [
    { icon: '💻', name: 'Digital Art' },
    { icon: '📐', name: 'Vector Pack' },
    { icon: '🎭', name: 'Brand Kit' },
  ],
};

const tabs = [
  { key: 'posters', label: '📋 Posters' },
  { key: 'tshirts', label: '👕 T-Shirts' },
  { key: 'graphics', label: '🎨 Graphics' },
] as const;

export default function Categories() {
  const [activeTab, setActiveTab] = useState<keyof typeof categories>('posters');

  return (
    <>
      <div className="diagonal-divider-rev" style={{ background: 'var(--blue)' }} />
      <section id="categories" className="bg-[var(--blue)] px-6 md:px-12 py-20 relative">
        <div className="absolute inset-0 halftone-light pointer-events-none opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-10 relative z-10"
        >
          <h2
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
            className="text-white text-4xl md:text-5xl tracking-tight leading-none"
          >
            The Gallery
          </h2>
          <div className="w-20 h-1.5 bg-[var(--yellow)] mt-3" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-3 flex-wrap mb-10 relative z-10 max-w-5xl mx-auto"
        >
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              className={`text-sm tracking-wide uppercase px-6 py-3 border-[3px] border-[var(--white)] transition-all duration-150 ${
                activeTab === key
                  ? 'bg-[var(--yellow)] text-[var(--ink)] border-[var(--yellow)] translate-x-[-2px] translate-y-[-2px] shadow-[5px_5px_0_rgba(255,255,255,0.3)]'
                  : 'bg-transparent text-[var(--white)] hover:bg-white/10 hover:translate-x-[-1px] hover:translate-y-[-1px]'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {categories[activeTab].map((item, idx) => (
              <div
                key={idx}
                className="bg-[var(--white)] border-[3px] border-[var(--ink)] p-8 text-center transition-all duration-150 shadow-[5px_5px_0_rgba(0,0,0,0.4)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0_rgba(0,0,0,0.4)]"
              >
                <span className="text-5xl block mb-3 select-none">{item.icon}</span>
                <p
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
                  className="text-[var(--ink)] text-base tracking-tight"
                >
                  {item.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
