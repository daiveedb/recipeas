import React from 'react'
import NavLinks from './NavLinks'
import {BiArrowBack} from "react-icons/bi"
import { useNavigate } from 'react-router-dom'

const PageHeader = ({header}) => {
  const navigate = useNavigate()
  return (
    <div className='bg-lightestGray p-6 border-b border-gray-300 flex flex-col items-center relative'>
        <h1 className='flex-1 text-3xl sm:text-5xl font-pacifico font-semibold p-5'>{header}</h1>
        <div className='flex-1 w-full'>
          <NavLinks/>
        </div>
        <p 
          onClick={() => navigate(-1)}
          className='top-5 left-5 text-4xl sm:top-10 sm:left-10 sm:text-6xl text-black absolute cursor-pointer'>
          <BiArrowBack/>
        </p>
    </div>
  )
}

export default PageHeader