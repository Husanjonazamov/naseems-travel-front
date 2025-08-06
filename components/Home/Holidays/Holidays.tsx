'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HolidaysToursCard from './HolidaysCard';

const HolidaysTours = () => {
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
          {/* Title Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl text-white font-bold"
          >
            Holdays Tour
          </motion.h1>

          {/* Paragraph Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-gray-300 text-sm sm:text-base font-medium"
          >
            Lorem ipsum dolor sit amet.
          </motion.p>
        </div>

        {/* Card Section Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <HolidaysToursCard />
        </motion.div>
      </div>
    </div>
  );
};

export default HolidaysTours;
