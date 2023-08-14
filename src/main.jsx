import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContext from './context/context.jsx';
import App from './App.jsx';
import './sass/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <App />
  </AppContext>
);
