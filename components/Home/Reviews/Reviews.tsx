'use client';

import React from 'react';
import { FaStar } from 'react-icons/fa';
import ReviewSlider from './ReviewSlider';
import { motion } from 'framer-motion';

const Reviews = () => {
  return (
    <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]'>
      <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>

        {/* Chap qism */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className='text-2xl font-semibold text-white'>
            What our customer are saying use?
          </h1>
          <p className='mt-6 text-gray-200'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel beatae tempore doloremque explicabo adipisci laudantium.
          </p>
          <div className='mt-6'>
            <p className='text-2xl font-bold text-white'>4.88</p>
            <p className='text-white mb-2'>Overall Rating</p>
            <div className='flex items-center'>
              <FaStar className='text-white' />
              <FaStar className='text-white' />
              <FaStar className='text-white' />
              <FaStar className='text-white' />
              <FaStar className='text-white' />
            </div>
          </div>
        </motion.div>

        {/* O'ng qism - Slider */}
        <motion.div
          className='overflow-hidden'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ReviewSlider />
        </motion.div>

      </div>
    </div>
  );
};

export default Reviews;
