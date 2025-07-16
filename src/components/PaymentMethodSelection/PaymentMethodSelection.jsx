// src/components/PaymentMethodSelection/PaymentMethodSelection.jsx
import React, { useState } from 'react';
import './PaymentMethodSelection.css';
import PaymentLoading from '../PaymentLoading/PaymentLoading';

// Importe as logos localmente
import pixLogo from '../../assets/logos/pix-logo.png';
import mercadoPagoLogo from '../../assets/logos/mercado-pago-logo.png';
import stripeLogo from '../../assets/logos/stripe-logo.png';
import paypalLogo from '../../assets/logos/paypal-logo.png';

function PaymentMethodSelection({ appointmentFullDetails, onPaymentSuccess, onBack }) {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleProceedToPayment = () => {
    if (!selectedMethod) {
      alert('Por favor, selecione um método de pagamento.');
      return;
    }

    setIsLoading(true);

    console.log('Prosseguindo com o pagamento via:', selectedMethod);
    console.log('Detalhes do agendamento para pagamento:', appointmentFullDetails);

    setTimeout(() => {
      setIsLoading(false);
      onPaymentSuccess(selectedMethod);
    }, 3000);
  };

  return (
    <>
      {isLoading && <PaymentLoading paymentMethod={selectedMethod} />}

      <div className={`payment-selection-container ${isLoading ? 'hidden-content' : ''}`}>
        <h2 className="payment-title">Escolha o Método de Pagamento</h2>
        <p className="payment-subtitle">Valor total da consulta: <strong>R$ {appointmentFullDetails.lawyer.price.toFixed(2)}</strong></p>

        <div className="payment-methods-grid">
          <label className={`payment-card ${selectedMethod === 'pix' ? 'selected' : ''}`}>
            <input 
              type="radio" 
              name="paymentMethod" 
              value="pix" 
              checked={selectedMethod === 'pix'} 
              onChange={() => setSelectedMethod('pix')} 
              hidden
            />
            <div className="card-content">
              <h3>Pix</h3>
              <p>Pagamento instantâneo via QR Code ou copia e cola.</p>
              <img src={pixLogo} alt="Pix Logo" className="payment-logo" /> {/* USANDO A LOGO LOCAL */}
            </div>
          </label>

          <label className={`payment-card ${selectedMethod === 'mercadopago' ? 'selected' : ''}`}>
            <input 
              type="radio" 
              name="paymentMethod" 
              value="mercadopago" 
              checked={selectedMethod === 'mercadopago'} 
              onChange={() => setSelectedMethod('mercadopago')} 
              hidden
            />
            <div className="card-content">
              <h3>Mercado Pago</h3>
              <p>Pague com cartão de crédito, débito ou saldo da sua conta.</p>
              <img src={mercadoPagoLogo} alt="Mercado Pago Logo" className="payment-logo" /> {/* USANDO A LOGO LOCAL */}
            </div>
          </label>

          <label className={`payment-card ${selectedMethod === 'stripe' ? 'selected' : ''}`}>
            <input 
              type="radio" 
              name="paymentMethod" 
              value="stripe" 
              checked={selectedMethod === 'stripe'} 
              onChange={() => setSelectedMethod('stripe')} 
              hidden
            />
            <div className="card-content">
              <h3>Stripe</h3>
              <p>Pague com segurança usando diversos cartões de crédito.</p>
              <img src={stripeLogo} alt="Stripe Logo" className="payment-logo" /> {/* USANDO A LOGO LOCAL */}
            </div>
          </label>

          <label className={`payment-card ${selectedMethod === 'paypal' ? 'selected' : ''}`}>
            <input 
              type="radio" 
              name="paymentMethod" 
              value="paypal" 
              checked={selectedMethod === 'paypal'} 
              onChange={() => setSelectedMethod('paypal')} 
              hidden
            />
            <div className="card-content">
              <h3>PayPal</h3>
              <p>Pague de forma rápida e segura com sua conta PayPal.</p>
              <img src={paypalLogo} alt="PayPal Logo" className="payment-logo" /> {/* USANDO A LOGO LOCAL */}
            </div>
          </label>
        </div>

        <div className="payment-actions">
          <button 
            type="button" 
            className="back-button" 
            onClick={onBack} 
            disabled={isLoading}
          >
            &larr; Voltar
          </button>
          <button 
            type="button" 
            className="proceed-button" 
            onClick={handleProceedToPayment} 
            disabled={isLoading}
          >
            Prosseguir com o Pagamento
          </button>
        </div>
      </div>
    </>
  );
}

export default PaymentMethodSelection;