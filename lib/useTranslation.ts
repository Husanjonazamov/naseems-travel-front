'use client';

import { useState, useEffect } from 'react';
import { translations, type Translations } from './translations';

export function useTranslation(initialLang: string = 'en') {
  const [currentLang, setCurrentLang] = useState(initialLang);
  const [t, setT] = useState<Translations>(translations[initialLang] || translations.en);

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && savedLang !== currentLang) {
      setCurrentLang(savedLang);
      setT(translations[savedLang] || translations.en);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    if (translations[lang]) {
      setCurrentLang(lang);
      setT(translations[lang]);
      localStorage.setItem('language', lang);
    }
  };

  return {
    t,
    currentLang,
    changeLanguage
  };
}