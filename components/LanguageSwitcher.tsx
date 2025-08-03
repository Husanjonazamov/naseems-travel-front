
'use client';

import { useState, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'uz', name: "O'zbek", flag: '🇺🇿' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

interface LanguageSwitcherProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export default function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-1  bg-white border border-spacing-0 rounded-md cursor-pointer"
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <span className="hidden sm:block font-medium text-xs text-zinc-500">{currentLanguage.code.toUpperCase()}</span>
        <i className={`ri-arrow-down-s-line text-zinc-500 text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-1 min-w-[120px] z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-2 px-3 py-2 hover:bg-blue-50 transition-colors cursor-pointer ${
                currentLang === language.code ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              <span className="text-sm">{language.flag}</span>
              <span className="text-xs font-medium">{language.name}</span>
              {currentLang === language.code && (
                <i className="ri-check-line text-blue-600 ml-auto text-xs"></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
