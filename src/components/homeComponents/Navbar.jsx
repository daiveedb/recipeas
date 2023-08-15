import React from 'react'

import NavLinks from '../utilityComponents/NavLinks'

const Navbar = () => {
  
  return (
    <div className='text-center py-10 bg-gradient-to-b from-lightGray to-white'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-pacifico font-bold italic pb-5 md:pb-10'>ReciPeas</h1>
        <NavLinks/>
    </div>
  )
}

export default Navbar