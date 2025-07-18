import React from 'react';
import './AboutSection.css';

function AboutSection() {
    return (
        <section className='about-container'>
            <div className='about-image-wrapper'>
                {/*Usar imagem real aqui*/}
                <img src="https://i.pinimg.com/736x/01/14/f8/0114f842d5f5fbd7cb6b30bbfc0410c3.jpg" alt="advogada fundadora" className='about-image'/>
            </div>
            <div className='about-content'>
                <h2 className='about-title'>Apresentação da Fundadora</h2>
                <h3 className='about-name'>Ana Paula</h3>
                <p className='about-description'>Com mais de [ XX ] anos de de experiência, [NOME] fundou esta plataforma com a missão de tornar a justiça mais acessível e humana. Sua paixão pelo Direito é guiada por princípios de ética, transparência e empatia, especialmente em áreas mais sensíveis como direitos previdenciários, trabalhistas, civis e a defesa de pessoas com TEA e animais.</p>
                <p className='about-description'>Acreditamos que cada caso é único e merece atenção dedicada. Nosso objetivo é oferecer um atendimento jurídico que entenda suas necessidades e construa soluções eficazes e personalizadas.</p>
                <a href="/advogada-completo" className='about-button'>Saiba mais sobre a Advogada</a>
            </div>
        </section>
    );
}

export default AboutSection;