import React from 'react'
import {categories} from "../recipeasData"
import CatetegorySmallIcon from './CatetegorySmallIcon'

const CategoriesSnippet = () => {
    const size = 6
    const categoriesSnippet = categories.slice(0,size)

  return (
    <div className='w-full py-10'>
        <h2 className='text-2xl text-center sm:text-left sm:text-3xl font-poppins font-semibold p-10'>Popular Categories</h2>
        <div className='grid grid-cols-3 justify-items-center lg:grid-cols-6 sm:px-10 xl:px-20'>
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