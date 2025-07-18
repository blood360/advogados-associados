import React, { useState, useEffect } from 'react';
import './LawyerPricingConfig.css';

// Dados de exemplo de serviços que um advogado pode oferecer
const defaultServices = [
  { id: 'consulta', name: 'Consulta Jurídica (por hora)', defaultPrice: 150.00 },
  { id: 'revisao_aposentadoria', name: 'Revisão de Aposentadoria', defaultPrice: 500.00 },
  { id: 'assessoria_contratos', name: 'Assessoria em Contratos', defaultPrice: 300.00 },
  { id: 'parecer_juridico', name: 'Emissão de Parecer Jurídico', defaultPrice: 400.00 },
];

function LawyerPricingConfig({ onSavePrices }) {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const savedPrices = localStorage.getItem('lawyerPrices');
    if (savedPrices) {
      setPrices(JSON.parse(savedPrices));
    } else {
      // Inicializa com preços padrão se não houver nada salvo
      const initialPrices = {};
      defaultServices.forEach(service => {
        initialPrices[service.id] = service.defaultPrice;
      });
      setPrices(initialPrices);
    }
  }, []);

  const handleChange = (serviceId, newPrice) => {
    const parsedPrice = parseFloat(newPrice);
    setPrices(prev => ({
      ...prev,
      [serviceId]: isNaN(parsedPrice) ? '' : parsedPrice, // Guarda vazio se não for número
    }));
  };

  const handleSave = () => {
    const pricesToSave = {};
    let allValid = true;

    defaultServices.forEach(service => {
      const price = prices[service.id];
      if (price === '' || isNaN(price) || price < 0) {
        alert(`Por favor, insira um preço válido para "${service.name}".`);
        allValid = false;
        return;
      }
      pricesToSave[service.id] = price;
    });

    if (!allValid) return;

    localStorage.setItem('lawyerPrices', JSON.stringify(pricesToSave));
    onSavePrices(pricesToSave);
    alert('Preços salvos com sucesso!');
  };

  return (
    <div className="pricing-config-container">
      <h2>Meus Serviços e Preços</h2>
      <p>Defina os valores para seus serviços jurídicos. Esses preços serão visíveis para os clientes.</p>

      <div className="pricing-list">
        {defaultServices.map(service => (
          <div key={service.id} className="pricing-item">
            <label htmlFor={service.id}>{service.name}:</label>
            <div className="price-input-group">
              <span>R$</span>
              <input
                type="number"
                id={service.id}
                value={prices[service.id] === undefined ? '' : prices[service.id]}
                onChange={(e) => handleChange(service.id, e.target.value)}
                min="0"
                step="0.01"
                placeholder={service.defaultPrice.toFixed(2)}
              />
            </div>
          </div>
        ))}
      </div>

      <button className="save-prices-button" onClick={handleSave}>Salvar Preços</button>
    </div>
  );
}

export default LawyerPricingConfig;