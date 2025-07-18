import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [highContrast, setHighContrast] = useState(() => {
    return localStorage.getItem('highContrast') === 'true';
  });
  const speechUtteranceRef = useRef(null); // Ref para a instância de SpeechSynthesisUtterance

  useEffect(() => {
    localStorage.setItem('highContrast', highContrast);
    if (highContrast) {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }
  }, [highContrast]);

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      // Parar qualquer fala anterior
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      speechUtteranceRef.current = utterance; // Guarda a referência
      speechSynthesis.speak(utterance);
    } else {
      console.warn('SpeechSynthesis API não suportada neste navegador.');
      alert('Seu navegador não suporta a leitura de texto.');
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window && speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  };

  const readMainContent = () => {
    stopSpeaking(); // Parar fala anterior antes de começar a nova

    const mainElement = document.querySelector('main');
    if (!mainElement) {
      speakText('Conteúdo principal não encontrado para leitura.');
      return;
    }

    // Coletar texto de elementos semânticos e visíveis no conteúdo principal
    // Evitar ler elementos de navegação ou irrelevantes para o fluxo principal de leitura
    const readableElements = mainElement.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span, strong, em, button[aria-label], a[aria-label]');
    
    let fullText = 'Conteúdo da página: ';
    readableElements.forEach(el => {
      // Ignorar elementos de controle internos ou sem texto útil
      const tagName = el.tagName.toLowerCase();
      const textContent = el.textContent.trim();

      if (textContent && !el.closest('.navbar-container') && !el.closest('.footer-container') && !el.closest('.hero-background-image-wrapper')) {
        // Adicionar pontuação ou pausas para melhor leitura
        if (tagName.startsWith('h')) {
          fullText += `${textContent}. `; // Títulos com ponto para pausa
        } else if (tagName === 'li') {
            fullText += `Item da lista: ${textContent}. `;
        } else {
          fullText += `${textContent}. `;
        }
      }
    });

    if (fullText.length > 'Conteúdo da página: '.length) {
      speakText(fullText);
    } else {
      speakText('Nenhum conteúdo significativo encontrado para leitura.');
    }
  };

  return (
    <AccessibilityContext.Provider value={{ highContrast, toggleHighContrast, speakText, readMainContent, stopSpeaking }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);