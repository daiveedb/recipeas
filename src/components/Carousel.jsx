import React, { useEffect } from 'react'
import axios from 'axios'

const Carousel = () => {

    const apiKey = "dd5446f6f07c4707a6f376ea217c7740"
    let url = "https://api.spoonacular.com/recipes/random?limitLicense=true&number=3&tags=dessert&apiKey=dd5446f6f07c4707a6f376ea217c7740"



    const GetCarouselRecipes = async () => {
        const result = await axios.get(url)
        console.log(result.data.recipes);
    }

    useEffect(()=> GetCarouselRecipes)

  return (
    <div>Carousel</div>
  )
}

export default Carousel