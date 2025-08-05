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
    <div className="h-[550px] flex flex-col justify-between rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white">
      {/* Image */}
      <div className="relative h-[270px] w-full group overflow-hidden">
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
      <div className="flex flex-col justify-between flex-grow p-4">
        <div className="space-y-3">
          <h1 className="text-2xl mb-4 font-semibold text-blue-900 hover:text-blue-950 cursor-pointer transition-colors duration-200">
            {hotel.name}
          </h1>
          <p className="text-md text-gray-600 font-medium">{hotel.location}</p>
        </div>

        <div className="mt-auto pt-4 flex justify-end">
          <button className="w-full  font-bold sm:w-[40%] bg-blue-900 text-white text-lg px-4 py-3 rounded-lg hover:bg-blue-950 transition">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
};

export default HotelsCard;
