import React from 'react'
import RecipeBox from "../utilityComponents/RecipeBox"

const CategoryPageGrid = ({recipesList}) => {
  return (
    <div className='px-8 py-16'>
      <div className='grid grid-cols-3 justify-items-center gap-3'>
        {recipesList.map((item) => {
          return <RecipeBox key={item.id} item={item}/>
        })}
      </div>
    </div>
  )
}

export default CategoryPageGrid