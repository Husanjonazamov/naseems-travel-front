'use client';

import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import WhyChooseCard from './WhyChooseCard';
import { motion } from 'framer-motion';

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      {/* Title animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SectionHeading heading="Why choose Us" />
      </motion.div>

      {/* Cards grid */}
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        {/* Card 1 - chapdan chiqadi */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <WhyChooseCard image="/images/c1.svg" title="Best Price Guarantee" />
        </motion.div>

        {/* Card 2 - pastdan chiqadi */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <WhyChooseCard image="/images/c2.svg" title="Easy & Quick Booking" />
        </motion.div>

        {/* Card 3 - o‘ngdan chiqadi */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <WhyChooseCard image="/images/c3.svg" title="Customer Care 24/7" />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChoose;
