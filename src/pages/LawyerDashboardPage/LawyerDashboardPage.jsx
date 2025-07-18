import React from 'react';
import './LawyerDashboardPage.css';
import Navbar from '../../components/Navbar/Navbar';

function LawyerDashboardPage({ onLogout }) {
  const lawyerName = localStorage.getItem('userName') || 'Advogado(a)';

  const navigateToScheduleConfig = () => {
    window.location.href = '/dashboard-advogado/agenda';
  };

  const navigateToPricingConfig = () => {
    window.location.href = '/dashboard-advogado/precos';
  };

  const navigateToSpecialtiesConfig = () => {
    window.location.href = '/dashboard-advogado/especialidades';
  };

  const navigateToProfileEdit = () => {
    window.location.href = '/dashboard-advogado/perfil';
  };

  const navigateToActivitiesPage = () => { // NOVA FUNÇÃO DE NAVEGAÇÃO
    window.location.href = '/dashboard-advogado/atividades';
  };

  return (
    <div className="lawyer-dashboard-container">
      <Navbar />
      <main className="dashboard-main-content">
        <div className="dashboard-header">
          <h1>Bem-vindo(a), {lawyerName}!</h1>
          <button className="logout-button" onClick={onLogout}>Sair</button>
        </div>
        
        <div className="dashboard-sections-grid">
          <div className="dashboard-section">
            <h2>Minha Agenda</h2>
            <p>Gerencie seus dias e horários disponíveis.</p>
            <button className="section-button" onClick={navigateToScheduleConfig}>Configurar Agenda</button>
          </div>

          <div className="dashboard-section">
            <h2>Meus Serviços e Preços</h2>
            <p>Defina os valores para suas consultas e serviços jurídicos.</p>
            <button className="section-button" onClick={navigateToPricingConfig}>Gerenciar Preços</button>
          </div>

          <div className="dashboard-section">
            <h2>Minhas Especialidades</h2>
            <p>Escolha as áreas do Direito em que você atua.</p>
            <button className="section-button" onClick={navigateToSpecialtiesConfig}>Definir Especialidades</button>
          </div>

          <div className="dashboard-section">
            <h2>Dados Pessoais e Profissionais</h2>
            <p>Mantenha suas informações atualizadas para os clientes.</p>
            <button className="section-button" onClick={navigateToProfileEdit}>Editar Perfil</button>
          </div>

          <div className="dashboard-section">
            <h2>Próximos Atendimentos</h2>
            <p>Visualize suas consultas agendadas e notificações.</p>
            <button className="section-button" onClick={navigateToActivitiesPage}>Ver Atendimentos</button> {/* ADICIONADO onClick */}
          </div>

          <div className="dashboard-section">
            <h2>Histórico de Clientes</h2>
            <p>Acesse a lista de clientes atendidos e consultas passadas.</p>
            <button className="section-button" onClick={navigateToActivitiesPage}>Ver Histórico</button> {/* ADICIONADO onClick */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default LawyerDashboardPage;