import React, { useState } from 'react';
import './DocumentUpload.css';

function DocumentUpload({ onUploadSuccess }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
      setMessage('');
    } else {
      setSelectedFile(null);
      setFileName('');
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setMessage('Por favor, selecione um arquivo para upload.');
      return;
    }

    setUploading(true);
    setMessage('Enviando documento...');

    // Simula o upload para um servidor (em um app real, faria uma requisição HTTP)
    setTimeout(() => {
      setUploading(false);
      setMessage(`"${fileName}" enviado com sucesso!`);
      // Em um app real, o servidor retornaria a URL do arquivo e o ID
      const newDoc = {
        id: Date.now().toString(), // ID único
        name: fileName,
        fileUrl: URL.createObjectURL(selectedFile), // Cria uma URL temporária para visualização
        uploadDate: new Date().toISOString().split('T')[0], // Data de hoje
        status: 'Enviado'
      };
      onUploadSuccess(newDoc); // Notifica o pai sobre o novo documento
      setSelectedFile(null);
      setFileName('');
    }, 2000);
  };

  return (
    <div className="document-upload-container">
      <h3>Enviar Novo Documento</h3>
      <div className="file-input-group">
        <input 
          type="file" 
          id="fileUpload" 
          className="file-input" 
          onChange={handleFileChange} 
          disabled={uploading}
        />
        <label htmlFor="fileUpload" className="file-input-label">
          {fileName ? fileName : 'Escolha o Arquivo'}
        </label>
        <button 
          onClick={handleUpload} 
          className="upload-button" 
          disabled={!selectedFile || uploading}
        >
          {uploading ? 'Enviando...' : 'Upload'}
        </button>
      </div>
      {message && <p className="upload-message">{message}</p>}
    </div>
  );
}

export default DocumentUpload;