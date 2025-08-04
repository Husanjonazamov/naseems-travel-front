import React from 'react';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';

type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

const HotelsCard = ({ hotel }: Props) => {
  return (
    <div className="rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white">
      {/* Image & Like Icon */}
      <div className="relative h-[300px] w-full group overflow-hidden">
        <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center">
          <FaHeart className="w-3 h-3" />
        </div>
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={500}
          height={500}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Text Content */}
      <div className="p-4">
        <h1 className="text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-colors duration-200">
          {hotel.name}
        </h1>
        <p className="text-sm text-gray-600 mt-1 font-medium">{hotel.location}</p>
    
        <div className="flex items-center space-x-2 mt-3">
          <div className="px-2 py-1 bg-blue-800 rounded-md font-bold text-white text-xs">{hotel.rating}</div>
          <p className="text-sm text-gray-800">Exceptional</p>
          <p className="text-sm font-bold text-gray-800">{hotel.reviews} Reviews</p>
        </div>

        <p className="mt-3 text-gray-700 font-medium">
          Starting from <span className="text-blue-600">US${hotel.price}</span>
        </p>

        {/* Button */}
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
          Book now
        </button>
      </div>
    </div>
  );
};

export default HotelsCard;
