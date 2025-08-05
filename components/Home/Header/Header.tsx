'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Phone, Search, Menu, X, ClipboardList } from 'lucide-react';
import LanguageSwitcher from '../../LanguageSwitcher';
import PhoneSection from '../../PhoneSelect';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('uz');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md text-blue-900' : 'bg-black/20 backdrop-blur-sm text-white'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <div className={`text-4xl font-extrabold ${isScrolled ? 'text-blue-900' : 'text-zinc-300'}`}>NT</div>
          <div className="leading-tight">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-zinc-300'}`}>Naseems Travel</h1>
            <p className={`text-[13px] -mt-1 ${isScrolled ? 'text-blue-900' : 'text-gray-300'}`}>
              solo adventures together
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 font-bold text-md">
            {['Home', 'Tour', 'Blog', 'Contact'].map((item, index) => (
              <Link
                key={index}
                href="/"
                className={`hover:text-gray-200 transition ${isScrolled ? 'text-blue-900' : 'text-zinc-300'}`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-zinc-300 transition">
            <Search size={20} />
            <span className="text-md font-bold">Search</span>
          </div>

          {/* Phone */}
          <PhoneSection  isScrolled={isScrolled} />

          {/* Language */}
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} isScrolled={isScrolled} />

        </div>

        {/* Mobile toggle */}
                {/* Mobil versiya uchun LanguageSwitcher va Menu */}
          <div className="md:hidden flex items-center gap-3">
            {/* Til tanlash tugmasi */}
            <LanguageSwitcher
              currentLang={currentLang}
              onLanguageChange={setCurrentLang}
              isScrolled={isScrolled}
            />

            {/* Menyu tugmasi */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-5 space-y-5 text-neutral-800 text-base">
          <div className="flex items-center gap-2">
            <Search size={20} className="text-blue-900" />
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>

          <div className="flex flex-col gap-4 font-semibold text-[16px]">
            {['Home', 'Tour', 'Blog', 'Contact'].map((item, idx) => (
              <Link key={idx} href="/" className="hover:text-blue-900 transition">
                {item}
              </Link>
            ))}
          </div>

          <PhoneSection isScrolled={isScrolled}/>
        </div>
      )}
    </header>
  );
}
