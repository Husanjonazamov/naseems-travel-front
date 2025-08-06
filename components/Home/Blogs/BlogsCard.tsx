import React from 'react';
import Image from 'next/image';
import { CalendarDays, Clock } from 'lucide-react';

type Props = {
  data: {
    title: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    description: string;
  };
  large?: boolean;
  small?: boolean;
};

const BlogsCard = ({ data, large, small }: Props) => {
  const isSmall = small;
  const isLarge = large;

  return (
    <div
      className={`bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden 
        ${isSmall ? 'flex flex-col sm:flex-row' : 'flex flex-col'} 
        h-full min-h-[220px] lg:min-h-[200px]`}
    >
      {/* Image */}
      <div
        className={`relative ${
          isSmall
            ? 'w-full sm:w-1/3 h-48 sm:h-auto'
            : 'w-full h-64 md:h-72 lg:h-80'
        }`}
      >
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div
        className={`p-4 ${
          isSmall ? 'w-full sm:w-2/3' : 'w-full flex flex-col h-full'
        } space-y-2`}
      >
        {/* Category */}
        <span className="inline-block bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded">
          {data.category}
        </span>

        {/* Title */}
        <h3 className={`font-bold ${isLarge ? 'text-2xl' : 'text-lg'} leading-snug`}>
          {data.title}
        </h3>

        {/* Description – faqat large bo‘lsa */}
        {isLarge && (
          <p className="text-gray-700 text-sm">
            {data.description}
          </p>
        )}

        {/* Sana va o‘qish vaqti */}
        <div className="flex items-center text-gray-500 text-sm gap-4 mt-auto flex-wrap">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            <span>{data.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{data.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
