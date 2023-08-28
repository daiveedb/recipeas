import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/utilityComponents/PageHeader'
import RecipeHeroBox from '../components/recipePageComponents/RecipeHeroBox'
import RecipeHeader from '../components/recipePageComponents/RecipeHeader'

const RecipePage = () => {
    const state = useLocation().state.item
    const url = ""

    const getRecipeInformation = async() => {

    }

    useEffect(() => {
      // getRecipeInformation()
      console.log(state);
    })
  return (
    <div className='py-4'>
      <RecipeHeader state={state}/>
      <div className='p-10'>
        <RecipeHeroBox state={state}/>   
      </div>
    </div>
  )
}

export default RecipePage