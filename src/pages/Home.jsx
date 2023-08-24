import React from 'react'
import Navbar from '../components/homeComponents/Navbar'
import Footer from '../components/utilityComponents/Footer'
import SlidingJokes from '../components/utilityComponents/SlidingJokes'
import CategoriesSnippet from '../components/homeComponents/CategoriesSnippet'
import Carousel from '../components/homeComponents/Carousel'
import Collections from '../components/homeComponents/Collections'
import NewsLetter from '../components/homeComponents/NewsLetter'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <Collections/>
        <SlidingJokes/>
        <CategoriesSnippet/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home