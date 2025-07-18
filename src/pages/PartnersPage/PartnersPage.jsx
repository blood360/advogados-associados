import React from 'react';
import './PartnersPage.css'; // Criaremos este CSS
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// Dados de parceiros simulados
const mockPartners = [
  {
    id: 'p1',
    name: 'Consultoria Financeira Alfa',
    logo: 'https://via.placeholder.com/150x80?text=Logo+Alfa',
    description: 'Especializada em planejamento financeiro e reestruturação de dívidas para empresas e indivíduos.',
    website: 'https://www.consultoriaalfa.com',
  },
  {
    id: 'p2',
    name: 'Agência de Marketing Digital Beta',
    logo: 'https://via.placeholder.com/150x80?text=Logo+Beta',
    description: 'Soluções completas em marketing digital, SEO e gestão de redes sociais para escritórios de advocacia.',
    website: 'https://www.marketingbeta.com',
  },
  {
    id: 'p3',
    name: 'Contabilidade Delta',
    logo: 'https://via.placeholder.com/150x80?text=Logo+Delta',
    description: 'Serviços contábeis e fiscais para empresas, garantindo conformidade e otimização de impostos.',
    website: 'https://www.contabilidadedelta.com',
  },
];

function PartnersPage() {
  return (
    <div className="partners-page-container">
      <Navbar />
      <main className="partners-main-content">
        <h1 className="partners-title">Nossos Parceiros Empresariais</h1>
        <p className="partners-subtitle">Construindo pontes para o sucesso e soluções integradas para nossos clientes.</p>
        
        <div className="partners-grid">
          {mockPartners.map(partner => (
            <div key={partner.id} className="partner-card">
              <img src={partner.logo} alt={`Logo ${partner.name}`} className="partner-logo" />
              <h3 className="partner-name">{partner.name}</h3>
              <p className="partner-description">{partner.description}</p>
              {partner.website && (
                <a href={partner.website} target="_blank" rel="noopener noreferrer" className="partner-website-link">
                  Visitar Site &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PartnersPage;