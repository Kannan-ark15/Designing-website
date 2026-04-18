import { useState } from 'react';
import { motion } from 'motion/react';

import relics from '@assets/relics_1776494843422.png';
import treasureQuest from '@assets/event2_mark2_1776494843418.png';
import recruitment from '@assets/Recruitment_Poster_1776494843422.jpg';

import ksRed from '@assets/KS_Sample_1_1776494843419.png';
import carpe4th from '@assets/Carpe_4thYears_1776494843417.png';
import ksGreen from '@assets/KS_Sample_2_1776494843420.png';

import knight from '@assets/knight_1776494843419.jpg';
import ps from '@assets/ps_poster_final_1776494843421.png';
import technoSample from '@assets/sample_1776494843422.png';

const categories = {
  posters: [
    { img: relics,        name: 'Race for the Relics', sub: 'Kuruksastra' },
    { img: treasureQuest, name: 'Treasure Quest',      sub: 'Technotainment' },
    { img: recruitment,   name: 'Recruitment Drive',   sub: 'Technotainment' },
  ],
  tshirts: [
    { img: ksRed,   name: 'Veera Chozham',    sub: 'Kuruksastra · Red' },
    { img: carpe4th, name: 'Organizer Tee',   sub: 'Carpediem · Black' },
    { img: ksGreen, name: 'An Ode to Kaveri', sub: 'Kuruksastra · Green' },
  ],
  graphics: [
    { img: knight,      name: 'Batman vs Moon Knight', sub: 'Digital Illustration' },
    { img: ps,          name: 'Ponniyin Selvan',        sub: 'Movie Poster Art' },
    { img: technoSample, name: 'Techno Informals Tee', sub: 'Merch Design' },
  ],
};

const tabs = [
  { key: 'posters',  label: 'Event Posters' },
  { key: 'tshirts',  label: 'Merch Design' },
  { key: 'graphics', label: 'Illustrations' },
] as const;

export default function Categories() {
  const [activeTab, setActiveTab] = useState<keyof typeof categories>('posters');

  return (
    <>
      <div className="diagonal-divider-rev" style={{ background: 'var(--blue)' }} />
      <section id="categories" className="bg-[var(--blue)] px-6 md:px-12 py-20 relative">
        <div className="absolute inset-0 halftone-light pointer-events-none opacity-40" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-10 relative z-10"
        >
          <span
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            className="text-[var(--yellow)] text-xs tracking-widest uppercase mb-3 block"
          >
            Explore
          </span>
          <h2
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
            className="text-white text-4xl md:text-5xl tracking-tight leading-none"
          >
            The Gallery
          </h2>
          <div className="w-16 h-1.5 bg-[var(--yellow)] mt-3" />
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
              className={`text-sm tracking-wide uppercase px-6 py-3 border-[3px] transition-all duration-150 ${
                activeTab === key
                  ? 'bg-[var(--yellow)] text-[var(--ink)] border-[var(--yellow)] translate-x-[-2px] translate-y-[-2px] shadow-[5px_5px_0_rgba(255,255,255,0.25)]'
                  : 'bg-transparent text-white border-white/40 hover:border-white hover:bg-white/10'
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
                className="group border-[3px] border-[var(--ink)] overflow-hidden bg-[var(--white)] shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-all duration-200 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0_rgba(0,0,0,0.5)]"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 border-t-[2.5px] border-[var(--ink)]">
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
                    className="text-[var(--ink)] text-sm tracking-tight"
                  >
                    {item.name}
                  </p>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                    className="text-gray-500 text-xs mt-0.5"
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
