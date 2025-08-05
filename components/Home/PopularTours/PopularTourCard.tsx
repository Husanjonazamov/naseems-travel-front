import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { holidaysData } from '@/data/data';
import Image from 'next/image';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 3 },
  tablet: { breakpoint: { max: 1324, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 }
};

const PopularTourCard = () => {
  return (
    <div className="my-10 w-[95%] sm:w-[90%] max-w-6xl mx-auto px-2">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        itemClass="px-3"
        dotListClass="flex justify-center mt-6"
      >
        {holidaysData.map((data, index) => (
          <div
            key={index}
            className="bg-white border border-purple-200 rounded-xl shadow-md hover:shadow-lg overflow-hidden flex flex-col
                       h-[650px] sm:h-[550px] w-full mx-auto"
          >
            {/* Image + Title */}
            <div className="relative h-48 w-full">
              <Image
                src={data.image}
                alt={data.title}
                layout="fill"
                objectFit="cover"
                className="brightness-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white bg-black/25 p-6 rounded-md text-base font-bold uppercase text-center px-3 line-clamp-2">
                  {data.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <p className="text-[16px] text-blue-900 mb-4 font-medium leading-relaxed line-clamp-3">
                {data.content}
              </p>

              <ul className="text-[15px] text-gray-800 space-y-2 mb-5">
                {data.skils.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-700 mr-2 mt-1 text-base">•</span>
                    <span className="line-clamp-1">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 flex justify-center sm:justify-end">
                <button className="w-full sm:w-[45%] text-sm font-bold bg-blue-900 text-white py-3 rounded-md hover:bg-blue-950 transition">
                  Book now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PopularTourCard;
