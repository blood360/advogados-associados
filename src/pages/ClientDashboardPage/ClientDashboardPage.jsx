import React, { useState } from 'react';
import './ClientDashboardPage.css';
import Navbar from '../../components/Navbar/Navbar';
import AppointmentList from '../../components/ClientDashboard/AppointmentList/AppointmentList';
import PaymentHistory from '../../components/ClientDashboard/PaymentHistory/PaymentHistory';

function ClientDashboardPage({ onLogout }) {
  const userName = localStorage.getItem('userName') || 'Cliente';

  const [appointments, setAppointments] = useState([
    { id: 'appt1', service: 'Direito Previdenciário', lawyer: 'Dra. Ana Silva', date: '2025-07-25', time: '10:00', type: 'Videoconferência', status: 'Agendada', price: 150.00 },
    { id: 'appt2', service: 'Direito Trabalhista', lawyer: 'Dr. João Pereira', date: '2025-07-28', time: '14:30', type: 'Ligação de Áudio', status: 'Agendada', price: 180.00 },
    { id: 'appt3', service: 'Adoção de Crianças', lawyer: 'Dra. Clara Costa', date: '2025-07-10', time: '09:00', type: 'Presencial', status: 'Concluída', price: 160.00 }
  ]);

  const [payments, setPayments] = useState([
    { id: 'pay1', description: 'Consulta - Direito Previdenciário', date: '2025-07-20', amount: 150.00, status: 'Pago', invoiceLink: '#invoice1' },
    { id: 'pay2', description: 'Consulta - Direito Trabalhista', date: '2025-07-26', amount: 180.00, status: 'Pendente', invoiceLink: null },
    { id: 'pay3', description: 'Consulta - Adoção de Crianças', date: '2025-07-08', amount: 160.00, status: 'Pago', invoiceLink: '#invoice3' }
  ]);

  const navigateToAllAppointments = () => {
    window.location.href = '/minhas-consultas';
  };

  const navigateToMyPayments = () => {
    window.location.href = '/meus-pagamentos';
  };

  const navigateToMyDocuments = () => { // NOVA FUNÇÃO DE NAVEGAÇÃO
    window.location.href = '/meus-documentos';
  };

  return (
    <div className="client-dashboard-container">
      <Navbar />
      <main className="dashboard-main-content">
        <div className="dashboard-header">
          <h1>Bem-vindo, {userName}!</h1>
          <button className="logout-button" onClick={onLogout}>Sair</button>
        </div>
        
        <div className="dashboard-sections-grid">
          <div className="dashboard-section">
            <h2>Minhas Consultas Agendadas</h2>
            <AppointmentList appointments={appointments} />
            <button className="section-button" onClick={navigateToAllAppointments}>Ver Todas as Consultas</button>
          </div>

          <div className="dashboard-section">
            <h2>Meus Documentos</h2>
            <p>Envie e gerencie documentos relacionados aos seus casos.</p>
            {/* O onClick agora chama a nova função */}
            <button className="section-button" onClick={navigateToMyDocuments}>Acessar Documentos</button>
          </div>

          <div className="dashboard-section">
            <h2>Histórico de Pagamentos</h2>
            <PaymentHistory payments={payments} showAll={false} />
            <button className="section-button" onClick={navigateToMyPayments}>Ver Histórico Completo</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ClientDashboardPage;