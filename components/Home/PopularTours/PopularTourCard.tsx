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
    <div className="my-10 max-w-6xl mx-auto px-4">

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        itemClass="px-3"
      >
        {holidaysData.map((data, index) => (
          <div
            key={index}
            className="bg-white border border-purple-200 rounded-xl shadow-md hover:shadow-lg overflow-hidden flex flex-col h-[540px] max-w-[330px] mx-auto"
          >
            {/* Image + Overlayed Title */}
            <div className="relative h-48 w-full">
              <Image
                src={data.image}
                alt={data.title}
                layout="fill"
                objectFit="cover"
                className="brightness-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white bg-black/25 p-8 rounded-md text-lg font-bold uppercase text-center px-3">
                  {data.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <p className="text-[17px] text-gray-800 mb-4 font-medium leading-relaxed">
                {data.content}
              </p>

              {/* Skills */}
              <ul className="text-[16px] text-gray-800 space-y-2 mb-5">
                {data.skils.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-700 mr-2 mt-1 text-base">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition">
                Explore
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PopularTourCard;
