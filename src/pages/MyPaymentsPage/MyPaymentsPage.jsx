import React from 'react';
import './MyPaymentsPage.css'; 
import Navbar from '../../components/Navbar/Navbar';
import PaymentHistory from '../../components/ClientDashboard/PaymentHistory/PaymentHistory';

function MyPaymentsPage({ onLogout }) {
  const userName = localStorage.getItem('userName') || 'Cliente';

  // Dados de pagamento simulados (iguais aos do dashboard, mas para a página completa)
  const allPayments = [
    { id: 'pay1', description: 'Consulta - Direito Previdenciário', date: '2025-07-20', amount: 150.00, status: 'Pago', invoiceLink: '#invoice1' },
    { id: 'pay2', description: 'Consulta - Direito Trabalhista', date: '2025-07-26', amount: 180.00, status: 'Pendente', invoiceLink: null },
    { id: 'pay3', description: 'Consulta - Adoção de Crianças', date: '2025-07-08', amount: 160.00, status: 'Pago', invoiceLink: '#invoice3' },
    { id: 'pay4', description: 'Assessoria Jurídica Geral', date: '2025-06-15', amount: 200.00, status: 'Pago', invoiceLink: '#invoice4' },
    { id: 'pay5', description: 'Revisão de Contrato', date: '2025-05-20', amount: 120.00, status: 'Cancelado', invoiceLink: null }
  ];

  return (
    <div className="my-payments-page-container">
      <Navbar />
      <main className="my-payments-main-content">
        <div className="my-payments-header">
          <h1>Meu Histórico de Pagamentos</h1>
          <button className="logout-button" onClick={onLogout}>Sair</button>
        </div>
        
        <div className="my-payments-list-section">
          <h2>Todos os Seus Pagamentos</h2>
          <PaymentHistory payments={allPayments} showAll={true} /> {/* Passa todos os pagamentos */}
          <button className="back-to-dashboard-button" onClick={() => window.location.href = '/dashboard-cliente'}>
            &larr; Voltar para o Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}

export default MyPaymentsPage;