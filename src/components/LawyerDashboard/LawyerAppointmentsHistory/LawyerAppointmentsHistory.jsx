import React, { useState, useEffect } from 'react';
import './LawyerAppointmentsHistory.css';

// Dados de atendimentos simulados para o advogado
const mockLawyerAppointments = [
  {
    id: 'lappt1',
    clientName: 'João Silva',
    clientEmail: 'joao.silva@example.com',
    clientPhone: '(21) 98765-4321',
    service: 'Direito Previdenciário',
    date: '2025-07-25',
    time: '10:00',
    type: 'Videoconferência',
    status: 'Agendada',
  },
  {
    id: 'lappt2',
    clientName: 'Maria Souza',
    clientEmail: 'maria.souza@example.com',
    clientPhone: '(21) 99876-5432',
    service: 'Direito Trabalhista',
    date: '2025-07-28',
    time: '14:30',
    type: 'Ligação de Áudio',
    status: 'Agendada',
  },
  {
    id: 'lappt3',
    clientName: 'Carlos Lima',
    clientEmail: 'carlos.lima@example.com',
    clientPhone: '(21) 97654-3210',
    service: 'Adoção de Crianças',
    date: '2025-07-10', // Passada
    time: '09:00',
    type: 'Presencial',
    status: 'Concluída',
  },
  {
    id: 'lappt4',
    clientName: 'Fernanda Dantas',
    clientEmail: 'fernanda.dantas@example.com',
    clientPhone: '(21) 96543-2109',
    service: 'Direito Civil',
    date: '2025-06-20', // Passada
    time: '11:00',
    type: 'Videoconferência',
    status: 'Concluída',
  },
  {
    id: 'lappt5',
    clientName: 'Pedro Costa',
    clientEmail: 'pedro.costa@example.com',
    clientPhone: '(21) 95432-1098',
    service: 'Direitos dos Animais',
    date: '2025-07-15', // Passada
    time: '16:00',
    type: 'Ligação de Áudio',
    status: 'Cancelada',
  },
];

function LawyerAppointmentsHistory({ viewMode = 'upcoming' }) { // 'upcoming' ou 'history'
  const [filter, setFilter] = useState(viewMode);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Em um app real, aqui você buscaria os dados da API
    setAppointments(mockLawyerAppointments);
  }, []);

  const filteredAppointments = appointments.filter(appt => {
    const apptDate = new Date(appt.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Zera hora para comparação de data

    if (filter === 'upcoming') {
      return appt.status === 'Agendada' && apptDate >= today;
    } else if (filter === 'history') {
      return appt.status !== 'Agendada' || apptDate < today;
    }
    return true; // Se não houver filtro, mostra todos (não é um caso de uso aqui)
  });

  return (
    <div className="lawyer-appointments-history-container">
      <div className="filter-buttons">
        <button 
          className={`filter-button ${filter === 'upcoming' ? 'active' : ''}`}
          onClick={() => setFilter('upcoming')}
        >
          Próximos Atendimentos
        </button>
        <button 
          className={`filter-button ${filter === 'history' ? 'active' : ''}`}
          onClick={() => setFilter('history')}
        >
          Histórico de Clientes
        </button>
      </div>

      {filteredAppointments.length > 0 ? (
        <ul className="appointment-list">
          {filteredAppointments.map(appt => (
            <li key={appt.id} className="appointment-item">
              <div className="appointment-details">
                <span className="client-name">{appt.clientName}</span>
                <span className="service-info">{appt.service} ({appt.type})</span>
                <span className="date-time">{new Date(appt.date + 'T00:00:00').toLocaleDateString('pt-BR')} às {appt.time}</span>
              </div>
              <div className={`appointment-status status-${appt.status.toLowerCase().replace(' ', '-')}`}>
                {appt.status}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-appointments-message">Nenhum atendimento encontrado para o filtro atual.</p>
      )}
    </div>
  );
}

export default LawyerAppointmentsHistory;