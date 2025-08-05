
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from '../lib/useTranslation';
import Header from '../components/Home/Header/Header';
import CategorySelect from './category';
import Hero from '@/components/Home/Hero/Hero';
import Destination from '@/components/Home/Destination/Destination';
import Hotel from '@/components/Home/Hotel/Hotel';
import WhyChoose from '@/components/Home/WhyChoose/WhyChoose';
import Reviews from '@/components/Home/Reviews/Reviews';
import News from '@/components/Home/News/News';
import PopularTours from '@/components/Home/PopularTours/PopularTours';
import SoloTouring from '@/components/Home/SoloTouring/SoloTouring';
import TestimonialCarousel from '@/components/Home/TestimonialCarousel/TestimonialCarousel';


export default function Home() {
  return (
    <div className=''>
      <Header />
      <Hero />
      {/* <Destination /> */}
      <Hotel />
      <PopularTours />
      <WhyChoose />
      <Reviews />
      <News />
      <SoloTouring />
      <TestimonialCarousel />
    </div>
  )
}
  

  