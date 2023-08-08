import React from 'react'

import NavLinks from './NavLinks'

const Navbar = () => {
  
  return (
    <div className='text-center py-10'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-pacifico font-bold italic pb-5 md:pb-10'>ReciPeas</h1>
        <NavLinks/>
    </div>
  )
}

export default Navbar