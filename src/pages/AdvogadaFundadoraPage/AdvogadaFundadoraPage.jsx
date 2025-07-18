import React from 'react';
import './AdvogadaFundadoraPage.css'; // Criaremos este CSS
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AboutSection from '../../components/AboutSection/AboutSection'; // Reutiliza o componente

function AdvogadaFundadoraPage({ onLogout }) { // onLogout é passado para Navbar se for global
  return (
    <div className="advogada-page-container">
      <Navbar />
      <main className="advogada-main-content">
        <AboutSection /> {/* Renderiza o conteúdo da seção "Sobre" */}
        {/* Adicione mais conteúdo sobre a advogada aqui se quiser */}
      </main>
      <Footer />
    </div>
  );
}

export default AdvogadaFundadoraPage;