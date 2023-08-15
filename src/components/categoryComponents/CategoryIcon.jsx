import React, { useEffect } from 'react'
import Placeholder from '../../projectSvgs/food-placeholder.jpg'
import { useNavigate } from 'react-router-dom'

const CategoryIcon = ({category}) => {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/categories/${category.categoryName}`,{state:{category}})} className='w-[150px] sm:w-[200px] xl:w-[250px] cursor-pointer category-icon hover:scale-105 transition-all'>
        <div className='image-div w-full h-[150px] sm:h-[200px] xl:h-[250px] relative'>
            <img 
            loading='lazy'
            placeholder={Placeholder}
            className='w-full h-full rounded-[50%] object-cover' 
            src={category.categoryImageUrl} 
            alt="a food dish" />

            <div className='image-layer rounded-[50%] absolute top-0 right-0 left-0 h-full w-full bg-transparent'>
            </div>
        </div>
        <div className='w-full category-text h-max p-4 text-black text-center'>
            <p className='text-lg font-poppins font-semibold'>{category.categoryName}</p>
        </div>
    </div>
  )
}

export default CategoryIcon