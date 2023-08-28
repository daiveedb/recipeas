import React from 'react'

const IngredientItem = ({ingridient}) => {
  return (
    <div className='flex gap-x-2 py-2 w-full items-start'>
        <p className='flex-1 text-darkerGray text-3xl font-bold'>{ingridient.amount}</p>
        <p className='flex-[5] border-b border-b-gray-300 border-dashed pb-2 text-lg text-gray-600 tracking-wide'> {ingridient.unit} <b>{ingridient.name}</b></p>
    </div>
)
}

export default IngredientItem