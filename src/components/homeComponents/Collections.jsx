import { Suspense, lazy } from 'react'
import React from 'react'
import {collections} from '../../recipeasData'



const Collections = () => {

    const Collection = lazy(() => import('./Collection'))

  return (
    <div className='my-12 px-10'>
        <h1 className='text-2xl text-center sm:text-left sm:text-3xl md:text-4xl font-poppins font-semibold tracking-tighter py-4 sm:py-6 md:py-8 lg:py-10 xl:px-10'>Hand Picked Collections For You</h1>
        <div>
            {collections.slice(0,1).map((item) => {
                return (
                    <Suspense fallback = {<div>Still Loading</div>}>
                        <Collection key={item.id} item = {item}/>
                    </Suspense>
                )
            })}
        </div>
    </div>
  )
}

export default Collections