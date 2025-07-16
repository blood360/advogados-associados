import React from 'react';
import './HighlightsSection.css'; 

function HighlightsSection() {
  return (
    <section className="highlights-container">
      <h2 className="highlights-title">Nosso Compromisso com a Advocacia Humanizada</h2>
      <div className="highlights-grid">
        <div className="highlight-item">
          <div className="highlight-icon">♿</div> {/* Ícone placeholder: ATENDIMENTO HUMANIZADO */}
          <h3>Atendimento a Pais de Crianças Autistas</h3>
          <p>Oferecemos suporte jurídico sensível e especializado para garantir os direitos e o bem-estar de crianças no espectro autista e suas famílias.</p>
        </div>
        <div className="highlight-item">
          <div className="highlight-icon">🐾</div> {/* Ícone placeholder: DIREITOS DOS ANIMAIS */}
          <h3>Defesa e Proteção de Animais</h3>
          <p>Atuação dedicada na proteção legal dos animais, combatendo maus-tratos e buscando a garantia de seus direitos em diversas esferas.</p>
        </div>
        <div className="highlight-item">
          <div className="highlight-icon">👨‍👩‍👧‍👦</div> {/* Ícone placeholder: ADOÇÃO DE CRIANÇAS */}
          <h3>Apoio em Processos de Adoção</h3>
          <p>Orientação e assessoria completa em processos de adoção, tornando o caminho para construir novas famílias mais seguro e acolhedor.</p>
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;