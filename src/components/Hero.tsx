import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-16 grid grid-cols-1 md:grid-cols-2 bg-[var(--sky)] relative overflow-hidden border-b-[var(--outline-thick)]">
      <div className="hero-bg absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_2px,transparent_2px)] bg-[length:18px_18px]"></div>

      <div className="hero-burst absolute top-1/2 left-[38%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-0">
        <svg className="w-full h-full" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(300,300)">
            <polygon points="0,-280 18,-60 60,-220 38,-40 130,-170 62,-20 190,-100 80,0 190,100 62,20 130,170 38,40 60,220 18,60 0,280 -18,60 -60,220 -38,40 -130,170 -62,20 -190,100 -80,0 -190,-100 -62,-20 -130,-170 -38,-40 -60,-220 -18,-60" fill="#FFD60A" stroke="#0D0D0D" strokeWidth="4"/>
          </g>
        </svg>
      </div>

      <div className="floater float-star f1">⚡</div>
      <div className="floater float-star f2">★</div>
      <div className="floater float-star f3">💥</div>

      <div className="relative z-10 flex flex-col justify-center p-8 md:p-16">
        <div className="mb-6">
          <span className="explode text-base">DESIGN DROP 2025</span>
        </div>
        <motion.div 
          initial={{ scale: 0, rotate: -5, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="speech-bubble"
        >
          <p className="font-heading text-4xl md:text-5xl leading-tight tracking-wider text-[var(--black)]">
            HEY! I'M A DESIGNER WHO MAKES <em className="text-[var(--red)] not-italic">VISUALS</em> ABSOLUTELY <em className="text-[var(--red)] not-italic">POP 💥</em>
          </p>
        </motion.div>
        
        <div className="flex gap-3 mt-12 flex-wrap">
          <span className="font-heading text-base tracking-wider px-3.5 py-1.5 border-[3px] border-[var(--black)] bg-[var(--yellow)] -rotate-2">POSTERS</span>
          <span className="font-heading text-base tracking-wider px-3.5 py-1.5 border-[3px] border-[var(--black)] bg-[var(--red)] text-[var(--white)] rotate-1">T-SHIRTS</span>
          <span className="font-heading text-base tracking-wider px-3.5 py-1.5 border-[3px] border-[var(--black)] bg-[var(--blue)] text-[var(--white)] -rotate-1">BRANDING</span>
        </div>
        
        <div className="mt-8 flex gap-4 flex-wrap">
          <a href="#featured" className="font-heading text-xl tracking-widest bg-[var(--black)] text-[var(--yellow)] border-[3px] border-[var(--black)] px-7 py-3 no-underline transition-all duration-150 inline-block cursor-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--red)]">VIEW WORK ↓</a>
          <a href="#contact" className="font-heading text-xl tracking-widest bg-[var(--red)] text-[var(--white)] border-[3px] border-[var(--black)] px-7 py-3 no-underline transition-all duration-150 inline-block cursor-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--black)]">HIRE ME</a>
        </div>
      </div>

      <div className="relative z-10 hidden md:flex items-center justify-center">
        <div className="hero-poster">
          <div className="w-[280px] h-[380px] bg-[var(--red)] border-[var(--outline-thick)] shadow-[12px_12px_0_var(--black)] flex flex-col overflow-hidden relative">
            <div className="flex-1 bg-[var(--yellow)] m-3 border-[3px] border-[var(--black)] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle,var(--red)_2px,transparent_2px)] bg-[length:12px_12px] opacity-40"></div>
              <div className="text-[5rem] z-10 drop-shadow-[3px_3px_0_var(--black)]">🎨</div>
              <div className="font-heading text-2xl tracking-widest text-[var(--black)] z-10 mt-2 text-center leading-tight">ULTRA<br/>BOLD<br/>DESIGN</div>
            </div>
            <div className="px-3 py-2 font-heading text-lg text-[var(--white)] text-center tracking-widest">★ ORIGINAL PRINT ★</div>
          </div>
          <span className="absolute font-heading text-sm tracking-wider bg-[var(--sky)] border-[3px] border-[var(--black)] px-2.5 py-1 shadow-[3px_3px_0_var(--black)] text-[var(--black)] -top-3.5 -right-3.5 rotate-[12deg]">NEW!</span>
          <span className="absolute font-heading text-sm tracking-wider bg-[var(--yellow)] border-[3px] border-[var(--black)] px-2.5 py-1 shadow-[3px_3px_0_var(--black)] text-[var(--black)] bottom-5 -left-5 -rotate-6">LIMITED</span>
        </div>
      </div>
    </section>
  );
}
