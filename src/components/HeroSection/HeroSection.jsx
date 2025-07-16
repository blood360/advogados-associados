import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className='hero-container'>
            <div className='hero-content'>
                <h1 className='hero-title'>Advocacia Humanizada e Especializada ao seu Alcance</h1>
                <p className='hero-subtitle'>Atendimento jurídico online focado em suas necessidades, com expertise em Direitos Previdenciários, Trabalhistas, TEA, Animais e Adoção.</p>
                <button className='hero-button'>Agendar Consulta Agora</button>
            </div>
        </section>
    );
}

export default HeroSection;