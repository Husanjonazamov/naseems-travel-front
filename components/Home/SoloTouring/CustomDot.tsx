import React from 'react';

const CustomDot = ({ onClick, active }: { onClick?: () => void; active?: boolean }) => {
  return (
    <li className="inline-block mx-1 mt-10">
      <button
        onClick={onClick}
        className={`w-3 h-3 rounded-full transition-all duration-300
          ${active ? 'bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 scale-125' : 'bg-white/50'}
        `}
      />
    </li>
  );
};

export default CustomDot;
