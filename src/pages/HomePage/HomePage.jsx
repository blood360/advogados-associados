import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import HighlightsSection from '../../components/HighlightsSection/HighlightsSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      <AboutSection />

      <main>
        <section style={{ padding: '50px', textAlign: 'center', fontSize: '1.2em', backgroundColor: '#f0f2f5' }}>
          Conteúdo adicional da página inicial.
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;