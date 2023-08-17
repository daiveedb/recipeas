import React from 'react'
import Lottie from "lottie-react"
import animationData from "../../projectSvgs/animation_lldygtrm.json"

const PreLoader = () => {
  return (
    <div className='flex justify-center items-center w-[50%] m-auto mb-16'>
        <Lottie 
        animationData={animationData} 
        loop={true} 
        autoPlay={true} 
        width={100} 
        height={100} />
  </div>
  )
}

export default PreLoader