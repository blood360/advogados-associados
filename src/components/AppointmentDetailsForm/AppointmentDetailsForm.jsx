import React, { useState } from 'react';
import './AppointmentDetailsForm.css';

function AppointmentDetailsForm({ appointmentSummary, onDetailsSubmit, onBack }) {
  const [appointmentType, setAppointmentType] = useState('');
  const [requestInvoice, setRequestInvoice] = useState('');
  const [invoiceType, setInvoiceType] = useState(''); // 'pf' ou 'pj'
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientState, setClientState] = useState('');
  const [caseDescription, setCaseDescription] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(''); // Placeholder para método de pagamento

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!appointmentType || !clientName || !clientEmail || !clientPhone || !clientCity || !clientState) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const details = {
      appointmentType,
      requestInvoice: requestInvoice === 'yes',
      invoiceType: requestInvoice === 'yes' ? invoiceType : '',
      clientName,
      clientEmail,
      clientPhone,
      clientCity,
      clientState,
      caseDescription,
      paymentMethod, // Será usado no próximo passo
    };
    onDetailsSubmit(details);
  };

  return (
    <div className="appointment-details-form-container">
      <h2 className="details-form-title">Detalhes da Sua Consulta</h2>
      <p className="details-form-subtitle">Por favor, preencha as informações abaixo para prosseguir.</p>

      <div className="summary-box">
        <h3>Resumo do Agendamento:</h3>
        <p><strong>Serviço:</strong> {appointmentSummary.service.name}</p>
        <p><strong>Advogado:</strong> {appointmentSummary.lawyer.name}</p>
        <p><strong>Data:</strong> {new Date(appointmentSummary.date + 'T00:00:00').toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
        <p><strong>Horário:</strong> {appointmentSummary.time}</p>
        <p><strong>Valor:</strong> R$ {appointmentSummary.lawyer.price.toFixed(2)}</p>
      </div>

      <form onSubmit={handleSubmit} className="details-form">
        <fieldset className="form-section">
          <legend>Tipo de Atendimento</legend>
          <div className="radio-group">
            <label>
              <input 
                type="radio" 
                name="appointmentType" 
                value="videoconference" 
                checked={appointmentType === 'videoconference'} 
                onChange={() => setAppointmentType('videoconference')} 
                required 
              />
              Videoconferência (Online)
            </label>
            <label>
              <input 
                type="radio" 
                name="appointmentType" 
                value="phonecall" 
                checked={appointmentType === 'phonecall'} 
                onChange={() => setAppointmentType('phonecall')} 
                required 
              />
              Ligação de Áudio
            </label>
            <label>
              <input 
                type="radio" 
                name="appointmentType" 
                value="presential" 
                checked={appointmentType === 'presential'} 
                onChange={() => setAppointmentType('presential')} 
                required 
              />
              Presencial (no escritório)
            </label>
          </div>
        </fieldset>

        <fieldset className="form-section">
          <legend>Solicitar Nota Fiscal?</legend>
          <div className="radio-group">
            <label>
              <input 
                type="radio" 
                name="requestInvoice" 
                value="yes" 
                checked={requestInvoice === 'yes'} 
                onChange={() => setRequestInvoice('yes')} 
              />
              Sim
            </label>
            <label>
              <input 
                type="radio" 
                name="requestInvoice" 
                value="no" 
                checked={requestInvoice === 'no'} 
                onChange={() => { setRequestInvoice('no'); setInvoiceType(''); }} 
              />
              Não
            </label>
          </div>
          {requestInvoice === 'yes' && (
            <div className="radio-group invoice-type-group">
              <label>
                <input 
                  type="radio" 
                  name="invoiceType" 
                  value="pf" 
                  checked={invoiceType === 'pf'} 
                  onChange={() => setInvoiceType('pf')} 
                  required={requestInvoice === 'yes'}
                />
                Pessoa Física
              </label>
              <label>
                <input 
                  type="radio" 
                  name="invoiceType" 
                  value="pj" 
                  checked={invoiceType === 'pj'} 
                  onChange={() => setInvoiceType('pj')} 
                  required={requestInvoice === 'yes'}
                />
                Pessoa Jurídica
              </label>
            </div>
          )}
        </fieldset>

        <fieldset className="form-section">
          <legend>Seus Dados</legend>
          <div className="form-group">
            <label htmlFor="clientName">Nome Completo:</label>
            <input 
              type="text" 
              id="clientName" 
              value={clientName} 
              onChange={(e) => setClientName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientEmail">E-mail:</label>
            <input 
              type="email" 
              id="clientEmail" 
              value={clientEmail} 
              onChange={(e) => setClientEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientPhone">Telefone (com DDD):</label>
            <input 
              type="tel" 
              id="clientPhone" 
              value={clientPhone} 
              onChange={(e) => setClientPhone(e.target.value)} 
              placeholder="(XX) XXXXX-XXXX"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientCity">Cidade:</label>
            <input 
              type="text" 
              id="clientCity" 
              value={clientCity} 
              onChange={(e) => setClientCity(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientState">Estado (UF):</label>
            <input 
              type="text" 
              id="clientState" 
              value={clientState} 
              onChange={(e) => setClientState(e.target.value)} 
              maxLength="2"
              placeholder="RJ"
              required 
            />
          </div>
        </fieldset>

        <fieldset className="form-section">
          <legend>Descreva Brevemente o Seu Caso (Opcional)</legend>
          <div className="form-group">
            <textarea 
              id="caseDescription" 
              value={caseDescription} 
              onChange={(e) => setCaseDescription(e.target.value)} 
              rows="5" 
              placeholder="Ex: Preciso de ajuda para revisar minha aposentadoria por tempo de contribuição..."
            ></textarea>
          </div>
        </fieldset>

        <fieldset className="form-section">
          <legend>Método de Pagamento (Próximo Passo)</legend>
          <p className="payment-placeholder">A seleção do método de pagamento (Pix, Cartão, etc.) será feita na próxima etapa, após a confirmação dos detalhes.</p>
          {/* Este campo será desenvolvido na próxima etapa */}
          {/* <div className="radio-group">
            <label>
              <input type="radio" name="paymentMethod" value="pix" checked={paymentMethod === 'pix'} onChange={() => setPaymentMethod('pix')} />
              Pix
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="credit_card" checked={paymentMethod === 'credit_card'} onChange={() => setPaymentMethod('credit_card')} />
              Cartão de Crédito
            </label>
          </div> */}
        </fieldset>

        <div className="form-actions">
          <button type="button" className="back-button" onClick={onBack}>
            &larr; Voltar
          </button>
          <button type="submit" className="submit-button">
            Confirmar Detalhes e Ir para Pagamento &rarr;
          </button>
        </div>
      </form>
    </div>
  );
}

export default AppointmentDetailsForm;