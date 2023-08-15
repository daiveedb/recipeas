import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavLinks = () => {

    const navigate = useNavigate()

  return (
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
  )
}

export default NavLinks