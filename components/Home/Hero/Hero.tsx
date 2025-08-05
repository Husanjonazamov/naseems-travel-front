import React, { useState } from 'react';
import { useTranslation } from '../../../lib/useTranslation';
import CategorySelect from '@/app/category';

const Hero = () => {
    const { t } = useTranslation();
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");

    return (
        <section className="relative min-h-[500px] sm:h-screen flex items-center justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    className="w-full h-full object-cover"
                    src="/maldives.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                    {t.home.heroTitle} <br />
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        {t.home.heroSubtitle}
                    </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    {t.home.heroDescription}
                </p>

                {/* 📱 Mobile-only Search */}
                <div className="block sm:hidden mb-2">
                    <div className='flex flex-col gap-3 items-center justify-center'>
                        <input 
                            type="text" 
                            placeholder="qidirish"
                            className='px-4 py-2 w-full mt-2 rounded-md text-black'
                        />
                        <button className='bg-gradient-to-r from-blue-900 to-blue-950 text-white px-6 py-2 rounded-md font-semibold hover:shadow-lg transition-all'>
                            Qidirish
                        </button>
                    </div>
                </div>

                {/* 💻 Desktop Search */}
                <div className='hidden sm:flex bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg max-w-4xl mx-auto mt-10 flex-col sm:flex-row gap-4 items-center justify-center'>
                    <input 
                        type="text"
                        placeholder='where to?'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className='text-zinc-500 px-4 py-2 rounded-md border w-full sm:w-auto'
                    />
                    <input 
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className='text-zinc-500 px-4 py-2 rounded-md border w-full sm:w-auto'
                    />
                    <CategorySelect />
                    <button className='bg-gradient-to-r from-blue-900 to-blue-950 text-white px-6 py-2 rounded-md hover:shadow-lg transition-all'>
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
