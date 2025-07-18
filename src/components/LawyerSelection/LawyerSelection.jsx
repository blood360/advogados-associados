import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker'; // Importa DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Estilos padrão do DatePicker
import { ptBR } from 'date-fns/locale'; // Localização para português
import './LawyerSelection.css';

registerLocale('ptBR', ptBR); // Registra o locale

// Dados de exemplo de advogados (igual ao anterior)
const lawyers = [
  { 
    id: 'adv1', 
    name: 'Dra. Ana Silva', 
    specialties: ['Direito Previdenciário', 'Direito Civil'], 
    price: 150.00,
    availability: {
      '2025-07-20': ['09:00', '10:00', '14:00'], // Hoje é dia 18, adicionei data futura
      '2025-07-21': ['11:00', '15:00'],
      '2025-07-22': ['09:00', '10:00', '14:00'],
      '2025-07-23': ['11:00', '15:00'],
      '2025-07-24': ['09:00', '10:00', '14:00'],
      '2025-07-25': ['11:00', '15:00'],
      '2025-07-26': ['09:00', '10:00', '14:00'],
      '2025-07-27': ['11:00', '15:00'],
      '2025-07-28': ['09:00', '10:00', '14:00'],
      '2025-07-29': ['11:00', '15:00'],
      '2025-07-30': ['09:00', '10:00', '14:00'],
      '2025-07-31': ['11:00', '15:00'],
    }
  },
  { 
    id: 'adv2', 
    name: 'Dr. João Pereira', 
    specialties: ['Direito Trabalhista', 'Direitos das Pessoas com TEA'], 
    price: 180.00,
    availability: {
      '2025-07-20': ['10:00', '16:00'],
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
  const [selectedDate, setSelectedDate] = useState(null); // Agora um objeto Date
  const [selectedTime, setSelectedTime] = useState('');

  const filteredLawyers = lawyers.filter(lawyer => 
    lawyer.specialties.includes(selectedService.name)
  );

  // Datas disponíveis para o DatePicker
  const getAvailableDates = (lawyer) => {
    if (!lawyer || !lawyer.availability) return [];
    const dates = Object.keys(lawyer.availability).map(dateStr => new Date(dateStr + 'T00:00:00'));
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Zera hora para comparação de data

    // Filtra apenas datas futuras ou de hoje
    return dates.filter(date => date >= today);
  };

  const handleLawyerSelect = (lawyer) => {
    setSelectedLawyer(lawyer);
    setSelectedDate(null); // Resetar data/hora ao mudar de advogado
    setSelectedTime('');
  };

  const handleDateSelect = (date) => { // Recebe um objeto Date
    setSelectedDate(date);
    setSelectedTime(''); // Resetar hora ao mudar de data
  };

  const handleTimeSelect = (time) => {
    // Formatar a data para string "YYYY-MM-DD" antes de passar
    const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : '';
    onSelectLawyerAndTime(selectedLawyer, formattedDate, time); // Passa para o componente pai
    setSelectedTime(time); // Mantém o estado local para highlight
  };

  return (
    <div className="lawyer-selection-container">
      <h2 className="lawyer-selection-title">Escolha o Advogado e o Horário</h2>
      <p className="current-service-info">Serviço escolhido: <strong>{selectedService.name}</strong></p>

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
          <p className="no-lawyer-message">Nenhum advogado disponível para esta especialidade no momento.</p>
        )}
      </div>

      {selectedLawyer && (
        <div className="availability-section">
          <h3>Agenda de {selectedLawyer.name}</h3>
          
          <div className="date-picker-container">
            <h4>Selecione a Data:</h4>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateSelect}
              locale="ptBR"
              inline // Mostra o calendário diretamente
              highlightDates={getAvailableDates(selectedLawyer)} // Destaca dias com disponibilidade
              minDate={new Date()} // Permite selecionar a partir de hoje
              // Somente permite selecionar dias que o advogado tem disponibilidade
              includeDates={getAvailableDates(selectedLawyer)} 
            />
          </div>

          {selectedDate && (
            <div className="time-slots">
              <h4>Horários disponíveis em {selectedDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}:</h4>
              {selectedLawyer.availability[selectedDate.toISOString().split('T')[0]] && 
               selectedLawyer.availability[selectedDate.toISOString().split('T')[0]].length > 0 ? (
                <div className="time-grid">
                  {selectedLawyer.availability[selectedDate.toISOString().split('T')[0]].map(time => (
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