import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipeBox from '../utilityComponents/RecipeBox'
import {AiOutlineRight, AiOutlineLeft} from "react-icons/ai"

const Collection = ({item}) => {

    const [url] = useState(item.url)
    const [collectionList, setCollectionList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getCollectionRecipeas = async() => {
        const result = await axios.get(url)
        const response = await result.data.results
        setCollectionList(response);
        setIsLoading(false)

    }

    function scrollLeft() {
        let div = document.getElementById("collection-scrollable")
        div.scroll({
            top:0,
            left:-1000,
            behavior:'smooth'
        })
    }
    function scrollRight() {
        let div = document.getElementById("collection-scrollable")
        div.scroll({
            top:0,
            left:1000,
            behavior:'smooth'
        })
    }

    useEffect(() => {
        getCollectionRecipeas()
    },[])

  return (
    <div className='px-0 xl:px-10 w-full relative'>
        <h4 className='text-center sm:text-left text-lg md:text-2xl font-quickSand font-semibold'>{item.title}</h4>
        {
            isLoading? 
            <div className='bg-gray-400 w-full h-[300px] mt-4 md:mt-7 rounded-md'>
            </div>
            :
            <div id='collection-scrollable' className='overflow-x-scroll pt-4 md:pt-10 pb-3 w-full collection-scrollable'>
                <div className='flex justify-between items-center gap-x-12 w-max'>
                    {collectionList.map((item) => {
                        return <RecipeBox key={item.id} item = {item}/>
                    })}
                </div>
            </div>
        }
        {/* Left Arrow */}
        <div onClick={() => scrollLeft()} className='absolute hidden sm:block top-[50%] -translate-y-[50%] -left-6 xl:left-3 z-20'>
            <div className='bg-lightestGray hover:bg-lightGray text-black rounded-full w-[50px] h-[50px] relative cursor-pointer hover:scale-[1.1] transition-all'>
                <p className='absolute text-2xl font-bold top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'><AiOutlineLeft/></p>
            </div>
        </div>

        {/* Right Arrow */}
        <div onClick={() => scrollRight()} className='absolute hidden sm:block top-[50%] -translate-y-[50%] -right-6 xl:right-3 z-20'>
            <div className='bg-lightestGray hover:bg-lightGray text-black rounded-full w-[50px] h-[50px] relative cursor-pointer hover:scale-[1.1] transition-all'>
                <p className='absolute text-2xl font-bold top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'><AiOutlineRight/></p>
            </div>
        </div>
    </div>
  )
}

export default Collection