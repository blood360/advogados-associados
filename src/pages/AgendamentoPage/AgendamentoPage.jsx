import React, { useState } from 'react';
import './AgendamentoPage.css';
import Navbar from '../../components/Navbar/Navbar';
import ServiceSelection from '../../components/ServiceSelection/ServiceSelection';
import LawyerSelection from '../../components/LawyerSelection/LawyerSelection';
import AppointmentDetailsForm from '../../components/AppointmentDetailsForm/AppointmentDetailsForm';
import PaymentMethodSelection from '../../components/PaymentMethodSelection/PaymentMethodSelection'; // Importe o novo componente

function AgendamentoPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null); // Contém serviço, advogado, data, hora
  const [appointmentDetails, setAppointmentDetails] = useState(null); // Contém tipo de atendimento, dados do cliente, etc.
  const [paymentConfirmed, setPaymentConfirmed] = useState(false); // Novo estado para confirmar o pagamento

  // Funções para lidar com a seleção de cada passo
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setSelectedAppointment(null);
    setAppointmentDetails(null);
    setPaymentConfirmed(false);
    console.log('Passo 1: Serviço selecionado:', service.name);
  };

  const handleLawyerAndTimeSelect = (lawyer, date, time) => {
    const appointmentSummary = {
      service: selectedService,
      lawyer: lawyer,
      date: date,
      time: time
    };
    setSelectedAppointment(appointmentSummary);
    setAppointmentDetails(null);
    setPaymentConfirmed(false);
    console.log('Passo 2: Agendamento de advogado/hora:', appointmentSummary);
  };

  const handleDetailsSubmit = (details) => {
    setAppointmentDetails(details);
    setPaymentConfirmed(false);
    console.log('Passo 3: Detalhes do agendamento preenchidos:', details);
  };

  const handlePaymentSuccess = (method) => {
    setPaymentConfirmed(true);
    console.log('Passo 4: Pagamento confirmado via:', method);
    // Aqui, em um app real, você enviaria todas as informações para o backend
    // e o backend cuidaria do envio de emails/whatsapp e criação de link de reunião.
  };

  // Funções para voltar nos passos
  const handleBackToServiceSelection = () => {
    setSelectedService(null);
    setSelectedAppointment(null);
    setAppointmentDetails(null);
    setPaymentConfirmed(false);
  };

  const handleBackToLawyerSelection = () => {
    setSelectedAppointment(null);
    setAppointmentDetails(null);
    setPaymentConfirmed(false);
  };

  const handleBackToDetailsForm = () => {
    setAppointmentDetails(null);
    setPaymentConfirmed(false);
  };

  // Combina todos os detalhes para passar para o componente de pagamento ou resumo final
  const fullAppointmentData = selectedAppointment && appointmentDetails ? {
    ...selectedAppointment,
    details: appointmentDetails
  } : null;

  return (
    <div className="agendamento-page-container">
      <Navbar />
      <main className="agendamento-main-content">
        <h1 className="agendamento-title">Agendar Sua Consulta Jurídica</h1>
        <p className="agendamento-description">
          Siga os passos abaixo para agendar sua consulta de forma rápida e segura.
        </p>
        
        {!selectedService ? ( // Passo 1: Seleção de Serviço
          <ServiceSelection onSelectService={handleServiceSelect} />
        ) : !selectedAppointment ? ( // Passo 2: Seleção de Advogado e Horário
          <>
            <LawyerSelection 
              selectedService={selectedService} 
              onSelectLawyerAndTime={handleLawyerAndTimeSelect} 
            />
            <button className="agendamento-back-button" onClick={handleBackToServiceSelection}>
              &larr; Voltar para Seleção de Serviço
            </button>
          </>
        ) : !appointmentDetails ? ( // Passo 3: Detalhes do Agendamento
          <>
            <AppointmentDetailsForm 
              appointmentSummary={selectedAppointment} 
              onDetailsSubmit={handleDetailsSubmit}
              onBack={handleBackToLawyerSelection}
            />
          </>
        ) : !paymentConfirmed ? ( // Passo 4: Seleção de Método de Pagamento
          <>
            <PaymentMethodSelection 
              appointmentFullDetails={fullAppointmentData}
              onPaymentSuccess={handlePaymentSuccess}
              onBack={handleBackToDetailsForm}
            />
          </>
        ) : ( // Passo Final: Confirmação de Sucesso (após pagamento)
          <div className="agendamento-success-message">
            <h2>🎉 Agendamento Confirmado com Sucesso!</h2>
            <p>Obrigado por agendar sua consulta.</p>
            <p>Um e-mail e uma mensagem de WhatsApp com os detalhes da reunião e o link de acesso foram enviados para você.</p>
            <p>Em caso de dúvidas, entre em contato.</p>
            <button className="agendamento-confirm-button" onClick={handleBackToServiceSelection}>
              Voltar para Agendar Nova Consulta
            </button>
            <a href="/" className="agendamento-confirm-button" style={{marginLeft: '20px', textDecoration: 'none'}}>
              Ir para a Página Inicial
            </a>
          </div>
        )}
      </main>
    </div>
  );
}

export default AgendamentoPage;