import React from 'react';
import './LawyerActivitiesPage.css'; // Criaremos este CSS
import Navbar from '../../components/Navbar/Navbar';
import LawyerAppointmentsHistory from '../../components/LawyerDashboard/LawyerAppointmentsHistory/LawyerAppointmentsHistory';

function LawyerActivitiesPage({ onLogout }) {
  const lawyerName = localStorage.getItem('userName') || 'Advogado(a)';

  return (
    <div className="lawyer-activities-page-container">
      <Navbar />
      <main className="lawyer-activities-main-content">
        <div className="lawyer-activities-header">
          <h1>Minhas Atividades - {lawyerName}</h1>
          <button className="logout-button" onClick={onLogout}>Sair</button>
        </div>
        
        <div className="lawyer-activities-section">
          <LawyerAppointmentsHistory viewMode="upcoming" /> {/* Padrão: Próximos Atendimentos */}
          <button className="back-to-dashboard-button" onClick={() => window.location.href = '/dashboard-advogado'}>
            &larr; Voltar para o Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}

export default LawyerActivitiesPage;