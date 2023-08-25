import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/utilityComponents/PageHeader'
import CategoryPageGrid from '../components/categoryComponents/CategoryPageGrid'
import axios from 'axios'
import PreLoader from '../components/utilityComponents/PreLoader'
import Footer from '../components/utilityComponents/Footer'

const CategoryPage = () => {

    const state = useLocation().state.category

    const [isLoading, setIsLoading] = useState(true)
    const [recipesList, setRecipesList] = useState([])

    const getCategoryRecipes = async() => {
      const response = await axios.get(state.categoryCallUrl)
      const result = response.data.results;
      // console.log(result);
      setRecipesList(result)
      setIsLoading(false)
    }


    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      getCategoryRecipes()
    },[])


  return (
    <div>
        <PageHeader header={state.categoryName} links={true} />
        {
          isLoading?
          <div className='py-60'>
            <PreLoader/>
          </div>
          :
          <CategoryPageGrid recipesList = {recipesList}/>
        }
        <Footer/>
        
    </div>
  )
}

export default CategoryPage