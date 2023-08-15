import React from 'react'
import Navbar from '../components/homeComponents/Navbar'
import Footer from '../components/utilityComponents/Footer'
import SlidingJokes from '../components/utilityComponents/SlidingJokes'
import CategoriesSnippet from '../components/homeComponents/CategoriesSnippet'
import Carousel from '../components/homeComponents/Carousel'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <CategoriesSnippet/>
        <SlidingJokes/>
        <Footer/>
    </div>
  )
}

export default Home