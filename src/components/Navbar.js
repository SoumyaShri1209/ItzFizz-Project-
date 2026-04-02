'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Navbar
 * Minimal fixed navigation. Animates in on mount.
 */
export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.3,
    });
  }, []);

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        padding: '1.25rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(12px)',
        background: 'rgba(5,5,7,0.7)',
        fontFamily: 'var(--font-display)',
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: '1.1rem',
          fontWeight: 800,
          letterSpacing: '0.15em',
          color: 'var(--text-primary)',
        }}
      >
        ITZ<span style={{ color: 'var(--accent)' }}>FIZZ</span>
      </div>

      {/* Nav Links — hidden on small, shown on md+ */}
      <div className="d-none d-md-flex gap-4" style={{ gap: '2rem' }}>
        {['Work', 'Services', 'About', 'Contact'].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              transition: 'color 0.2s',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
          >
            {item}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          padding: '0.45rem 1.1rem',
          border: '1px solid var(--accent)',
          color: 'var(--accent)',
          fontSize: '0.75rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          fontWeight: 600,
          transition: 'all 0.25s',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'var(--accent)';
          e.target.style.color = '#050507';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = 'var(--accent)';
        }}
      >
        Get in Touch
      </a>
    </nav>
  );
}
