'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const textVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], 
      staggerChildren: 0.3,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const videoVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const News = () => {
  return (
    <div className="py-20 w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariant}
            className="text-2xl sm:text-4xl font-bold text-blue-900 mb-6"
          >
            HOLIDAYS THAT LET YOU BE JUST YOU
          </motion.h2>
          <motion.p variants={itemVariant} className="text-gray-800 text-lg mb-4">
            On a Just You holiday, you're free to enjoy the experience. We're dedicated solo travel experts so we'll take care of everything else.
          </motion.p>
          <motion.p variants={itemVariant} className="text-gray-800 text-lg mb-4">
            No worrying about where you have to be in the morning, or buying the right train ticket. It's time to just enjoy your chosen destination, relax and make friends with like-minded people.
          </motion.p>
          <motion.p variants={itemVariant} className="text-gray-800 text-lg">
            With 25 years of experience in escorted touring specifically for solo travellers, and a Holiday Director on hand to craft your perfect trip, you will be free to do whatever feels… Just You.
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full aspect-video"
          variants={videoVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/CUX8v7J7gXs"
            title="Just You Holidays"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
