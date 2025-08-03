import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]'>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
            <div>
                <h1 className='text-2xl font-semibold text-white'>What our customer are saying use?</h1>
                <p className='mt-6 text-gray-200'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel beatae tempore doloremque explicabo adipisci laudantium.
                </p>
                <div>
                    <p className='text-2xl font-bold text-white'>4.88</p>
                    <p className='text-white mb-2'>Overall Rating</p>
                    <div className='flex items-center'>
                        <FaStar className='text-white'/>
                        <FaStar className='text-white'/>
                        <FaStar className='text-white'/>
                        <FaStar className='text-white'/>
                        <FaStar className='text-white'/>
                    </div>
                </div>
            </div>

            <div className='overflow-hidden'>
                <ReviewSlider />
            </div>

        </div>
    </div>
  )
}

export default Reviews
