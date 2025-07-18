import React from 'react';
import './LawyerProfilePage.css';
import Navbar from '../../components/Navbar/Navbar';
import LawyerProfileEdit from '../../components/LawyerDashboard/LawyerProfileEdit/LawyerProfileEdit';

function LawyerProfilePage({ onLogout }) {
  const lawyerName = localStorage.getItem('userName') || 'Advogado(a)';

  const handleSaveProfile = (profileData) => {
    console.log('Perfil salvo pelo advogado:', profileData);
    alert('Perfil atualizado! Em um app real, você seria redirecionado.');
  };

  return (
    <div className="lawyer-profile-page-container">
      <Navbar />
      <main className="lawyer-profile-main-content">
        <div className="lawyer-profile-header">
          <h1>Editar Meu Perfil - {lawyerName}</h1>
          <button className="logout-button" onClick={onLogout}>Sair</button>
        </div>
        
        <div className="lawyer-profile-section">
          <LawyerProfileEdit onSaveProfile={handleSaveProfile} />
          <button className="back-to-dashboard-button" onClick={() => window.location.href = '/dashboard-advogado'}>
            &larr; Voltar para o Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}

export default LawyerProfilePage;