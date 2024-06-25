// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProviderComponent } from './components/ThemeContext';

ReactDOM.render(
  <ThemeProviderComponent>
    <App />
  </ThemeProviderComponent>,
  document.getElementById('root')
);
