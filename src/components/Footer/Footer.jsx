import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section footer-logo-section">
          <h3>Advocacia [Nome da Advogada]</h3>
          <p>Compromisso com a justiça e atendimento humanizado.</p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">👍</a>
          </div>
        </div>

        <div className="footer-section footer-links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/especialidades">Especialidades</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3>Contato</h3>
          <p>Email: contato@advocacia.com</p>
          <p>Telefone: (XX) XXXX-XXXX</p>
          <p>Endereço: Rua Exemplo, 123 - Centro, Cidade - UF</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Advocacia [Nome da Advogada]. Todos os direitos reservados.</p>
        <p><a href="/politica-privacidade">Política de Privacidade</a> | <a href="/termos-de-uso">Termos de Uso</a></p>
      </div>
    </footer>
  );
}

export default Footer;