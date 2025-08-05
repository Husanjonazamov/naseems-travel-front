'use client';

import { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: 'en', name: 'EN' },
  { code: 'ru', name: 'RU' },
  { code: 'uz', name: 'UZ' }
];

interface Props {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
  isScrolled?: boolean;
}

export default function LanguageSwitcher({ currentLang, onLanguageChange, isScrolled = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const containerClasses = `
    relative z-50 flex items-center gap-2 rounded-full px-3 py-1 
    ${isScrolled ? 'bg-white  border border-black/40 text-blue-900' : 'bg-white/10 text-white'} 
    backdrop-blur-md transition-all duration-300 text-sm
    border border-white/30 ${isScrolled ? 'border-gray-200' : 'sm:border-white/30 border-none'}
  `;

  const dropdownClasses = `
    absolute top-full mt-2 sm:left-0 sm:w-full sm:flex-row
    right-0 flex flex-col sm:flex sm:gap-4 gap-2
    sm:rounded-full rounded-md sm:px-4 px-3 sm:py-1 py-2 
    z-50 shadow-lg
    ${isScrolled ? 'bg-white text-blue-900' : 'sm:bg-white/10 sm:text-white sm:backdrop-blur-md bg-white text-blue-900'}
    ${isScrolled ? 'sm:border-gray-200 sm:border' : 'sm:border sm:border-white/30'}
  `;

  return (
    <div className="relative inline-block">
      <div className={containerClasses}>
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 focus:outline-none"
        >
          <FaGlobe className="text-base" />
          <span className="hidden sm:inline">Language:</span>
          <span className="font-bold ml-1">{currentLang.toUpperCase()}</span>
        </button>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className={dropdownClasses}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`text-sm transition-colors text-left ${
                currentLang === lang.code
                  ? 'font-bold'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
