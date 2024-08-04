import { useState, useEffect } from 'react';

const useBrowserLanguage = (): string => {
  const [language, setLanguage] = useState<string>('es');

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(navigator.language);
    };

    handleLanguageChange();
    window.addEventListener('languagechange', handleLanguageChange);
    return () => {
      window.removeEventListener('languagechange', handleLanguageChange);
    };
  }, []);

  return language;
};

export default useBrowserLanguage;
