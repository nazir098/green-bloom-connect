import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number; // Conversion rate from INR
}

interface CurrencyContextType {
  currency: Currency;
  currencies: Currency[];
  changeCurrency: (code: string) => void;
  convertPrice: (inrPrice: string) => string;
  formatPrice: (inrPrice: string) => string;
}

const currencies: Currency[] = [
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 1 },
  { code: 'USD', symbol: '$', name: 'US Dollar', rate: 0.012 },
  { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.011 },
  { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.0095 },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', rate: 0.044 },
  { code: 'RUB', symbol: '₽', name: 'Russian Ruble', rate: 1.1 },
];

// Map language codes to currency codes
const languageToCurrency: Record<string, string> = {
  'en': 'INR',
  'ru': 'RUB',
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currency, setCurrency] = useState<Currency>(() => {
    const savedCurrency = localStorage.getItem('selectedCurrency');
    return currencies.find(c => c.code === savedCurrency) || currencies[0];
  });

  // Auto-change currency when language changes
  useEffect(() => {
    const currentLang = i18n.language;
    const targetCurrencyCode = languageToCurrency[currentLang];
    
    if (targetCurrencyCode) {
      const targetCurrency = currencies.find(c => c.code === targetCurrencyCode);
      if (targetCurrency && targetCurrency.code !== currency.code) {
        setCurrency(targetCurrency);
      }
    }
  }, [i18n.language]);

  useEffect(() => {
    localStorage.setItem('selectedCurrency', currency.code);
  }, [currency]);

  const changeCurrency = (code: string) => {
    const newCurrency = currencies.find(c => c.code === code);
    if (newCurrency) {
      setCurrency(newCurrency);
    }
  };

  const convertPrice = (inrPrice: string): string => {
    // Remove currency symbols and commas, parse the number
    const numericPrice = parseFloat(inrPrice.replace(/[^0-9.]/g, ''));
    if (isNaN(numericPrice)) return '0';
    
    const converted = numericPrice * currency.rate;
    return converted.toFixed(2);
  };

  const formatPrice = (inrPrice: string): string => {
    const converted = convertPrice(inrPrice);
    return `${currency.symbol}${parseFloat(converted).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  const value = useMemo(
    () => ({
      currency,
      currencies,
      changeCurrency,
      convertPrice,
      formatPrice,
    }),
    [currency]
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
};
