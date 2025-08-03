'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Search, Menu, X, ClipboardList, MapPin } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import PhoneSection from './PhoneSelect';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('uz');

  return (
    <header className="w-full fixed top-0 z-50 bg-white border-b border-gray-200 shadow-sm text-base">
      {/* Top Section */}
      <div className="max-w-[1280px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <div className="text-4xl font-extrabold text-purple-700">NT</div>
          <div className="leading-tight">
            <h1 className="text-2xl font-bold text-purple-700">Naseems Travel</h1>
            <p className="text-[13px] text-gray-500 -mt-1">solo adventures together</p>
          </div>
        </Link>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-neutral-700 text-[15px]">
            <MapPin size={20} className="text-purple-600" />
            <span>Toshkent, Chilonzor Navoiy 56-ko‘cha</span>
          </div>

          <div className="flex items-center gap-2 text-neutral-700 text-[15px]">
            <ClipboardList size={20} className="text-purple-600" />
            <span>Brochure Request</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer text-neutral-700 text-[15px]">
            <Search size={20} className="text-purple-600" />
            <span>Search</span>
          </div>

          <PhoneSection />

          <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} />

        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-5 space-y-5 text-neutral-800 text-base">
          <div className="flex items-center gap-2">
            <ClipboardList size={20} className="text-purple-600" />
            <span>Brochure Request</span>
          </div>

          <div className="flex items-center gap-2">
            <Search size={20} className="text-purple-600" />
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>

          <div className="flex flex-col gap-4 font-semibold text-[16px]">
            {['DESTINATIONS', 'EXPERIENCES', 'SOLO TRAVEL STORIES', 'OFFERS', 'WHY JUST YOU ?', 'COMMUNITY'].map((item, idx) => (
              <Link key={idx} href="/" className="hover:text-purple-700 transition">{item}</Link>
            ))}
          </div>

          <PhoneSection />

        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white border-t">
        <div className="max-w-[1280px] mx-auto px-4 py-4 flex justify-center gap-8 font-semibold text-[16px] text-neutral-800">
          {['DESTINATIONS', 'EXPERIENCES', 'SOLO TRAVEL STORIES', 'OFFERS', 'WHY JUST YOU ?', 'COMMUNITY'].map((item, idx) => (
            <Link
              key={idx}
              href="/"
              className="relative hover:text-purple-700 transition after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
