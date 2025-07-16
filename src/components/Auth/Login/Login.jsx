// src/components/Auth/Login/Login.jsx
import React, { useState } from 'react';
import './Login.css';

function Login({ onLoginSuccess, onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (email === 'teste@adv.com' && password === '123456') {
      onLoginSuccess({ email, name: 'Usuário Teste' });
    } else {
      setError('Email ou senha inválidos.');
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login na Plataforma</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="loginEmail">E-mail:</label>
          <input 
            type="email" 
            id="loginEmail" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Senha:</label>
          <input 
            type="password" 
            id="loginPassword" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="auth-button">Entrar</button>
      </form>
      <p className="auth-switch-text">
        Não tem uma conta? <span onClick={onSwitchToRegister}>Cadastre-se</span>
      </p>
    </div>
  );
}

export default Login;