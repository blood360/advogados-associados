// src/App.jsx
import React, { useState, useEffect } from 'react'; // Importe useEffect
import HomePage from './pages/HomePage/HomePage';
import AgendamentoPage from './pages/AgendamentoPage/AgendamentoPage';
import AuthPage from './pages/AuthPage/AuthPage';
import ClientDashboardPage from './pages/ClientDashboardPage/ClientDashboardPage';

function AppRoutes({ isAuthenticated, onLoginSuccess, onLogout }) {
  const pathname = window.location.pathname;

  if (pathname === '/agendar' || pathname === '/servicos') {
    return <AgendamentoPage />;
  }
  if (pathname === '/login' || pathname === '/cadastro') {
    return <AuthPage onAuthSuccess={onLoginSuccess} />;
  }
  if (pathname === '/dashboard-cliente') {
    if (isAuthenticated) {
      return <ClientDashboardPage onLogout={onLogout} />;
    } else {
      // Se não autenticado, redireciona para login.
      // Usa window.location.replace para evitar que o usuário volte para o dashboard com o botão "voltar" do navegador.
      window.location.replace('/login'); 
      return null;
    }
  }
  return <HomePage />;
}

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    // Grava no localStorage PRIMEIRO
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userEmail', userData.email);
    localStorage.setItem('userName', userData.name);
    
    // Atualiza o estado do React
    setUser(userData); 

    // Redireciona APÓS o estado e localStorage estarem atualizados
    // Usar window.location.replace para um redirecionamento mais limpo
    window.location.replace('/dashboard-cliente'); 
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    window.location.replace('/login');
  };

  // Verifica se o usuário já está logado ao carregar a aplicação
  useEffect(() => {
    const loggedIn = localStorage.getItem('userLoggedIn');
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
    if (loggedIn === 'true' && userEmail && userName) {
      setUser({ email: userEmail, name: userName });
    }
  }, []); // Array de dependências vazio para rodar apenas uma vez na montagem

  return (
    <div className="App">
      <AppRoutes 
        isAuthenticated={!!user} 
        onLoginSuccess={handleLogin} 
        onLogout={handleLogout} 
      />
    </div>
  );
}

export default App;