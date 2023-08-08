import React from 'react'
import NavLinks from './NavLinks'

const PageHeader = ({header}) => {
  return (
    <div className='bg-lightestGray p-6 border-b border-gray-300 flex flex-col items-center'>
        <h1 className='flex-1 text-5xl font-pacifico font-semibold p-5'>{header}</h1>
        <div className='flex-1 w-full'>
          <NavLinks/>
        </div>
    </div>
  )
}

export default PageHeader