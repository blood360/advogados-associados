import React, { useState, useEffect } from 'react';
import './LawyerScheduleConfig.css';

const daysOfWeek = [
  { id: 'dom', name: 'Domingo' },
  { id: 'seg', name: 'Segunda-feira' },
  { id: 'ter', name: 'Terça-feira' },
  { id: 'qua', name: 'Quarta-feira' },
  { id: 'qui', name: 'Quinta-feira' },
  { id: 'sex', id: 'sexta', name: 'Sexta-feira' },
  { id: 'sab', name: 'Sábado' },
];

function LawyerScheduleConfig({ onSaveSchedule }) {
  const [selectedDays, setSelectedDays] = useState([]);
  const [availableTimes, setAvailableTimes] = useState(''); // Ex: "09:00-12:00,14:00-18:00"

  // Simular carregamento de agenda existente (para quando editar)
  useEffect(() => {
    const savedSchedule = localStorage.getItem('lawyerSchedule');
    if (savedSchedule) {
      const parsedSchedule = JSON.parse(savedSchedule);
      setSelectedDays(parsedSchedule.days || []);
      setAvailableTimes(parsedSchedule.times || '');
    }
  }, []);

  const handleDayToggle = (dayId) => {
    setSelectedDays(prev => 
      prev.includes(dayId) ? prev.filter(d => d !== dayId) : [...prev, dayId]
    );
  };

  const handleSave = () => {
    if (selectedDays.length === 0 || !availableTimes.trim()) {
      alert('Por favor, selecione os dias e preencha os horários disponíveis.');
      return;
    }

    const scheduleData = {
      days: selectedDays,
      times: availableTimes.trim(),
    };
    
    localStorage.setItem('lawyerSchedule', JSON.stringify(scheduleData)); // Simula salvar
    onSaveSchedule(scheduleData); // Notifica o componente pai
    alert('Agenda salva com sucesso!');
  };

  return (
    <div className="schedule-config-container">
      <h2>Configurar Minha Agenda</h2>
      <p>Defina os dias da semana e os intervalos de horários em que você estará disponível para consultas.</p>

      <div className="form-group">
        <h3>Dias da Semana Disponíveis:</h3>
        <div className="days-selection-grid">
          {daysOfWeek.map(day => (
            <button
              key={day.id}
              className={`day-button ${selectedDays.includes(day.id) ? 'selected' : ''}`}
              onClick={() => handleDayToggle(day.id)}
            >
              {day.name}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <h3>Horários Disponíveis (ex: 09:00-12:00, 14:00-18:00):</h3>
        <input
          type="text"
          placeholder="Ex: 09:00-12:00, 14:00-18:00"
          value={availableTimes}
          onChange={(e) => setAvailableTimes(e.target.value)}
          className="time-input"
        />
        <small>Separe os intervalos por vírgula. Ex: 09:00-12:00, 14:00-18:00</small>
      </div>

      <button className="save-button" onClick={handleSave}>Salvar Agenda</button>
    </div>
  );
}

export default LawyerScheduleConfig;