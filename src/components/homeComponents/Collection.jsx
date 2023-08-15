import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipeBox from '../utilityComponents/RecipeBox'

const Collection = ({item}) => {

    const [url] = useState(item.url)
    const [collectionList, setCollectionList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getCollectionRecipeas = async() => {
        const result = await axios.get(url)
        const response = await result.data.results
        console.log("response",response);
        setCollectionList(response);
        setIsLoading(false)

    }

    useEffect(() => {
        getCollectionRecipeas()
    },[])

  return (
    <div className='px-10 w-full'>
        <h4 className='text-2xl font-quickSand font-semibold'>{item.title}</h4>
        {
            isLoading? 
            <div className='bg-gray-400 w-full'>
            </div>
            :
            <div className='flex justify-between items-center overflow-x-scroll py-10'>
                {collectionList.map((item) => {
                    return <RecipeBox item = {item}/>
                })}
            </div>
        }
    </div>
  )
}

export default Collection