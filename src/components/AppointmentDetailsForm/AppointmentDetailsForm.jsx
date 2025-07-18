import React, { useReducer } from 'react';
import './AppointmentDetailsForm.css';

function AppointmentDetailsForm({ appointmentSummary, onDetailsSubmit, onBack }) {
  const initialState = {
    appointmentType: '',
    requestInvoice: '',
    invoiceType: '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    clientCity: '',
    clientState: '',
    caseDescription: '',
    paymentMethod: '',
  };

  function reducer(state, action) {
    return { ...state, [action.name]: action.value };
  }

  const [form, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ['appointmentType', 'clientName', 'clientEmail', 'clientPhone', 'clientCity', 'clientState'];
    const emptyField = requiredFields.find((field) => !form[field]);

    if (emptyField) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const details = {
      ...form,
      requestInvoice: form.requestInvoice === 'yes',
      invoiceType: form.requestInvoice === 'yes' ? form.invoiceType : '',
    };

    onDetailsSubmit(details);
  };

  const formatDate = (dateString) => {
    return new Date(dateString + 'T00:00:00').toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="appointment-details-form-container">
      <h2 className="details-form-title">Detalhes da Sua Consulta</h2>
      <p className="details-form-subtitle">Por favor, preencha as informações abaixo para prosseguir.</p>

      <div className="summary-box">
        <h3>Resumo do Agendamento:</h3>
        <p><strong>Serviço:</strong> {appointmentSummary.service.name}</p>
        <p><strong>Advogado:</strong> {appointmentSummary.lawyer.name}</p>
        <p><strong>Data:</strong> {formatDate(appointmentSummary.date)}</p>
        <p><strong>Horário:</strong> {appointmentSummary.time}</p>
        <p><strong>Valor:</strong> R$ {appointmentSummary.lawyer.price.toFixed(2)}</p>
      </div>

      <form onSubmit={handleSubmit} className="details-form">
        {/* Tipo de Atendimento */}
        <fieldset className="form-section">
          <legend>Tipo de Atendimento</legend>
          <RadioGroup
            name="appointmentType"
            options={[
              { value: 'videoconference', label: 'Videoconferência (Online)' },
              { value: 'phonecall', label: 'Ligação de Áudio' },
              { value: 'presential', label: 'Presencial (no escritório)' },
            ]}
            selected={form.appointmentType}
            onChange={handleChange}
            required
          />
        </fieldset>

        {/* Nota Fiscal */}
        <fieldset className="form-section">
          <legend>Solicitar Nota Fiscal?</legend>
          <RadioGroup
            name="requestInvoice"
            options={[
              { value: 'yes', label: 'Sim' },
              { value: 'no', label: 'Não' },
            ]}
            selected={form.requestInvoice}
            onChange={(e) => {
              handleChange(e);
              if (e.target.value === 'no') {
                dispatch({ name: 'invoiceType', value: '' });
              }
            }}
          />

          {form.requestInvoice === 'yes' && (
            <div className="radio-group invoice-type-group">
              <RadioGroup
                name="invoiceType"
                options={[
                  { value: 'pf', label: 'Pessoa Física' },
                  { value: 'pj', label: 'Pessoa Jurídica' },
                ]}
                selected={form.invoiceType}
                onChange={handleChange}
                required
              />
            </div>
          )}
        </fieldset>

        {/* Dados do cliente */}
        <fieldset className="form-section">
          <legend>Seus Dados</legend>
          <InputField label="Nome Completo:" id="clientName" value={form.clientName} onChange={handleChange} required />
          <InputField type="email" label="E-mail:" id="clientEmail" value={form.clientEmail} onChange={handleChange} required />
          <InputField type="tel" label="Telefone (com DDD):" id="clientPhone" value={form.clientPhone} onChange={handleChange} required placeholder="(XX) XXXXX-XXXX" />
          <InputField label="Cidade:" id="clientCity" value={form.clientCity} onChange={handleChange} required />
          <InputField label="Estado (UF):" id="clientState" value={form.clientState} onChange={handleChange} required maxLength={2} placeholder="RJ" />
        </fieldset>

        {/* Descrição do caso */}
        <fieldset className="form-section">
          <legend>Descreva Brevemente o Seu Caso (Opcional)</legend>
          <div className="form-group">
            <textarea
              id="caseDescription"
              name="caseDescription"
              value={form.caseDescription}
              onChange={handleChange}
              rows="5"
              placeholder="Ex: Preciso de ajuda para revisar minha aposentadoria por tempo de contribuição..."
            ></textarea>
          </div>
        </fieldset>

        {/* Pagamento */}
        <fieldset className="form-section">
          <legend>Método de Pagamento (Próximo Passo)</legend>
          <p className="payment-placeholder">A seleção do método de pagamento (Pix, Cartão, etc.) será feita na próxima etapa.</p>
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

// Componentes auxiliares
function InputField({ label, id, type = 'text', value, onChange, required = false, ...rest }) {
  return (
    <div className="form-group">
      {/* ADICIONE ESTE ESTILO INLINE AGORA */}
      <label htmlFor={id} >{label}</label> 
      <input id={id} name={id} type={type} value={value} onChange={onChange} required={required} {...rest} />
    </div>
  );
}

function RadioGroup({ name, options, selected, onChange, required = false }) {
  return (
    <div className="radio-group">
      {options.map((opt) => (
        <label key={opt.value}>
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={selected === opt.value}
            onChange={onChange}
            required={required}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}

export default AppointmentDetailsForm;