import React from 'react';
import './DocumentList.css';

function DocumentList({ documents }) {
  return (
    <div className="document-list-container">
      {documents.length > 0 ? (
        <ul className="document-items">
          {documents.map(doc => (
            <li key={doc.id} className="document-item">
              <div className="document-info">
                <span className="document-name">{doc.name}</span>
                <span className="document-date">{new Date(doc.uploadDate).toLocaleDateString('pt-BR')}</span>
                <span className="document-status status-uploaded">{doc.status}</span>
              </div>
              <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer" className="view-button">Ver</a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-documents-message">Nenhum documento enviado ainda.</p>
      )}
    </div>
  );
}

export default DocumentList;