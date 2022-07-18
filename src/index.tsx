import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <App />
);

// REACT 17 renderiza assim:
// ReactDOM.render(

//   document.getElementById('root')
// );
