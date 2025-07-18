import React from 'react';
import './MyAppointmentsPage.css'; // Criaremos este CSS
import Navbar from '../../components/Navbar/Navbar';
// Reutilizamos o AppointmentList aqui para mostrar todas as consultas
import AppointmentList from '../../components/ClientDashboard/AppointmentList/AppointmentList'; 

function MyAppointmentsPage({ onLogout }) {
  const userName = localStorage.getItem('userName') || 'Cliente';

  // Aqui você buscaria as consultas reais de uma API. Por enquanto, usamos os mesmos dados mockados.
  // Em um app real, este dado viria do estado global de autenticação ou de uma nova chamada.
  const allAppointments = [
    {
      id: 'appt1',
      service: 'Direito Previdenciário',
      lawyer: 'Dra. Ana Silva',
      date: '2025-07-25',
      time: '10:00',
      type: 'Videoconferência',
      status: 'Agendada',
      price: 150.00
    },
    {
      id: 'appt2',
      service: 'Direito Trabalhista',
      lawyer: 'Dr. João Pereira',
      date: '2025-07-28',
      time: '14:30',
      type: 'Ligação de Áudio',
      status: 'Agendada',
      price: 180.00
    },
    {
      id: 'appt3',
      service: 'Adoção de Crianças',
      lawyer: 'Dra. Clara Costa',
      date: '2025-07-10', 
      time: '09:00',
      type: 'Presencial',
      status: 'Concluída',
      price: 160.00
    },
    {
        id: 'appt4',
        service: 'Direito Civil',
        lawyer: 'Dra. Ana Silva',
        date: '2025-06-05', 
        time: '11:00',
        type: 'Videoconferência',
        status: 'Concluída',
        price: 150.00
      },
      {
        id: 'appt5',
        service: 'Direitos dos Animais',
        lawyer: 'Dra. Clara Costa',
        date: '2025-07-01', 
        time: '16:00',
        type: 'Presencial',
        status: 'Cancelada',
        price: 160.00
      }
  ];

  return (
    <div className="my-appointments-page-container">
      <Navbar />
      <main className="my-appointments-main-content">
        <div className="my-appointments-header">
          <h1>Minhas Consultas</h1>
          <button className="logout-button" onClick={onLogout}>Sair</button>
        </div>
        
        <div className="my-appointments-list-section">
          <h2>Todas as Suas Consultas</h2>
          {/* Passa todas as consultas para o AppointmentList */}
          <AppointmentList appointments={allAppointments} showAll={true} /> 
          <button className="back-to-dashboard-button" onClick={() => window.location.href = '/dashboard-cliente'}>
            &larr; Voltar para o Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}

export default MyAppointmentsPage;