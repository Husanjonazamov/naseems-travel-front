import React from 'react'
import Image from 'next/image'

type Props = {
    image: string;
    title: string;
} 

const WhyChooseCard = ({ image, title }: Props) => {
  return (
    <div>
      <Image 
      src={image}
      alt={title}
      width={70}
      height={70}
      className='mx-auto'
      />
        <h1>{title}</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, maxime!
        </p>
    </div>
  )
}

export default WhyChooseCard
