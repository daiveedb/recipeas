import React from 'react'
import {categories} from "../recipeasData"
import CatetegorySmallIcon from './CatetegorySmallIcon'

const CategoriesSnippet = () => {
    const size = 6
    const categoriesSnippet = categories.slice(0,size)
  return (
    <div className='w-full p-10'>
        <h2 className='text-3xl font-poppins font-semibold py-10'>Popular Categories</h2>
        <div className='flex justify-between items-center px-10'>
            {
                categoriesSnippet.map((category) => {
                    return <CatetegorySmallIcon key={category.id} category={category}/>
                })
            }
        </div>
    </div>
  )
}

export default CategoriesSnippet