import React from 'react';
import PopularTourCard from './PopularTourCard';

const PopularTours = () => {
  return (
    <div className="relative min-h-[750px] overflow-hidden">

      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/maldives.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 py-14 sm:py-20">
        <div className="w-full px-4 sm:px-0 sm:w-[80%] mx-auto text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl text-white font-bold">
            Popular Tour
          </h1>
          <p className="mt-3 text-gray-300 text-sm sm:text-base font-medium">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="mt-10">
          <PopularTourCard />
        </div>
      </div>
    </div>
  );
};

export default PopularTours;
