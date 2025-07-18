import React, { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import AgendamentoPage from './pages/AgendamentoPage/AgendamentoPage';
import AuthPage from './pages/AuthPage/AuthPage';
import ClientDashboardPage from './pages/ClientDashboardPage/ClientDashboardPage';
import MyAppointmentsPage from './pages/MyAppointmentsPage/MyAppointmentsPage';
import MyPaymentsPage from './pages/MyPaymentsPage/MyPaymentsPage';
import MyDocumentsPage from './pages/MyDocumentsPage/MyDocumentsPage';
import LawyerDashboardPage from './pages/LawyerDashboardPage/LawyerDashboardPage';
import LawyerSchedulePage from './pages/LawyerSchedulePage/LawyerSchedulePage';
import LawyerPricingPage from './pages/LawyerPricingPage/LawyerPricingPage';
import LawyerSpecialtiesPage from './pages/LawyerSpecialtiesPage/LawyerSpecialtiesPage';
import LawyerProfilePage from './pages/LawyerProfilePage/LawyerProfilePage';
import LawyerActivitiesPage from './pages/LawyerActivitiesPage/LawyerActivitiesPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import EventsPage from './pages/EventsPage/EventsPage';
import PartnersPage from './pages/PartnersPage/PartnersPage';
import AdvogadaFundadoraPage from './pages/AdvogadaFundadoraPage/AdvogadaFundadoraPage'; // NOVA IMPORTAÇÃO
import EspecialidadesPage from './pages/EspecialidadesPage/EspecialidadesPage'; // NOVA IMPORTAÇÃO

const routeConfig = {
  // ROTAS DO ADVOGADO
  '/dashboard-advogado': {
    component: LawyerDashboardPage,
    auth: true,
    role: 'lawyer',
  },
  '/dashboard-advogado/agenda': {
    component: LawyerSchedulePage,
    auth: true,
    role: 'lawyer',
  },
  '/dashboard-advogado/precos': {
    component: LawyerPricingPage,
    auth: true,
    role: 'lawyer',
  },
  '/dashboard-advogado/especialidades': {
    component: LawyerSpecialtiesPage,
    auth: true,
    role: 'lawyer',
  },
  '/dashboard-advogado/perfil': {
    component: LawyerProfilePage,
    auth: true,
    role: 'lawyer',
  },
  '/dashboard-advogado/atividades': {
    component: LawyerActivitiesPage,
    auth: true,
    role: 'lawyer',
  },
  // ROTAS DO CLIENTE
  '/dashboard-cliente': {
    component: ClientDashboardPage,
    auth: true,
    role: 'client',
  },
  '/minhas-consultas': {
    component: MyAppointmentsPage,
    auth: true,
    role: 'client',
  },
  '/meus-documentos': {
    component: MyDocumentsPage,
    auth: true,
    role: 'client',
  },
  '/meus-pagamentos': {
    component: MyPaymentsPage,
    auth: true,
    role: 'client',
  },
  // ROTAS DE AGENDAMENTO
  '/agendar': {
    component: AgendamentoPage,
    auth: false,
  },
  '/servicos': { // ESTE JÁ LEVA PARA O PRIMEIRO PASSO DO AGENDAMENTO (SELEÇÃO DE SERVIÇO)
    component: AgendamentoPage,
    auth: false,
  },
  // ROTAS DE CONTEÚDO PÚBLICO
  '/blog': {
    component: BlogPage,
    auth: false,
  },
  '/blog/1': { component: ArticlePage, auth: false },
  '/blog/2': { component: ArticlePage, auth: false },
  '/blog/3': { component: ArticlePage, auth: false },
  '/eventos': {
    component: EventsPage,
    auth: false,
  },
  '/parceiros': {
    component: PartnersPage,
    auth: false,
  },
  '/advogada': { // NOVA ROTA: ADVOGADA FUNDADORA
    component: AdvogadaFundadoraPage,
    auth: false,
  },
  '/especialidades': { // NOVA ROTA: ESPECIALIDADES
    component: EspecialidadesPage,
    auth: false,
  },
};

function AppRoutes({ user, onLoginSuccess, onLogout }) {
  const pathname = window.location.pathname;
  const loggedIn = localStorage.getItem('userLoggedIn') === 'true';
  const userType = localStorage.getItem('userType');

  if (pathname === '/login' || pathname === '/cadastro') {
    if (user) {
      const redirectPath = user.type === 'lawyer' ? '/dashboard-advogado' : '/dashboard-cliente';
      window.location.replace(redirectPath);
      return null;
    }
    return <AuthPage onAuthSuccess={onLoginSuccess} />;
  }

  const route = routeConfig[pathname];

  if (route) {
    if (route.auth) {
        if (!loggedIn || userType !== route.role) {
            window.location.replace('/login');
            return null;
        }
    }
    
    const Component = route.component;
    if (pathname.startsWith('/blog/') && Component === ArticlePage) { // Continua tratando /blog/:id
        return <ArticlePage onLogout={onLogout} />;
    }
    
    return <Component onLogout={onLogout} />;
  }

  return <HomePage />;
}

function App() {
  const [user, setUser] = useState(() => {
    const loggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const email = localStorage.getItem('userEmail');
    const name = localStorage.getItem('userName');
    const type = localStorage.getItem('userType');
    return loggedIn && email && name && type ? { email, name, type } : null;
  });

  const handleLogin = (userData) => {
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userEmail', userData.email);
    localStorage.setItem('userName', userData.name);
    localStorage.setItem('userType', userData.type);
    setUser(userData);

    const redirectPath = userData.type === 'lawyer' ? '/dashboard-advogado' : '/dashboard-cliente';
    window.location.replace(redirectPath);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    window.location.replace('/login');
  };

  return (
    <div className="App">
      <AppRoutes 
        user={user}
        onLoginSuccess={handleLogin}
        onLogout={handleLogout}
      />
    </div>
  );
}

export default App;