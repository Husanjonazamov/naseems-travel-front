import { Phone } from 'lucide-react'; // Chiroyli telefon ikonkasi
import { useState } from 'react';

export default function PhoneSection({ isScrolled }: { isScrolled: boolean }) {
  const [showHours, setShowHours] = useState(false);

  return (
    <div
      className={`relative hidden md:flex items-center gap-2 text-md font-bold transition-colors duration-300 cursor-pointer
        ${isScrolled ? 'text-blue-900 hover:text-blue-700' : 'text-zinc-300 hover:text-zinc-100'}
      `}
      onClick={() => setShowHours((prev) => !prev)}
    >
      <Phone size={18} strokeWidth={2} />
      <span>+998 94 001 47 41</span>

      {/* Optional: Qo‘shimcha ish vaqti ko‘rsatish */}
      {showHours && (
        <div className="absolute top-8 left-0 bg-white text-black text-xs px-3 py-2 rounded-md shadow-md z-10">
          Ish vaqti: 09:00 - 18:00
        </div>
      )}
    </div>
  );
}
