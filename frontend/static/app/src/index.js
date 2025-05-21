import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap globalmente
import './styles/index.css'; // (opcional) estilos globais seus
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
