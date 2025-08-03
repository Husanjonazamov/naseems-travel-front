import { useState } from "react";
import { FiPhone } from "react-icons/fi";

export default function PhoneSection() {
  const [showHours, setShowHours] = useState(false);

  return (
    <div className="relative hidden md:flex items-center gap-2 text-sm text-gray-800">
      <FiPhone className="text-lg" />
      <div
        onClick={() => setShowHours((prev) => !prev)}
        className="leading-4 cursor-pointer"
      >
        <span>+998 94 001 47 41</span>
        <p className="text-xs ml-4 text-gray-500">Opening times ▾</p>

        {/* Dropdown ishlash vaqti */}
        {showHours && (
          <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md p-2 text-xs text-gray-700 z-50 w-52">
            <p>Dushanba - Juma: 9:00 - 18:00</p>
            <p>Shanba: 10:00 - 14:00</p>
            <p>Yakshanba: Yopiq</p>
          </div>
        )}
      </div>
    </div>
  );
}
