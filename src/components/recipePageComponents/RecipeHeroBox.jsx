import React, { useEffect, useState } from 'react'
import IngredientItem from './IngredientItem'

const RecipeHeroBox = ({state}) => {



   const [ingredients, setIngredients] = useState([])

   const getIngredients = () => {
    let ingredients = []

    for (let i in state.nutrition.ingredients){
        const notIncluded = ingredients.find((item) => item.id === state.nutrition.ingredients[i].id) === undefined
        if(notIncluded){
            ingredients.push(state.nutrition.ingredients[i])
        }
    }
    setIngredients(ingredients);
   }

   const getEquipment = () => {
    let equipment = []
   } 

    useEffect(()=> {
      getIngredients()
      getEquipment()
      console.log(state);
    },[])


  return (
    <div className='w-[90vw] xl:w-[80vw] mx-auto p-5 my-5 flex justify-between items-center h-[650px]'>
        <div className='flex-1 bg-lightGray p-16 rounded h-full overflow-y-scroll'>
            <p className='text-2xl font-black pb-3 uppercase text-darkerGray'>Ingridients</p>
           {ingredients.map((ingridient)=> {
                return <IngredientItem key={ingridient.id} ingridient={ingridient}/>})}
        </div>
        <div className='flex-1 bg-darkGray w-full h-[90%] -translate-x-5 p-16'>
        <p className='text-2xl font-black pb-3 uppercase text-lightGray'>Equipment</p>
        </div>
    </div>
  )
}

export default RecipeHeroBox