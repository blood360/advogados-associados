import React from 'react';
import './HeroSection.css';
import justicaBackground from '../../assets/images/justica2.png';

function HeroSection() {
  return (
    <section className="hero-container">
      <div 
        className="hero-background-image-wrapper"
        style={{ backgroundImage: `url(${justicaBackground})` }}
      ></div>

      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Advocacia Humanizada e Especializada ao Seu Alcance</h1>
        <p className="hero-subtitle">Atendimento jurídico online focado em suas necessidades, com expertise em Direitos Previdenciários, Trabalhistas, TEA, Animais e Adoção.</p>
        
        <a href="/agendar" className="hero-button">Agendar Consulta Agora</a> 
      </div>
    </section>
  );
}

export default HeroSection;