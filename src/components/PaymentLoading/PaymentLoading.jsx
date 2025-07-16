// src/components/PaymentLoading/PaymentLoading.jsx
import React from 'react';
import './PaymentLoading.css';

// Importe as logos localmente
import pixLogo from '../../assets/logos/pix-logo.png';
import mercadoPagoLogo from '../../assets/logos/mercado-pago-logo.png';
import stripeLogo from '../../assets/logos/stripe-logo.png';
import paypalLogo from '../../assets/logos/paypal-logo.png';

// Mapeamento dos logos dos métodos de pagamento para os caminhos locais
const paymentLogos = {
  pix: pixLogo,
  mercadopago: mercadoPagoLogo,
  stripe: stripeLogo,
  paypal: paypalLogo,
};

function PaymentLoading({ paymentMethod }) {
  const logoSrc = paymentLogos[paymentMethod] || 'https://via.placeholder.com/60x60?text=LOGO'; // Fallback

  return (
    <div className="payment-loading-overlay">
      <div className="loading-content">
        <div className="spinner-container">
          <img src={logoSrc} alt={`${paymentMethod} Logo`} className="payment-loading-logo" />
          <div className="loading-spinner"></div>
        </div>
        <p className="loading-message">Processando seu pagamento...</p>
        <p className="loading-sub-message">Por favor, aguarde, não feche esta página.</p>
      </div>
    </div>
  );
}

export default PaymentLoading;