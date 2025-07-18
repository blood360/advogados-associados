import React from 'react';
import './AppointmentList.css';

// Adicionado a prop 'showAll'
function AppointmentList({ appointments, showAll }) { 
  // Filtra as consultas apenas se showAll NÃO for true
  const displayAppointments = showAll 
    ? appointments 
    : appointments.filter(appt => appt.status === 'Agendada');

  return (
    <div className="appointment-list-container">
      {displayAppointments.length > 0 ? (
        <ul className="appointment-items">
          {displayAppointments.map(appt => (
            <li key={appt.id} className="appointment-item">
              <div className="appointment-details">
                <span className="appointment-service">{appt.service}</span>
                <span className="appointment-lawyer">com {appt.lawyer}</span>
                <span className="appointment-date-time">{new Date(appt.date + 'T00:00:00').toLocaleDateString('pt-BR')} às {appt.time}</span>
                <span className="appointment-type">{appt.type}</span>
              </div>
              {/* Adapta a classe de status baseada no status real */}
              <div className={`appointment-status status-${appt.status.toLowerCase().replace(' ', '-')}`}>
                {appt.status}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-appointments-message">
          {showAll ? 'Você não possui consultas registradas.' : 'Você não possui consultas agendadas no momento.'}
        </p>
      )}
    </div>
  );
}

export default AppointmentList;