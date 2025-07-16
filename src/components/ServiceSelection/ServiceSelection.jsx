// src/components/ServiceSelection/ServiceSelection.jsx
import React from 'react';
import './ServiceSelection.css';

const services = [
  { id: 'previdenciario', name: 'Direito Previdenciário', description: 'Revisão de aposentadoria, BPC LOAS, auxílios.' },
  { id: 'trabalhista', name: 'Direito Trabalhista', description: 'Reclamações trabalhistas, defesa de empresas, rescisões.' },
  { id: 'civil', name: 'Direito Civil e Sucessões', description: 'Contratos, inventários, divórcios, partilha de bens.' },
  { id: 'tea', name: 'Direitos das Pessoas com TEA', description: 'Ações para garantir acesso a tratamentos e inclusão.' },
  { id: 'animal', name: 'Defesa e Proteção de Animais', description: 'Casos de maus-tratos, responsabilidade por danos.' },
  { id: 'adocao', name: 'Adoção de Crianças', description: 'Assessoria completa em todo o processo de adoção legal.' },
  { id: 'assessoria', name: 'Assessoria Jurídica Geral', description: 'Orientação e consultoria para diversas questões legais.' },
];

function ServiceSelection({ onSelectService }) {
  return (
    <div className="service-selection-container">
      <h2 className="service-selection-title">Selecione o Serviço Desejado</h2>
      <div className="service-cards-grid">
        {services.map(service => (
          <div 
            key={service.id} 
            className="service-card"
            onClick={() => onSelectService(service)}
          >
            <h3 className="card-name">{service.name}</h3>
            <p className="card-description">{service.description}</p>
            <button className="card-button">Selecionar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSelection;