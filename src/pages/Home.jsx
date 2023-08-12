import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SlidingJokes from '../components/SlidingJokes'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <SlidingJokes/>
        <Footer/>
    </div>
  )
}

export default Home