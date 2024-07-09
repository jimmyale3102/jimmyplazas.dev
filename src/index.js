import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProviderComponent } from './ThemeContext';
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')).render(
  <ThemeProviderComponent>
    <Analytics />
    <App />
  </ThemeProviderComponent>
);