// src/components/Navbar/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { useAccessibility } from '../../context/AccessibilityContext';
import DropdownMenu from './DropdownMenu/DropdownMenu'; // Importa o DropdownMenu

function Navbar() {
  const { toggleHighContrast, highContrast, readMainContent, stopSpeaking } = useAccessibility(); 
  const [isSpeaking, setIsSpeaking] = React.useState(false);

  React.useEffect(() => {
    if ('speechSynthesis' in window) {
      const handleSpeakStart = () => setIsSpeaking(true);
      const handleSpeakEnd = () => setIsSpeaking(false);
      
      speechSynthesis.addEventListener('start', handleSpeakStart);
      speechSynthesis.addEventListener('end', handleSpeakEnd);

      return () => {
        speechSynthesis.removeEventListener('start', handleSpeakStart);
        speechSynthesis.removeEventListener('end', handleSpeakEnd);
      };
    }
  }, []);

  const handleReadButtonClick = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      readMainContent();
    }
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <a href="/">Advocacia [Nome da Advogada]</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/advogada">Advogada Fundadora</a></li> 
        <li><a href="/especialidades">Especialidades</a></li> 
        <li><a href="/servicos">Serviços</a></li> 
        {/* DROPDOWN "MAIS" */}
        <li>
          <DropdownMenu title="Mais">
            <a href="/blog">Blog</a>
            <a href="/eventos">Eventos</a>
            <a href="/parceiros">Parceiros</a>
          </DropdownMenu>
        </li>
      </ul>
      <div className="navbar-actions">
        {/* Ajuste o espaçamento para que o WhatsApp não fique colado */}
        <a href="#" className="whatsapp-link">WhatsApp</a> 
        
        <button 
          className="accessibility-toggle-button" 
          onClick={toggleHighContrast}
          title={highContrast ? "Desativar Alto Contraste" : "Ativar Alto Contraste"}
        >
          {highContrast ? '👁️' : '💡'}
        </button>

        <button 
          className="accessibility-read-button" 
          onClick={handleReadButtonClick}
          title={isSpeaking ? "Parar Leitura" : "Ouvir Página"}
        >
          {isSpeaking ? '🔇' : '🔊'}
        </button>

        <a href="/login" className="login-link">Entrar</a>
      </div>
    </nav>
  );
}

export default Navbar;