import React from 'react'
import {PiCookingPotFill} from "react-icons/pi"

const EquipmentItem = ({equipment}) => {
  return (
    <div className='flex gap-x-2 items-center'>
        <p className='text-xl text-lightGray'><PiCookingPotFill/></p>
        <p className='text-2xl font-bold text-lightGray capitalize py-4 border-b border-gray-500 border-dashed'>{equipment.name}</p>
    </div>
  )
}

export default EquipmentItem