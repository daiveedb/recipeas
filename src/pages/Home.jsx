import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SlidingJokes from '../components/SlidingJokes'
import CategoriesSnippet from '../components/CategoriesSnippet'
import Carousel from '../components/Carousel'

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