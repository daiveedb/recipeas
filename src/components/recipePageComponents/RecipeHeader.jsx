import React from 'react'
import {BiTime} from "react-icons/bi"
import {AiFillHeart} from "react-icons/ai"
import {MdFastfood} from "react-icons/md"

const RecipeHeader = ({state}) => {
  return (
    <div className='w-[70%] mx-auto'>
        <h1 className='text-center text-5xl font-pacifico py-5 pt-16'>{state.title}</h1>
        <div className='w-[55%] mx-auto flex justify-around text-darkGray'>
            <div className='flex items-center gap-x-1'>
                <p className='pr-1 text-lg'><BiTime/></p>
                <p><span className='text-brightOrange font-bold font-quickSand text-xl'>{state.readyInMinutes}</span></p>
                <p>mins</p>
            </div>
            <p>|</p>
            <div className='flex items-center gap-x-1'>
                <p className='pr-1 text-lg'><MdFastfood/></p>
                <p><span className='text-brightOrange font-bold font-quickSand text-xl'>{Math.floor(state.nutrition.nutrients[0].amount)}</span></p>
                <p>{state.nutrition.nutrients[0].unit}</p>
            </div>
            <p>|</p>
            <div className='flex items-center gap-x-1'>
                <p className='pr-1 text-lg'><AiFillHeart/></p>
                <p><span className='text-brightOrange font-bold font-quickSand text-xl'>{state.aggregateLikes}</span></p>
                <p>reviews</p>
            </div>   
        </div>
    </div> 
  )
}

export default RecipeHeader