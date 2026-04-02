/**
 * Footer
 * Simple, clean footer with branding and links.
 */
'use client';
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        background: 'var(--bg-primary)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.1rem',
          letterSpacing: '0.15em',
          color: 'var(--text-primary)',
        }}
      >
        ITZ<span style={{ color: 'var(--accent)' }}>FIZZ</span>
      </div>

      <p
        style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.05em',
          margin: 0,
        }}
      >
        © {new Date().getFullYear()} Itzfizz Digital. All rights reserved.
      </p>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {['Privacy', 'Terms', 'Careers'].map((link) => (
          <a
            key={link}
            href="#"
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
