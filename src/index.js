import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Info from './Info';
import Sources from './sources';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Info />
    <Sources />
  </React.StrictMode>
);

