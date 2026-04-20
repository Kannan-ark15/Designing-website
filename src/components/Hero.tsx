import knightImg from '@assets/knight_1776494843419.jpg';
import psImg from '@assets/ps_poster_final_1776494843421.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-layout"
      style={{
        height: 'calc(100vh - 68px)',
        marginTop: '68px',
        background: '#FAFAF8',
        borderBottom: '4px solid #0A0A0A',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
      }}
    >
      {/* LEFT COLUMN */}
      <div
        className="hero-copy-column"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: 'max(10%, 40px) 64px',
          background: '#FAFAF8',
          height: '100%',
          boxSizing: 'border-box',
          overflow: 'auto',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: 'fit-content',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '4px 14px',
            border: '2.5px solid #0A0A0A',
            background: '#FDCB6E',
            color: '#0A0A0A',
            boxShadow: '3px 3px 0 #0A0A0A',
            marginBottom: '24px',
          }}
        >
          Design Studio - 2026
        </span>

        <div
          className="hero-copy-panel"
          style={{
            background: '#FFFFFF',
            border: '4px solid #0A0A0A',
            padding: '32px 40px',
            boxShadow: '8px 8px 0 #0A0A0A',
            marginBottom: '32px',
          }}
        >
          <p
            className="hero-headline"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 900,
              fontSize: '34px',
              lineHeight: 1.2,
              color: '#0A0A0A',
              margin: 0,
            }}
          >
            Where{' '}
            <em style={{ fontStyle: 'normal', color: '#D63031' }}>Bold Ideas</em>{' '}
            meet{' '}
            <em style={{ fontStyle: 'normal', color: '#D63031' }}>Stunning Visuals</em> 💥
          </p>
          <p
            className="hero-subtext"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: '#6B7280',
              marginTop: '12px',
              lineHeight: 1.6,
              marginBottom: 0,
            }}
          >
            Event posters, merch design, brand identity — crafted with precision and personality.
          </p>
        </div>

        <div className="hero-tags" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {[
            { label: 'Posters', bg: '#FDCB6E', fg: '#0A0A0A' },
            { label: 'Merch Design', bg: '#D63031', fg: '#FFFFFF' },
            { label: 'Branding', bg: '#2D3436', fg: '#FFFFFF' },
          ].map((t) => (
            <span
              key={t.label}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '4px 14px',
                border: '2.5px solid #0A0A0A',
                background: t.bg,
                color: t.fg,
                boxShadow: '3px 3px 0 #0A0A0A',
              }}
            >
              {t.label}
            </span>
          ))}
        </div>

        <div className="hero-actions" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <a
            href="#featured"
            style={{
              display: 'inline-block',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: '13px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '14px 32px',
              border: '4px solid #0A0A0A',
              background: '#0A0A0A',
              color: '#FDCB6E',
              textDecoration: 'none',
              boxShadow: '5px 5px 0 #D63031',
            }}
          >
            View Work ↓
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: '13px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '14px 32px',
              border: '4px solid #0A0A0A',
              background: '#D63031',
              color: '#FFFFFF',
              textDecoration: 'none',
              boxShadow: '5px 5px 0 #0A0A0A',
            }}
          >
            Hire Me
          </a>
        </div>

        <div className="hero-stats" style={{ display: 'flex', gap: '40px' }}>
          {[
            { n: '120+', l: 'Projects' },
            { n: '48', l: 'Clients' },
          ].map((s) => (
            <div key={s.l}>
              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  fontSize: '28px',
                  color: '#0A0A0A',
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {s.n}
              </p>
              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '12px',
                  color: '#6B7280',
                  marginTop: '4px',
                  marginBottom: 0,
                }}
              >
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div
        className="hero-media-column"
        style={{
          display: 'grid',
          gridTemplateRows: '1fr 1fr',
          borderLeft: '4px solid #0A0A0A',
          height: '100%',
        }}
      >
        <div className="hero-media-block" style={{ overflow: 'hidden', borderBottom: '4px solid #0A0A0A', position: 'relative' }}>
          <img
            src={knightImg}
            alt="Batman vs Moon Knight"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />
          <div className="hero-media-caption" style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '4px 14px',
                border: '2.5px solid #0A0A0A',
                background: '#74B9FF',
                color: '#0A0A0A',
                boxShadow: '3px 3px 0 #0A0A0A',
                marginBottom: '6px',
              }}
            >
              Digital Art
            </span>
            <p
              className="hero-media-title"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                fontSize: '18px',
                color: '#FFFFFF',
                margin: 0,
                textShadow: '2px 2px 0 rgba(0,0,0,0.5)',
              }}
            >
              Batman vs Moon Knight
            </p>
          </div>
        </div>
        <div className="hero-media-block" style={{ overflow: 'hidden', position: 'relative' }}>
          <img
            src={psImg}
            alt="Ponniyin Selvan"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />
          <div className="hero-media-caption" style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '4px 14px',
                border: '2.5px solid #0A0A0A',
                background: '#FDCB6E',
                color: '#0A0A0A',
                boxShadow: '3px 3px 0 #0A0A0A',
                marginBottom: '6px',
              }}
            >
              Movie Poster
            </span>
            <p
              className="hero-media-title"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                fontSize: '18px',
                color: '#FFFFFF',
                margin: 0,
                textShadow: '2px 2px 0 rgba(0,0,0,0.5)',
              }}
            >
              Ponniyin Selvan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
