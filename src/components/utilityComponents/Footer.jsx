import React from 'react'
import {FiTwitter} from 'react-icons/fi'
import {AiFillGithub, AiFillLinkedin }from 'react-icons/ai'
import {FaMedium} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full px-10 sm:px-16 md:px-32 py-8 sm:py-12 md:py-28 pb-10  text-darkGray bg-lightestGray'>
        <div className='flex flex-col lg:flex-row gap-16 justify-between mb-10'> 
            <div className='flex-1'>
                <h1 className='text-4xl font-pacifico font-semibold italic pb-10 text-black'>ReciPeas</h1>
                <p className='w-[90%] text-sm sm:text-base lg:w-[70%]'>"I don't live off that hope shit, I wish the water was cold. I wish the instructors keep on running. I wish for the rain. When the ending is unkown. And the distance is unknown. That's when you know who you are. Stay hard" ~ David Goggins</p>
            </div>
            <div className='flex-1'>
                <div className='w-[95%] md:w-[80%] lg:mx-auto flex justify-between items-start'>
                    <div className='footerLinkGroup'>
                        <h1 className='text-lg md:text-xl text-black'>Recipeas</h1>
                        <a href="">
                            <p>Home</p>
                        </a>
                        <a href="">
                            <p>Categories</p>
                        </a>
                        <a href="">
                            <p>About</p>
                        </a>
                        <a href="">
                            <p>Surprise</p>
                        </a>
                    </div>
                    <div className='footerLinkGroup'>
                        <h1 className='text-lg md:text-xl text-black'>Legal</h1>
                        <a href="">
                            <p>Terms</p>
                        </a>
                        <a href="">
                            <p>Conditions</p>
                        </a>
                        <a href="">
                            <p>Cookies</p>
                        </a>
                        <a href="">
                            <p>Copywright</p>
                        </a>
                    </div>
                    <div className='footerLinkGroup'>
                        <h1 className='text-lg md:text-xl text-black'>Follow</h1>
                        <a href="">
                            <p>LinkedIn</p>
                        </a>
                        <a href="">
                            <p>Medium</p>
                        </a>
                        <a href="">
                            <p>Github</p>
                        </a>
                        <a href="">
                            <p>X</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full border-lightGray border-t pt-5 flex items-start justify-between'>
            <p className='flex-1 text-xs sm:text-sm md:text-base'>&copy;Recipeas 2023 - All rights reserved</p>
            <div className=' flex justify-between items-center w-[30%] md:w-[15%]'>
                <a href=""><p className='text-sm sm:text-base md:textlg lg:text-xl'><FiTwitter/></p></a>
                <a href=""><p className='text-sm sm:text-base md:textlg lg:text-xl'><FaMedium/></p></a>
                <a href=""><p className='text-sm sm:text-base md:textlg lg:text-xl'><AiFillGithub/></p></a>
                <a href=""><p className='text-sm sm:text-base md:textlg lg:text-xl'><AiFillLinkedin/></p></a>
            </div>
        </div>
    </div>
  )
}

export default Footer