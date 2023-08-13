import React from 'react'
import { useNavigate } from 'react-router-dom'

const CatetegorySmallIcon = ({category}) => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/categories/${category.categoryName}`,{state:{category}})} className='w-[150px] sm:w-[200px] xl:w-[180px] cursor-pointer hover:scale-105 transition-all'>
        <div className='image-div w-full h-[150px] sm:h-[200px] xl:h-[180px] relative'>
            <img 
            loading='lazy'
            className='w-full h-full rounded-[50%] object-cover' 
            src={category.categoryImageUrl} 
            alt="a food dish" />
        </div>
        <div className='w-full category-text h-max p-4 text-black text-center'>
            <p className='text-lg font-poppins font-semibold'>{category.categoryName}</p>
        </div>
    </div>
  )
}

export default CatetegorySmallIcon