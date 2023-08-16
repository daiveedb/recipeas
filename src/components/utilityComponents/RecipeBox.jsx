import React from 'react'

const RecipeBox = ({item}) => {
  return (
    <div className='w-[220px] h-[180px] sm:w-[260px] sm:h-[220px] md:w-[300px] md:h-[260px] border rounded-md cursor-pointer'>
        <div className='w-full h-[75%] rounded-t-md bg-slate-500'>
            <img 
            className='w-full h-full object-cover rounded-t-md'
            loading='lazy'
            src={item.image} 
            alt={item.title} />
        </div>
        <div className='w-full h-[25%] text-center p-2'>
            <p className='font-semibold font-quickSand text-xs sm:text-sm md:text-base tracking-tighter'>{item.title}</p>
        </div>
    </div>
  )
}

export default RecipeBox