import React from 'react'
import {categories} from "../recipeasData"
import CatetegorySmallIcon from './CatetegorySmallIcon'
import {AiOutlineRight} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const CategoriesSnippet = () => {
    const size = 6
    const categoriesSnippet = categories.slice(0,size)
    const navigate = useNavigate()
  return (
    <div className='w-full py-10 categories-snippet'>
        <h2 className='text-2xl text-center sm:text-left sm:text-3xl md:text-4xl font-poppins font-semibold tracking-tighter p-10 xl:px-20'>Popular Categories</h2>
        <div className='grid grid-cols-3 justify-items-center lg:grid-cols-6 sm:px-10 xl:px-20'>
            {
                categoriesSnippet.map((category) => {
                    return <CatetegorySmallIcon key={category.categoryId} category={category}/>
                })
            }
        </div>
        <div className='pb-7 px-20 see-more-div text-lightGray'>
            <div onClick={() => navigate('/categories')} className='mx-auto w-[150px] py-3 border border-transparent hover:border-lightBlue rounded-lg cursor-pointer flex items-center justify-center transition-all'>
                <p className='mr-3'>See More</p> 
                <span><AiOutlineRight/></span>
            </div>
        </div>
    </div>
  )
}

export default CategoriesSnippet