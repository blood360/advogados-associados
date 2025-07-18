import React, { useState } from 'react';
import './MyDocumentsPage.css';
import Navbar from '../../components/Navbar/Navbar';
import DocumentUpload from '../../components/ClientDashboard/DocumentUpload/DocumentUpload';
import DocumentList from '../../components/ClientDashboard/DocumentList/DocumentList';

function MyDocumentsPage({ onLogout }) {
  const userName = localStorage.getItem('userName') || 'Cliente';

  // Dados de documentos simulados
  const [documents, setDocuments] = useState([
    { id: 'doc1', name: 'Contrato de Serviço.pdf', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', uploadDate: '2025-07-10', status: 'Enviado' },
    { id: 'doc2', name: 'Carteira de Trabalho.jpg', fileUrl: 'https://via.placeholder.com/300x200?text=Imagem', uploadDate: '2025-07-12', status: 'Enviado' }
  ]);

  const handleUploadSuccess = (newDoc) => {
    setDocuments(prevDocs => [...prevDocs, newDoc]);
  };

  return (
    <div className="my-documents-page-container">
      <Navbar />
      <main className="my-documents-main-content">
        <div className="my-documents-header">
          <h1>Meus Documentos</h1>
          <button className="logout-button" onClick={onLogout}>Sair</button>
        </div>
        
        <div className="my-documents-section">
          <h2>Seus Documentos</h2>
          <DocumentUpload onUploadSuccess={handleUploadSuccess} />
          <DocumentList documents={documents} />
          <button className="back-to-dashboard-button" onClick={() => window.location.href = '/dashboard-cliente'}>
            &larr; Voltar para o Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}

export default MyDocumentsPage;