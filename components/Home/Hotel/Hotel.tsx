import SectionHeading from '@/components/Helper/SectionHeading'
import { hotelsData } from '@/data/data'
import React from 'react'
import HotelsCard from './HotelsCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Hotel = () => {
  return (
    <div className='pt-20 pb-20'>
      <SectionHeading heading='Recommended Hotels' />

      <div className='w-[80%] mx-auto hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
        {hotelsData.map((data) => (
          <HotelsCard key={data.id} hotel={data} />
        ))}
      </div>

      <div className="md:hidden mt-10 px-4">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay={false}
          dotListClass="flex justify-center mt-6"
        >
          {hotelsData.map((data) => (
            <div key={data.id} className="flex justify-center">
                <HotelsCard hotel={data} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hotel;
