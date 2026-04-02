'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    number: '01',
    title: 'Web Development',
    desc: 'Full-stack websites and web apps built with modern frameworks, optimised for speed and scale.',
  },
  {
    number: '02',
    title: 'UI / UX Design',
    desc: 'User-centred design systems, prototypes, and pixel-perfect interfaces that convert visitors.',
  },
  {
    number: '03',
    title: 'WordPress & Shopify',
    desc: 'Custom themes, plugins, and storefronts tailored to your brand and business goals.',
  },
  {
    number: '04',
    title: 'Performance & SEO',
    desc: 'Speed optimisation, Core Web Vitals tuning, and technical SEO that drives organic growth.',
  },
];

/**
 * AboutSection
 * Reveals service cards on scroll using GSAP ScrollTrigger.
 */
export default function AboutSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading reveal
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      });

      // Cards stagger reveal
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 85%',
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-content"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="container">

        {/* Heading */}
        <div ref={headingRef} className="row mb-5">
          <div className="col-12 col-md-7">
            <p
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-display)',
                marginBottom: '1rem',
              }}
            >
              02 / Services
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.05,
                color: 'var(--text-primary)',
              }}
            >
              What we <span style={{ color: 'var(--accent)' }}>build</span> for
              your brand
            </h2>
          </div>
          <div className="col-12 col-md-5 d-flex align-items-end">
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
              }}
            >
              Itzfizz Digital crafts premium digital experiences — from concept to
              deployment — with a relentless focus on quality, performance, and
              measurable impact.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="row g-3">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="col-12 col-md-6"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div
                className="gradient-border"
                style={{
                  padding: '2rem',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.02)',
                  height: '100%',
                  transition: 'background 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(232,255,71,0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.7rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.2em',
                    marginBottom: '1rem',
                  }}
                >
                  {service.number}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
