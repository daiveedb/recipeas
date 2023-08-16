import React from 'react'
import Lottie from "lottie-react"
import animationData from "../../projectSvgs/animation_lldygtrm.json"

const PreLoader = () => {
  return (
    <div className='flex justify-center items-center w-[20%] m-auto mb-16'>
        <Lottie 
        animationData={animationData} 
        loop={true} 
        autoPlay={true} 
        width={70} 
        height={70} />
  </div>
  )
}

export default PreLoader