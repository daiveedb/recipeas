import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

const CarouselItem = ({item}) => {
  return (
    <div className='flex justify-between h-[550px]'>
        <div className='flex-[5] h-full'>
            <img 
            loading='lazy'
            className='w-full h-full object-cover'
            src={item.image} alt="image of Breakfast food" />
        </div>
        <div className='flex-[4] bg-lightBlue text-black py-32 px-12 font-poppins'>
            <p className='text-sm tracking-wide font-extralight'>Ready in {item.readyInMinutes} Minutes ⏰</p>
            <h2 className='text-4xl font-bold tracking-tight py-5'>{item.title}</h2>
            <p className='tracking-tight font-light'>{item.summary}</p>
            <div className='bg-white text-black rounded-full w-[50px] h-[50px] relative mt-6 cursor-pointer'>
                <p className='absolute text-2xl font-bold top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'><AiOutlineArrowRight/></p>
            </div>
        </div>
    </div>
  )
}

export default CarouselItem