// src/pages/LawyerSchedulePage/LawyerSchedulePage.jsx
// Este é o COMPONENTE DA PÁGINA ESPECÍFICA PARA CONFIGURAR A AGENDA

import React from 'react';
import './LawyerSchedulePage.css'; // O CSS desta página
import Navbar from '../../components/Navbar/Navbar';
// Importa o componente que contém o FORMULÁRIO de configuração da agenda
import LawyerScheduleConfig from '../../components/LawyerDashboard/LawyerScheduleConfig/LawyerScheduleConfig'; 

function LawyerSchedulePage({ onLogout }) { // O nome da função do componente é LawyerSchedulePage
  const lawyerName = localStorage.getItem('userName') || 'Advogado(a)';

  const handleSaveSchedule = (scheduleData) => {
    // Esta função será chamada pelo LawyerScheduleConfig ao salvar
    console.log('Agenda salva pelo advogado:', scheduleData);
    // Em um app real, aqui você enviaria os dados para o backend
  };

  return (
    <div className="lawyer-schedule-page-container">
      <Navbar />

      {/* REMOVA O H1 DE TESTE SE AINDA ESTIVER AQUI */}
      {/* <h1 style={{backgroundColor: 'red', color: 'yellow', padding: '20px', textAlign: 'center'}}>
        TESTE: Esta é a Página da Agenda!
      </h1> */}
      {/* FIM DO TESTE */}

      <main className="lawyer-schedule-main-content">
        <div className="lawyer-schedule-header">
          <h1>Minha Agenda - {lawyerName}</h1> {/* Título da página de agenda */}
          <button className="logout-button" onClick={onLogout}>Sair</button>
        </div>
        
        <div className="lawyer-schedule-section">
          {/* AQUI RENDERIZA O FORMULÁRIO DE CONFIGURAÇÃO DA AGENDA */}
          <LawyerScheduleConfig onSaveSchedule={handleSaveSchedule} />
          
          <button className="back-to-dashboard-button" onClick={() => window.location.href = '/dashboard-advogado'}>
            &larr; Voltar para o Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}

export default LawyerSchedulePage;