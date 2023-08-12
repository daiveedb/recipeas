import React, { useEffect } from 'react'
import {categories} from "../recipeasData"
import CategoryIcon from './CategoryIcon'

const CategoriesGrid = () => {


  return (
    <div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 px-4 sm:px-10 md:px-20 lg:px-32 py-20'>
            {categories.map((category) => {
                return <CategoryIcon key={category.categoryId} category={category}/>
            })}
        </div>
    </div>
  )
}

export default CategoriesGrid