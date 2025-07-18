// src/pages/HomePage/HomePage.jsx
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import HighlightsSection from '../../components/HighlightsSection/HighlightsSection';
import Footer from '../../components/Footer/Footer';
// REMOVIDO: import AboutSection from '../../components/AboutSection/AboutSection';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      
      <main>
        <section style={{ padding: '50px', textAlign: 'center', fontSize: '1.2em', backgroundColor: 'var(--primary-dark)', color: 'var(--text-light)' }}>
          Explore mais sobre nossos serviços e a equipe que faz a diferença.
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;