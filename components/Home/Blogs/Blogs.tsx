'use client';

import React from 'react';
import BlogsCard from './BlogsCard';
import { soloTouringData } from '@/data/data';

const Blogs = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto w-full px-4">
        <h2 className="text-3xl font-bold text-center text-sky-800 mb-12">
          Read Our Blogs
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Chapdagi card */}
          <div className="w-full lg:w-[45%]">
            <div className="h-full">
              <BlogsCard data={soloTouringData[0]} large />
            </div>
          </div>

          {/* O‘ngdagi 2 ta kichik card */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6">
            <div className="h-full">
              <BlogsCard data={soloTouringData[1]} small />
            </div>
            <div className="h-full">
              <BlogsCard data={soloTouringData[2]} small />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
