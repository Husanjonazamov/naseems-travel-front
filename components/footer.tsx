'use client';

import { FaFacebook, FaTelegram, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Bo'limlar */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Bo‘limlar</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/tours" className="hover:underline">Tours</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Ijtimoiy Tarmoqlar */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Ijtimoiy Tarmoqlar</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            <a href="https://t.me" target="_blank"><FaTelegram /></a>
            <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
          </div>
        </div>

        {/* Bog‘lanish */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Bog‘lanish</h3>
          <ul className="text-sm space-y-2">
            <li><span className="font-medium">Telefon:</span> +998 90 123 45 67</li>
            <li><span className="font-medium">Email:</span> info@sayohat.uz</li>
            <li><span className="font-medium">Manzil:</span> Toshkent, O‘zbekiston</li>
          </ul>
        </div>

        {/* Xabar yuborish */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Xabar yuborish</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Telefon raqamingiz"
              className="px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
            <textarea
              placeholder="Xabaringiz"
              className="px-3 py-2 rounded bg-gray-800 text-white resize-none h-24 focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>

      {/* Pastki kichik yozuv */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2025 Sayohat. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
