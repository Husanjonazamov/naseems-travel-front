import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import SolorTouringCard from './SolorTouringCard'
import { soloTouringData } from '@/data/data'

const SoloTouring = () => {
  return (
    <div className='pt-20 pb-20'>
      <SectionHeading heading='NEW SOLO TOURING HOLIDAYS' />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto">
        {soloTouringData.map((data, index) => (
          <SolorTouringCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default SoloTouring;
