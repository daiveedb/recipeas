import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

const CarouselItem = ({item}) => {
  return (
    <div className='flex flex-col h-[800px] sm:flex-row justify-between sm:h-[550px]'>
        <div className='sm:flex-[5] h-[50%] sm:h-full'>
            <img 
            loading='lazy'
            className='w-full h-full object-cover'
            src={item.image} alt="image of Breakfast food" />
        </div>
        <div className='sm:flex-[4] h-[50%] sm:h-full bg-lightBlue text-black py-8 px-6 sm:py-32 sm:px-10 lg:px-12  font-poppins'>
            <p className='text-sm tracking-wide font-extralight'>⏰ Ready in {item.readyInMinutes} Minutes </p>
            <h2 className='text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight py-5'>{item.title}</h2>
            <p className='tracking-tight text-sm lg:text-base font-light'>{item.summary}</p>
            <div className='bg-white text-black rounded-full w-[50px] h-[50px] relative mt-6 cursor-pointer hover:scale-[1.1] transition-all'>
                <p className='absolute text-2xl font-bold top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'><AiOutlineArrowRight/></p>
            </div>
        </div>
    </div>
  )
}

export default CarouselItem