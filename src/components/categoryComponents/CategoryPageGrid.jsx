import React from 'react'
import RecipeBox from "../utilityComponents/RecipeBox"

const CategoryPageGrid = ({recipesList}) => {
  return (
    <div className='px-8 xl:px-32 py-16'>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8'>
        {recipesList.map((item) => {
          return <RecipeBox key={item.id} item={item}/>
        })}
      </div>
    </div>
  )
}

export default CategoryPageGrid