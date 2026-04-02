import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Composes: CustomCursor → Navbar → HeroSection → AboutSection → Footer
 */
export default function Home() {
  return (
    <>
      {/* Noise texture overlay — visual polish */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Fixed top navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Hero with scroll-driven animation — 300vh spacer inside */}
        <HeroSection />

        {/* Services / About section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
