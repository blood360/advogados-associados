import React, { useState } from 'react';
import './Register.css'; // Criaremos este CSS

function Register({ onRegisterSuccess, onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    // Simulação de cadastro (em um app real, seria uma chamada à API do backend)
    console.log('Novo usuário tentando cadastrar:', { name, email, password });
    
    // Sucesso simulado
    onRegisterSuccess({ name, email });
  };

  return (
    <div className="auth-form-container">
      <h2>Criar Nova Conta</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="registerName">Nome Completo:</label>
          <input 
            type="text" 
            id="registerName" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerEmail">E-mail:</label>
          <input 
            type="email" 
            id="registerEmail" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerPassword">Senha:</label>
          <input 
            type="password" 
            id="registerPassword" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirme a Senha:</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="auth-button">Cadastrar</button>
      </form>
      <p className="auth-switch-text">
        Já tem uma conta? <span onClick={onSwitchToLogin}>Faça Login</span>
      </p>
    </div>
  );
}

export default Register;