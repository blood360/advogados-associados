import React from 'react';
import './LawyerPricingPage.css';
import Navbar from '../../components/Navbar/Navbar';
import LawyerPricingConfig from '../../components/LawyerDashboard/LawyerPricingConfig/LawyerPricingConfig';

function LawyerPricingPage({ onLogout }) {
    const lawyerName = localStorage.getItem('userName') || 'Advogado(a)';
    const handleSavePrices = (pricesdata) => {
        console.log('Preços salvos pelo advogado', pricesdata);
    };

    return (
        <div className='lawyer-pricing-page-container'>
            <Navbar />
            <main className='lawyer-pricing-main-content'>
                <div className='lawyer-pricing-header'>
                    <h1>Meus Serviços e Preços - {lawyerName}</h1>
                    <button className='logout-button' onClick={onLogout}>Sair</button>
                </div>

                <div className='lawyer-pricing-section'>
                    <LawyerPricingConfig onSavePrices={handleSavePrices} />
                    <button className='back-to-dashboard-button' onClick={() => window.location.href = './dashboard-advogado'}>&larr; Voltar para o Dashboard</button>
                </div>
            </main>
        </div>
    );
}

export default LawyerPricingPage;