
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from '../lib/useTranslation';
import Header from '../components/Home/Header/Header';
import CategorySelect from './category';
import Hero from '@/components/Home/Hero/Hero';
import Destination from '@/components/Home/Destination/Destination';


export default function Home() {
  return (
    <div className=''>
      <Header />
      <Hero />
      <Destination />
    </div>
  )
}
  

  