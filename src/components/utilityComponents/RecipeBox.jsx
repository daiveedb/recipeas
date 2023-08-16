import React from 'react'

const RecipeBox = ({item}) => {
  return (
    <div className='w-[350px] h-[300px] border rounded-md cursor-pointer mr-12'>
        <div className='w-full h-[75%] rounded-t-md bg-slate-500'>
            <img 
            className='w-full h-full object-cover rounded-t-md'
            loading='lazy'
            src={item.image} 
            alt={item.title} />
        </div>
        <div className='w-full h-[25%] text-center p-3 '>
            <p className='font-semibold font-quickSand text-lg tracking-tighter'>{item.title}</p>
        </div>
    </div>
  )
}

export default RecipeBox