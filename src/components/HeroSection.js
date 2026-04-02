

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Data ──────────────────────────────────────────────────────────
const HEADLINE_CHARS = 'WELCOME ITZFIZZ'.split('').map((char, i) => ({
  id: i,
  char: char === ' ' ? '\u00A0' : char,
  isSpace: char === ' ',
}));

const STATS = [
  { value: '58%', label: 'Increase in pickup point use' },
  { value: '23%', label: 'Decrease in customer calls' },
  { value: '27%', label: 'Growth in repeat clients' },
  { value: '40%', label: 'Faster project delivery' },
];

// ─── Component ─────────────────────────────────────────────────────
export default function HeroSection() {
  const sectionRef = useRef(null);
  const panelRef   = useRef(null);
  const carRef     = useRef(null);
  const lettersRef = useRef([]);
  const statsRef   = useRef([]);

  useEffect(() => {
    if (!carRef.current || lettersRef.current.length === 0) return;

    const ctx = gsap.context(() => {

      const carEl   = carRef.current;
      const carRect = carEl.getBoundingClientRect();
      const carW    = carRect.width;

      const startX = -carRect.left;
      const endX   = window.innerWidth - carRect.left - carW * 0.5 + 40;

      // ── Initial states ─────────────────────────────────────────
      gsap.set(carEl, { x: startX });
      gsap.set(lettersRef.current, { opacity: 0, y: 24 });
      gsap.set(statsRef.current,   { opacity: 0, y: 30 });  // all 4 stats hidden

      // ── Master scroll timeline (pinned) ───────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.8,
          pin: panelRef.current,
          anticipatePin: 1,
        },
      });

      // 1. Car: left edge → right side
      tl.to(carEl, {
        x: endX,
        ease: 'none',
        duration: 3,
      }, 0);

      // 2. Letters: reveal one-by-one (starts slightly after car moves)
      tl.to(
        lettersRef.current,
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          ease: 'power3.out',
          duration: 2.4,
        },
        0.45,
      );

      // 3. Stats: reveal one-by-one after letters start appearing
      tl.to(
        statsRef.current,
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          ease: 'power3.out',
          duration: 1.8,
        },
        1.2,
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ height: '300vh', position: 'relative' }}
    >
      {/* ── Pinned panel ─────────────────────────────────────── */}
      <div
        ref={panelRef}
        style={{
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          position: 'relative',
          background: 'var(--bg-primary)',
        }}
      >

        {/* Radial glow */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80vw',
            height: '80vh',
            background:
              'radial-gradient(ellipse at center, rgba(232,255,71,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Navbar underline */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            height: '1px',
            background: 'var(--border)',
            zIndex: 1,
          }}
        />

        {/* ── Content layer ──────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            paddingTop: '72px',
            paddingBottom: '88px',
            overflow: 'hidden',
          }}
        >

          {/* Section label */}
          <div
            style={{
              position: 'absolute',
              top: '88px',
              left: '2rem',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-display)',
              zIndex: 5,
            }}
          >
            01 / Hero
          </div>

          {/* ── Car image ────────────────────────────────────── */}
          <img
            ref={carRef}
            src="https://paraschaturvedi.github.io/car-scroll-animation/McLaren%20720S%202022%20top%20view.png"
            alt="McLaren 720S — Itzfizz Hero Visual"
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              width: 'clamp(300px, 50vw, 720px)',
              objectFit: 'contain',
              willChange: 'transform',
              filter: 'drop-shadow(0 0 50px rgba(232,255,71,0.14))',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* Decorative circle */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              width: 'clamp(240px, 38vw, 540px)',
              height: 'clamp(240px, 38vw, 540px)',
              border: '1px solid var(--border)',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />

          {/* ── Headline ─────────────────────────────────────── */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              transform: 'translateY(-50%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 5.5vw, 5rem)',
                lineHeight: 1,
                color: 'var(--text-primary)',
                letterSpacing: '0.2em',
              }}
            >
              {HEADLINE_CHARS.map(({ id, char, isSpace }) => (
                <span
                  key={id}
                  ref={(el) => (lettersRef.current[id] = el)}
                  style={{
                    display: 'inline-block',
                    whiteSpace: 'pre',
                    minWidth: isSpace ? '0.5em' : 'auto',
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right labels ─────────────────────────────────── */}
          <div
            className="d-none d-lg-flex flex-column justify-content-between"
            style={{
              position: 'absolute',
              right: '2.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '46vh',
              paddingLeft: '1.8rem',
              borderLeft: '1px solid var(--border)',
              zIndex: 5,
            }}
          >
            {[
              { label: 'Model',  value: 'McLaren 720S', accent: false },
              { label: 'Year',   value: '2022',          accent: true  },
              { label: 'Agency', value: 'Itzfizz',       accent: false },
            ].map(({ label, value, accent }) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: '0.58rem',
                    letterSpacing: '0.2em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '0.35rem',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: accent ? 'var(--accent)' : 'var(--text-primary)',
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Stats Bar ────────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: '1px solid var(--border)',
            background: 'rgba(5,5,7,0.92)',
            backdropFilter: 'blur(14px)',
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              width: '100%',
            }}
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                ref={(el) => (statsRef.current[i] = el)}
                style={{
                  padding: '1.2rem 1.8rem',
                  borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
                    fontWeight: 800,
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: '0.3rem',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em',
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scroll Indicator ─────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            bottom: '6.5rem',
            right: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            zIndex: 5,
          }}
        >
          <span
            style={{
              fontSize: '0.58rem',
              letterSpacing: '0.25em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              writingMode: 'vertical-rl',
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '44px',
              background: 'linear-gradient(to bottom, var(--accent), transparent)',
            }}
          />
        </div>

      </div>
    </section>
  );
}