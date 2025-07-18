import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AccessibilityProvider } from './context/AccessibilityContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AccessibilityProvider>
      <App />
    </AccessibilityProvider>
  </React.StrictMode>,
);
