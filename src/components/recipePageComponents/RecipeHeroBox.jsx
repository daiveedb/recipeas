import React, { useEffect } from 'react'

const RecipeHeroBox = ({state}) => {



    const ingridients = [state.usedIngredients,state.missedIngredients].flat() 

    useEffect(()=> {
        // console.log(ingridients);
    },[])


  return (
    <div className='w-full p-5 flex gap-x-5 justify-between items-start bg-darkGray h-max'>
        <div className='flex-1 '>
            <p className='text-2xl font-bold pb-3'>Ingridients</p>
           {ingridients.map((ingridient)=> {
                return(
                <div key={ingridient.id}>
                    <p className='text-black'>{`${ingridient.amount} ${ingridient.unit} ${ingridient.originalName}`}</p>
                </div>
            )})}
        </div>
        <div className='flex-1'>
            <p className='text-2xl font-bold pb-3'>Equipment</p>

        </div>
        <div className='flex-1'>

        </div>
    </div>
  )
}

export default RecipeHeroBox