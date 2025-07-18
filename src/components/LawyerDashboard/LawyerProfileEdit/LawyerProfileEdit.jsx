import React, { useState, useEffect } from 'react';
import './LawyerProfileEdit.css';

function LawyerProfileEdit({ onSaveProfile }) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    oab: '',
    about: '',
    address: '',
    city: '',
    state: '',
  });

  useEffect(() => {
    // Simula o carregamento de dados existentes do perfil do localStorage
    const savedProfile = localStorage.getItem('lawyerProfile');
    const userName = localStorage.getItem('userName'); // O nome que veio do login

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      // Inicializa com o nome do login se não houver perfil salvo
      setProfile(prev => ({
        ...prev,
        name: userName || '',
        email: localStorage.getItem('userEmail') || '', // Pega o email do login
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Em um app real, aqui você enviaria os dados para o backend
    localStorage.setItem('lawyerProfile', JSON.stringify(profile)); // Simula salvar
    localStorage.setItem('userName', profile.name); // Atualiza o nome de exibição do dashboard
    onSaveProfile(profile);
    alert('Perfil atualizado com sucesso!');
  };

  return (
    <div className="profile-edit-container">
      <h2>Editar Meus Dados</h2>
      <p>Mantenha suas informações pessoais e profissionais sempre atualizadas.</p>

      <form onSubmit={handleSubmit} className="profile-form">
        <fieldset className="form-section">
          <legend>Dados Pessoais</legend>
          <div className="form-group">
            <label htmlFor="name">Nome Completo:</label>
            <input type="text" id="name" name="name" value={profile.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" value={profile.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone (com DDD):</label>
            <input type="tel" id="phone" name="phone" value={profile.phone} onChange={handleChange} placeholder="(XX) XXXXX-XXXX" />
          </div>
        </fieldset>

        <fieldset className="form-section">
          <legend>Dados Profissionais</legend>
          <div className="form-group">
            <label htmlFor="oab">Número OAB:</label>
            <input type="text" id="oab" name="oab" value={profile.oab} onChange={handleChange} placeholder="XXXXX/XX" />
          </div>
          <div className="form-group">
            <label htmlFor="about">Sobre Mim (Breve Descrição):</label>
            <textarea id="about" name="about" value={profile.about} onChange={handleChange} rows="5" placeholder="Fale um pouco sobre sua experiência e paixão pelo Direito..."></textarea>
          </div>
        </fieldset>

        <fieldset className="form-section">
          <legend>Endereço do Escritório (Opcional)</legend>
          <div className="form-group">
            <label htmlFor="address">Endereço:</label>
            <input type="text" id="address" name="address" value={profile.address} onChange={handleChange} placeholder="Rua, Número, Bairro" />
          </div>
          <div className="form-group">
            <label htmlFor="city">Cidade:</label>
            <input type="text" id="city" name="city" value={profile.city} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="state">Estado (UF):</label>
            <input type="text" id="state" name="state" value={profile.state} onChange={handleChange} maxLength="2" placeholder="RJ" />
          </div>
        </fieldset>

        <button type="submit" className="save-profile-button">Salvar Perfil</button>
      </form>
    </div>
  );
}

export default LawyerProfileEdit;