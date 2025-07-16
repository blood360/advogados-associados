// src/pages/ClientDashboardPage/ClientDashboardPage.jsx
import React from 'react';
import './ClientDashboardPage.css'; // Criaremos este arquivo de estilos
import Navbar from '../../components/Navbar/Navbar';

function ClientDashboardPage({ onLogout }) {
  const userName = localStorage.getItem('userName') || 'Cliente'; // Pega o nome do Local Storage

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
            <p>Nenhuma consulta agendada no momento.</p>
            {/* Aqui virá a lista de consultas */}
            <button className="section-button">Ver Todas as Consultas</button>
          </div>

          <div className="dashboard-section">
            <h2>Meus Documentos</h2>
            <p>Envie e gerencie documentos relacionados aos seus casos.</p>
            <button className="section-button">Acessar Documentos</button>
          </div>

          <div className="dashboard-section">
            <h2>Histórico de Pagamentos</h2>
            <p>Visualize suas notas fiscais e histórico de pagamentos.</p>
            <button className="section-button">Ver Histórico</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ClientDashboardPage;