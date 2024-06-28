import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProviderComponent } from './components/ThemeContext';

createRoot(document.getElementById('root')).render(
  <ThemeProviderComponent>
    <App />
  </ThemeProviderComponent>
);