import { motion } from 'motion/react';

import flagwars from '@assets/flagwars_1776494843418.png';
import carnival from '@assets/carnival_final_1776494843415.png';
import sherlock from '@assets/sherlock_1776494843423.png';
import moneyball from '@assets/moneyball_1776494843420.png';
import photographia from '@assets/photographia_1776494843421.png';
import sos from '@assets/sos_1776494843423.jpg';

const panels = [
  { id: 1, img: flagwars,     title: 'Flag Wars',      sub: 'Event Poster · Carpediem',   pop: 'ZAP!' },
  { id: 2, img: carnival,     title: 'Carnival Games', sub: 'Event Poster · Informals',   pop: 'POP!' },
  { id: 3, img: sherlock,     title: 'Sherlock',       sub: 'Event Poster · Technotainment', pop: 'WOW!' },
  { id: 4, img: moneyball,    title: 'Money Ball',     sub: 'Event Poster · Utsav',       pop: 'BOOM!' },
  { id: 5, img: photographia, title: 'Photographia',   sub: 'Photography Competition',    pop: 'POW!' },
  { id: 6, img: sos,          title: 'Sovereign of Spies', sub: 'Event Poster · Techno Informals', pop: 'YOW!' },
];

export default function FeaturedWork() {
  return (
    <>
      <div className="diagonal-divider" />
      <section id="featured" className="bg-[var(--white)] px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-12"
        >
          <span className="comic-tag mb-4 inline-block">Our Work</span>
          <h2 className="section-title">
            <span>Featured Designs</span>
          </h2>
          <p
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
            className="text-[var(--muted-foreground)] mt-4 text-sm"
          >
            Hover any panel to see the project →
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-[4px] border-[var(--ink)] max-w-6xl mx-auto"
        >
          {panels.map((panel) => (
            <div
              key={panel.id}
              className="comic-panel border-[3px] border-[var(--ink)] group"
              style={{ aspectRatio: '3/4' }}
            >
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={panel.img}
                  alt={panel.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <span className="pop-effect">{panel.pop}</span>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0">
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
                    className="text-white text-base leading-tight"
                  >
                    {panel.title}
                  </p>
                  <p
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                    className="text-white/60 text-xs mt-0.5"
                  >
                    {panel.sub}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
