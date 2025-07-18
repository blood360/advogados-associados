import React from 'react';
import './PaymentHistory.css';

function PaymentHistory({ payments, showAll }) {
  const displayPayments = showAll ? payments : payments.slice(0, 3); // Mostra 3 últimos na dashboard, todos na página dedicada

  return (
    <div className="payment-history-container">
      {displayPayments.length > 0 ? (
        <ul className="payment-items">
          {displayPayments.map(payment => (
            <li key={payment.id} className="payment-item">
              <div className="payment-details">
                <span className="payment-description">{payment.description}</span>
                <span className="payment-date">{new Date(payment.date + 'T00:00:00').toLocaleDateString('pt-BR')}</span>
                <span className="payment-amount">R$ {payment.amount.toFixed(2)}</span>
              </div>
              <div className="payment-actions">
                {payment.invoiceLink && (
                  <a href={payment.invoiceLink} target="_blank" rel="noopener noreferrer" className="invoice-button">NF</a>
                )}
                <span className={`payment-status status-${payment.status.toLowerCase()}`}>{payment.status}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-payments-message">Nenhum pagamento registrado no momento.</p>
      )}
    </div>
  );
}

export default PaymentHistory;