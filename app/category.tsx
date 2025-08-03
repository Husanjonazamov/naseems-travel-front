'use client';

import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const categories = [
  { label: 'All Categories', value: '' },
  { label: 'Adventure', value: 'adventure' },
  { label: 'Cultural', value: 'cultural' },
  { label: 'Relaxation', value: 'relax' },
];

export default function CategorySelect() {
  const [selected, setSelected] = useState(categories[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full sm:w-60 text-sm">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full bg-white border border-zinc-300 rounded-md px-4 py-2 flex justify-between items-center shadow-sm hover:border-blue-500 focus:ring-2 focus:ring-blue-500"
      >
        <span className="text-zinc-700">{selected.label}</span>
        <FaChevronDown className="ml-2 text-gray-500 text-xs" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg border border-zinc-200 overflow-hidden">
          {categories.map((cat) => (
            <li
              key={cat.value}
              onClick={() => {
                setSelected(cat);
                setOpen(false);
              }}
              className={`px-4 py-2 text-zinc-700 cursor-pointer hover:bg-blue-100 ${
                selected.value === cat.value ? 'bg-blue-50 text-blue-600 font-semibold' : ''
              }`}
            >
              {cat.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
