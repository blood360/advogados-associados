import React, { useState } from 'react';
import './LawyerSelection.css';

// Dados de exemplo de advogados 
const lawyers = [
  { 
    id: 'adv1', 
    name: 'Dra. Ana Silva', 
    specialties: ['Direito Previdenciário', 'Direito Civil'], 
    price: 150.00,
    availability: {
      '2025-07-18': ['09:00', '10:00', '14:00'],
      '2025-07-19': ['11:00', '15:00'],
    }
  },
  { 
    id: 'adv2', 
    name: 'Dr. João Pereira', 
    specialties: ['Direito Trabalhista', 'Direitos das Pessoas com TEA'], 
    price: 180.00,
    availability: {
      '2025-07-18': ['10:00', '16:00'],
      '2025-07-21': ['09:30', '13:00'],
    }
  },
  { 
    id: 'adv3', 
    name: 'Dra. Clara Costa', 
    specialties: ['Direito Civil', 'Adoção de Crianças', 'Defesa e Proteção de Animais'], 
    price: 160.00,
    availability: {
      '2025-07-20': ['08:00', '11:00', '17:00'],
    }
  },
];

function LawyerSelection({ selectedService, onSelectLawyerAndTime }) {
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Filtrar advogados pela especialidade do serviço selecionado
  const filteredLawyers = lawyers.filter(lawyer => 
    lawyer.specialties.includes(selectedService.name)
  );

  const handleLawyerSelect = (lawyer) => {
    setSelectedLawyer(lawyer);
    setSelectedDate(''); // Resetar data/hora ao mudar de advogado
    setSelectedTime('');
  };

  const handleDateSelect = (e) => {
    setSelectedDate(e.target.value);
    setSelectedTime(''); // Resetar hora ao mudar de data
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    onSelectLawyerAndTime(selectedLawyer, selectedDate, time); // Passa para o componente pai
  };

  return (
    <div className="lawyer-selection-container">
      <h2 className="lawyer-selection-title">Escolha o Advogado e o Horário</h2>
      <p className="current-service-info">Serviço escolhido: <strong>{selectedService.name}</strong></p>

      {/* Lista de Advogados Filtrados */}
      <div className="lawyer-cards-grid">
        {filteredLawyers.length > 0 ? (
          filteredLawyers.map(lawyer => (
            <div 
              key={lawyer.id} 
              className={`lawyer-card ${selectedLawyer && selectedLawyer.id === lawyer.id ? 'selected' : ''}`}
              onClick={() => handleLawyerSelect(lawyer)}
            >
              <h3>{lawyer.name}</h3>
              <p>Especialidades: {lawyer.specialties.join(', ')}</p>
              <p>Preço da consulta: R$ {lawyer.price.toFixed(2)}</p>
              {selectedLawyer && selectedLawyer.id === lawyer.id && (
                <span className="selection-indicator">✓ Selecionado</span>
              )}
            </div>
          ))
        ) : (
          <p>Nenhum advogado disponível para esta especialidade no momento.</p>
        )}
      </div>

      {/* Seleção de Data e Horário (apenas se um advogado for selecionado) */}
      {selectedLawyer && (
        <div className="availability-section">
          <h3>Agenda de {selectedLawyer.name}</h3>
          
          {/* Seleção de Data */}
          <div className="date-picker">
            <h4>Selecione a Data:</h4>
            <select onChange={handleDateSelect} value={selectedDate}>
              <option value="">Escolha uma data</option>
              {Object.keys(selectedLawyer.availability).map(date => (
                <option key={date} value={date}>
                  {new Date(date + 'T00:00:00').toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: '2-digit' })}
                </option>
              ))}
            </select>
          </div>

          {/* Seleção de Horário (apenas se uma data for selecionada) */}
          {selectedDate && (
            <div className="time-slots">
              <h4>Horários disponíveis em {new Date(selectedDate + 'T00:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}:</h4>
              {selectedLawyer.availability[selectedDate].length > 0 ? (
                <div className="time-grid">
                  {selectedLawyer.availability[selectedDate].map(time => (
                    <button 
                      key={time} 
                      className={`time-button ${selectedTime === time ? 'selected' : ''}`}
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ) : (
                <p>Nenhum horário disponível nesta data.</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LawyerSelection;