import React from 'react';
import './LawyerSpecialtiesPage.css';
import Navbar from '../../components/Navbar/Navbar';
import LawyerSpecialtiesConfig from '../../components/LawyerDashboard/LawyerSpecialtiesConfig/LawyerSpecialtiesConfig'; // Importe o componente

function LawyerSpecialtiesPage({ onLogout }) {
  const lawyerName = localStorage.getItem('userName') || 'Advogado(a)';

  const handleSaveSpecialties = (specialtiesData) => {
    console.log('Especialidades salvas pelo advogado:', specialtiesData);
  };

  return (
    <div className="lawyer-specialties-page-container">
      <Navbar />
      <main className="lawyer-specialties-main-content">
        <div className="lawyer-specialties-header">
          <h1>Minhas Especialidades - {lawyerName}</h1>
          <button className="logout-button" onClick={onLogout}>Sair</button>
        </div>
        
        <div className="lawyer-specialties-section">
          <LawyerSpecialtiesConfig onSaveSpecialties={handleSaveSpecialties} />
          <button className="back-to-dashboard-button" onClick={() => window.location.href = '/dashboard-advogado'}>
            &larr; Voltar para o Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}

export default LawyerSpecialtiesPage;