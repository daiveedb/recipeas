import React, { useState } from 'react'

const NewsLetter = () => {

    const [email, setEmail] = useState('')

    const handleEmail = (e) => {
        console.log(e);
        setEmail(e)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Email Successfully Submitted, Thank you")
        setEmail('')
    }

  return (
    <div className='w-full bg-lightBlue py-32 px-10 sm:px-20 md:px-40 text-center'>
        <div className='pb-10'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-pacifico font-bold capitalize pb-6'>
                Deliciousness in your inbox
            </h1>
            <p className='text-sm md:text-base lg:text-lg tracking-wide font-sans font-light capitalize'>enjoy weekly handpicked recipes and recommendations</p>
        </div>
        <div className='flex justify-center items-center'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                className ='bg-white outline-none rounded-l-md p-3 w-[180px] sm:w-[200px] md:w-[300px] border border-r-0 border-transparent hover:border-gray-400'
                placeholder = 'Enter Your Email'
                onChange = {(e) => handleEmail(e.target.value)}
                value={email}
                type = "email"
                required />
                <button className='bg-darkGray hover:bg-brightOrange transition-all text-white py-[13px] px-4 sm:px-7 rounded-r-md' type='submit'>Join</button>
            </form>
        </div>
    </div>
  )
}

export default NewsLetter