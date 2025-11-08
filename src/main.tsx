import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n/config';
import { CurrencyProvider } from '@/contexts/CurrencyContext';

createRoot(document.getElementById('root')!).render(
  <CurrencyProvider>
    <App />
  </CurrencyProvider>
);