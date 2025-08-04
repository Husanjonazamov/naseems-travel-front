import React from 'react';
import PopularTourCard from './PopularTourCard';

const PopularTours = () => {
  return (
    <div className="relative min-h-[850px] overflow-hidden">

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

      {/* Overlay (optional qora layer) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 pt-20 pb-20">
        <div className='w-[80%] mx-auto'>
          <h1 className='text-xl sm:text-3xl text-white font-bold'>Popular Tour</h1>
          <p className='mt-2 text-gray-300 sm:text-base text-sm font-medium'>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="mt-14 w-[90%] max-w-6xl mx-auto">
          <PopularTourCard />
        </div>
      </div>
    </div>
  );
};

export default PopularTours;
