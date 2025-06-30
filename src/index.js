import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ParticlesBackground from './components/ParticlesBackground';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParticlesBackground />
    <App />
  </React.StrictMode>
); 