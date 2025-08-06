'use client';

import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import { hotelsData } from '@/data/data';
import HotelsCard from './HotelsCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';

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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.2,
    },
  }),
};

const Hotel = () => {
  return (
    <div className="pt-20 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionHeading heading="Recommended Hotels" />
      </motion.div>

      {/* Desktop Cards */}
      <div className="w-[80%] mx-auto hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {hotelsData.map((data, index) => (
          <motion.div
            key={data.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <HotelsCard hotel={data} />
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="md:hidden mt-10 px-4"
      >
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
      </motion.div>
    </div>
  );
};

export default Hotel;
