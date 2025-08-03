'use client';

import Link from 'next/link';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { FiPhone, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { BsCardChecklist } from 'react-icons/bs';
import { BiLocationPlus } from 'react-icons/bi';
import PhoneSection from './PhoneSelect';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-white">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="text-4xl text-purple-700">
              <span className="font-bold">NT</span>
            </div>
            <div className="leading-tight">
              <h1 className="text-xl font-semibold text-purple-700">Naseems Travel</h1>
              <p className="text-sm text-gray-500 -mt-1">solo adventures together</p>
            </div>
          </Link>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-6 relative">
            <div className='flex items-center gap-2 text-sm text-gray-800 transition-all duration-300'>
              <BiLocationPlus className='text-lg' />
              <span>Toshkent shahar, Chilonzor tumani 56-ko'cha</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-800 transition-all duration-300">
              <BsCardChecklist className="text-lg" />
              <span>Brochure Request</span>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 text-sm text-gray-800 relative h-[30px]">
                <>
                  <FiSearch
                    className="text-lg cursor-pointer"
                    onClick={() => setIsSearchOpen(true)}
                  />
                  <span className="cursor-pointer" onClick={() => setIsSearchOpen(true)}>
                    Search
                  </span>
                </>
            </div>

            <PhoneSection />
            <LanguageSwitcher currentLang="en" onLanguageChange={() => {}} />

            <button className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-md text-sm font-semibold">
              My Account
            </button> 

          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            {/* LanguageSwitcher mobilda ham ko‘rinadi */}
            <div className="md:hidden">
              <LanguageSwitcher currentLang="en" onLanguageChange={() => {}} />
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-800">
            <BsCardChecklist className="text-lg" />
            <span>Brochure Request</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-800">
            <FiSearch className="text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            />
          </div>

          {/* Mobile nav links */}
          <div className="flex flex-col gap-3 text-sm font-semibold text-gray-800">
            <Link href="/">DESTINATIONS</Link>
            <Link href="/">EXPERIENCEDESTINATIONSS</Link>
            <Link href="/">SOLO TRAVEL STORIES</Link>
            <Link href="/">OFFERS</Link>
            <Link href="/">WHY JUST YOU ?</Link>
            <Link href="/">COMMUNITY</Link>
          </div>

          <PhoneSection />

          <button className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md text-sm font-semibold">
            My Account
          </button>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="bg-white shadow-sm hidden md:block">
        <div className="max-w-[1280px] mx-auto px-4 py-3 flex justify-center gap-6 text-sm font-semibold text-gray-800">
          {[
            'DESTINATIONS',
            'EXPERIENCES',
            'SOLO TRAVEL STORIES',
            'OFFERS',
            'WHY JUST YOU ?',
            'COMMUNITY',
          ].map((label, idx) => (
            <Link
              key={idx}
              href="/"
              className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

    </header>
  );
}
