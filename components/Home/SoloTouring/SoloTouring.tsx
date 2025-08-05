import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import SectionHeading from '@/components/Helper/SectionHeading';
import SolorTouringCard from './SolorTouringCard';
import { soloTouringData } from '@/data/data';
import CustomDot from './CustomDot';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1324, min: 768 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const SoloTouring = () => {
  return (
    <div className="pt-20 pb-20 text-white"> {/* 💡 bg color */}
      <SectionHeading heading="NEW SOLO TOURING HOLIDAYS" />

      {/* Desktop Grid */}
      <div className="hidden md:grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto">
        {soloTouringData.map((data, index) => (
          <div key={index} className="h-full">
            <SolorTouringCard data={data} />
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden mt-10 px-4">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay={false}
          showDots={true}
          renderDotsOutside={true}
          customDot={<CustomDot />}
        >
          {soloTouringData.map((data, index) => (
            <div key={index} className="px-2 h-full">
              <SolorTouringCard data={data} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Explore More Button */}
      <div className="mt-10 flex justify-center items-center">
        <button className="bg-blue-900 text-white w-[86%] sm:w-[300px] text-lg sm:text-base px-4 sm:px-6 py-3 sm:py-4 font-bold rounded-xl hover:shadow-lg transition-all hover:bg-blue-950">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default SoloTouring;
