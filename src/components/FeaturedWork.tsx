import { motion } from 'motion/react';

const panels = [
  { id: 1, bg: '#E63946', emoji: '🔥', title: 'FIRE SERIES\nDROP NO.1', caption: 'Poster Print · 18×24"', pop: 'POP!' },
  { id: 2, bg: '#FFD60A', emoji: '🌊', title: 'WAVE CULTURE\nTEE DESIGN', caption: 'T-Shirt Graphic · 2024', pop: 'WOW!', darkText: true },
  { id: 3, bg: '#4CC9F0', emoji: '⚡', title: 'ELECTRIC\nSIGNAL', caption: 'Brand Identity Kit', pop: 'ZAP!' },
  { id: 4, bg: '#1D3557', emoji: '🌙', title: 'MIDNIGHT\nCOLLECTIVE', caption: 'Apparel Collection', pop: 'BOOM!' },
  { id: 5, bg: '#E63946', emoji: '🦋', title: 'FLUTTER\nCAMPAIGN', caption: 'Ad Campaign · 2025', pop: 'POW!', pattern: 'radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)' },
  { id: 6, bg: '#FFD60A', emoji: '🎯', title: 'BULLSEYE\nBRAND PACK', caption: 'Logo + Print · 2025', pop: 'YOW!', pattern: 'radial-gradient(circle, rgba(0,0,0,0.2) 2px, transparent 2px)', darkText: true },
];

export default function FeaturedWork() {
  return (
    <>
      <div className="diagonal-divider"></div>
      <section id="featured" className="bg-[var(--white)] px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center pt-12 pb-4 relative"
        >
          <div className="boom-label" data-text="FEATURED DESIGNS">FEATURED DESIGNS</div>
          <p className="font-sans text-lg text-gray-600 mt-2">Click any panel to view the full drop →</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border-[var(--outline-thick)] max-w-6xl mx-auto mt-8"
        >
          {panels.map((panel) => (
            <div key={panel.id} className="comic-panel group">
              <div 
                className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
                style={{ 
                  backgroundColor: panel.bg,
                  backgroundImage: panel.pattern,
                  backgroundSize: panel.pattern ? '10px 10px' : undefined
                }}
              >
                <div className="pop-effect group-hover:opacity-100 group-hover:scale-100">{panel.pop}</div>
                <span className="text-[5rem] z-10 drop-shadow-[4px_4px_0_rgba(0,0,0,0.4)]">{panel.emoji}</span>
                <div className={`font-heading text-2xl tracking-widest text-center px-4 z-10 mt-2 whitespace-pre-line ${panel.darkText ? 'text-[var(--black)] drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]' : 'text-[var(--white)] drop-shadow-[3px_3px_0_var(--black)]'}`}>
                  {panel.title}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[var(--black)] text-[var(--white)] font-heading text-sm tracking-wider px-3 py-1.5 text-center">
                {panel.caption}
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
