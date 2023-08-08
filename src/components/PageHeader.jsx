import React from 'react'

const PageHeader = ({header}) => {
  return (
    <div className='bg-lightestGray p-6 border-b border-gray-300'>
        <h1 className='text-5xl font-pacifico font-semibold p-5'>{header}</h1>
    </div>
  )
}

export default PageHeader