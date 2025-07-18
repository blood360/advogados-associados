import React from 'react';
import './EspecialidadesPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { default as mockServices } from '../../components/ServiceSelection/ServiceSelection'; 

function EspecialidadesPage({ onLogout }) {
  // Poderíamos usar a mesma lista de serviços do ServiceSelection para consistência
  const specialtiesList = [
    { name: 'Direito Previdenciário', description: 'Revisão de aposentadoria, BPC LOAS, auxílios, planejamento previdenciário.' },
    { name: 'Direito Trabalhista', description: 'Reclamações trabalhistas, defesa de empresas, rescisões, assédio moral.' },
    { name: 'Direito Civil e Sucessões', description: 'Contratos, inventários, divórcios, partilha de bens, indenizações.' },
    { name: 'Direitos das Pessoas com TEA', description: 'Ações para garantir acesso a tratamentos, inclusão escolar e social, benefícios.' },
    { name: 'Defesa e Proteção de Animais', description: 'Combate a maus-tratos, ações por danos morais e materiais envolvendo animais.' },
    { name: 'Adoção de Crianças', description: 'Assessoria jurídica completa em todas as fases do processo de adoção.' },
    { name: 'Assessoria Jurídica Geral', description: 'Orientação e consultoria para diversas questões legais do dia a dia.' },
    { name: 'Direito de Família', description: 'Divórcio, pensão alimentícia, guarda de filhos, união estável.' },
  ];

  return (
    <div className="especialidades-page-container">
      <Navbar />
      <main className="especialidades-main-content">
        <h1 className="especialidades-title">Nossas Especialidades</h1>
        <p className="especialidades-subtitle">Atuamos em diversas áreas do Direito para oferecer a você o suporte completo que precisa.</p>
        
        <div className="specialties-list-grid">
          {specialtiesList.map((specialty, index) => (
            <div key={index} className="specialty-item-card">
              <h3 className="specialty-item-title">{specialty.name}</h3>
              <p className="specialty-item-description">{specialty.description}</p>
              <a href="/agendar" className="specialty-item-button">Agendar Consulta</a> {/* Botão para agendar */}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default EspecialidadesPage;