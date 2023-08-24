import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecipeBox = ({item}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/${item.title}`,{state:{item}})} className='w-[160px] h-[180px] sm:w-[240px] sm:h-[200px] md:w-[230px] md:h-[200px] border rounded-md cursor-pointer'>
        <div className='w-full h-[65%] sm:h-[75%] rounded-t-md bg-slate-500'>
            <img 
            className='w-full h-full object-cover rounded-t-md'
            loading='lazy'
            src={item.image} 
            alt={item.title} />
        </div>
        <div className='w-full h-[25%] text-center p-2'>
            <p className='font-semibold font-quickSand text-xs sm:text-sm tracking-tighter'>{item.title}</p>
        </div>
    </div>
  )
}

export default RecipeBox