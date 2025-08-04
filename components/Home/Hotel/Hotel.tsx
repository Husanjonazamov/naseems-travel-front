import SectionHeading from '@/components/Helper/SectionHeading'
import { hotelsData } from '@/data/data'
import React from 'react'
import HotelsCard from './HotelsCard'

const Hotel = () => {
  return (
    <div className='pt-20 pb-20'>
      <SectionHeading heading='Recommended Hotels' />

      <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
        {hotelsData.map((data) => (
          <HotelsCard key={data.id} hotel={data} />
        ))}
      </div>
    </div>
  );
};

export default Hotel;
