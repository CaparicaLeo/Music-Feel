import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' para React 18+
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Cria a raiz para renderizar o app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
