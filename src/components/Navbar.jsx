import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='text-center py-10'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-pacifico font-bold italic pb-5 md:pb-10'>ReciPeas</h1>
        <div className='w-[80%] md:w-[60%] lg:w-[40%] flex justify-evenly mx-auto items-center pt-2 md:pt-5'>
            <div className='text-sm sm:text-base md:font-light cursor-pointer tracking-tighter' onClick={() => navigate('/')}>
              <p>Home</p>
            </div>
            <div className='text-sm sm:text-base md:font-light cursor-pointer tracking-tighter' onClick={() => navigate('/categories')}>
              <p>Categories</p>
            </div>
            <div className='text-sm sm:text-base md:font-light cursor-pointer tracking-tighter' onClick={() => navigate('/')}>
              <p>Search</p>
            </div>
            <div className='text-sm sm:text-base md:font-light cursor-pointer tracking-tighter' onClick={() => navigate('/')}>
              <p>Surprise</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar