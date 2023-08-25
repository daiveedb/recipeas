import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/utilityComponents/PageHeader'
import RecipeHeroBox from '../components/recipePageComponents/RecipeHeroBox'

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
    <div>
        <PageHeader header={state.title} links={false}/>
        <RecipeHeroBox/>   
    </div>
  )
}

export default RecipePage