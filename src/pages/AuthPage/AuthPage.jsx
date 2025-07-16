// src/pages/AuthPage/AuthPage.jsx
import React, { useState } from 'react';
import './AuthPage.css';
import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import Navbar from '../../components/Navbar/Navbar';

function AuthPage({ onAuthSuccess }) { // Recebe onAuthSuccess do App.jsx
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page-container">
      <Navbar />
      <main className="auth-main-content">
        <div className="auth-card">
          {isLogin ? (
            <Login onLoginSuccess={onAuthSuccess} onSwitchToRegister={() => setIsLogin(false)} />
          ) : (
            <Register onRegisterSuccess={onAuthSuccess} onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </div>
      </main>
    </div>
  );
}

export default AuthPage;