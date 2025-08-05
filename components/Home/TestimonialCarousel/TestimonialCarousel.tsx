'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from '@/data/data';

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="bg-blue-900 py-20 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <p className="text-2xl md:text-3xl font-semibold leading-relaxed italic">
                “{item.text}”
              </p>
              <div className="my-4 mx-auto w-12 h-[2px] bg-white" />
              <p className="text-base font-medium">{item.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
