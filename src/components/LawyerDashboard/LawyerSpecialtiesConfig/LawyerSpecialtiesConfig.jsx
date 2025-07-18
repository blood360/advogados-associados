import React, { useState, useEffect } from 'react';
import './LawyerSpecialtiesConfig.css';

const allSpecialties = [
  'Direito Previdenciário',
  'Direito Trabalhista',
  'Direito Civil',
  'Direito de Família e Sucessões',
  'Direitos das Pessoas com TEA (Transtorno do Espectro Autista)',
  'Adoção de Crianças',
  'Defesa e Proteção de Animais',
  'Assessoria Jurídica Geral',
  'Direito Criminal',
  'Direito do Consumidor',
  'Direito Imobiliário',
  'Direito Empresarial',
  'Direito Tributário',
  'Direito Ambiental',
  'Direito Digital',
];

function LawyerSpecialtiesConfig({ onSaveSpecialties }) {
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

  useEffect(() => {
    const savedSpecialties = localStorage.getItem('lawyerSpecialties');
    if (savedSpecialties) {
      setSelectedSpecialties(JSON.parse(savedSpecialties));
    }
  }, []);

  const handleSpecialtyToggle = (specialty) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty) 
        ? prev.filter(s => s !== specialty) 
        : [...prev, specialty]
    );
  };

  const handleSave = () => {
    if (selectedSpecialties.length === 0) {
      alert('Por favor, selecione ao menos uma especialidade.');
      return;
    }
    
    localStorage.setItem('lawyerSpecialties', JSON.stringify(selectedSpecialties));
    onSaveSpecialties(selectedSpecialties);
    alert('Especialidades salvas com sucesso!');
  };

  return (
    <div className="specialties-config-container">
      <h2>Minhas Especialidades</h2>
      <p>Selecione as áreas do Direito em que você é especialista e deseja ser encontrado(a).</p>

      <div className="specialties-grid">
        {allSpecialties.map(specialty => (
          <button
            key={specialty}
            className={`specialty-button ${selectedSpecialties.includes(specialty) ? 'selected' : ''}`}
            onClick={() => handleSpecialtyToggle(specialty)}
          >
            {specialty}
          </button>
        ))}
      </div>

      <button className="save-specialties-button" onClick={handleSave}>Salvar Especialidades</button>
    </div>
  );
}

export default LawyerSpecialtiesConfig;