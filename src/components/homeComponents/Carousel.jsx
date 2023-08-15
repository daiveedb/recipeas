import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import breakfast from "../../projectSvgs/breakfast.jpg"

const Carousel = () => {

    const [carouselList, setCarouselList] = useState([
        {
            title: 'Freshly Baked Banana Bread',
            readyInMinutes: 45,
            image: breakfast,
            summary:"Get the best banana bread all withing less than an hour from when you start cooking. Get the full information on how to prepare this amazing meal when you click on the button below. What are you waiting for nigaaaaaa "
        }
    ])
    const [isCarouselLoading, setIsCarouselLoading] = useState(true)

    const [hourOfDay, setHourOfDay] = useState()
    const [message, setMessage] = useState("")
    const [url, setUrl] = useState("")


    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // enable autoplay
        autoplaySpeed: 5000, // set autoplay speed to 5 seconds
      };


    const renderBasedOnTime = () => {
        if (hourOfDay >= 4 && hourOfDay < 12){
            setMessage("Good Morning there, Breakfast Ideas?")
            setUrl("https://api.spoonacular.com/recipes/random?limitLicense=true&number=1&tags=breakfast&apiKey=dd5446f6f07c4707a6f376ea217c7740")
        }
        else if (hourOfDay >= 12 && hourOfDay < 18) {
            setMessage("It's Lunch Time, Try one of these")
            setUrl("https://api.spoonacular.com/recipes/random?limitLicense=true&number=1&tags=appetizer&apiKey=dd5446f6f07c4707a6f376ea217c7740")
        }
        else if (hourOfDay >= 18 && hourOfDay < 23) {
            setMessage("Prepped for Dinner?, Check these Out")
            setUrl("https://api.spoonacular.com/recipes/random?limitLicense=true&number=1&tags=maincourse&apiKey=dd5446f6f07c4707a6f376ea217c7740")
        }
        else if (hourOfDay >= 23 || hourOfDay < 4) {
            setMessage("Late Night Snack Huh? You'd Love these")
            setUrl("https://api.spoonacular.com/recipes/random?limitLicense=true&number=1&tags=snack,dessert&apiKey=dd5446f6f07c4707a6f376ea217c7740")
        }
    }

    const getCarouselRecipes = async () => {
        if (url){
            const result = await axios.get(url)
            console.log(result.data.recipes);
            setCarouselList(result.data.recipes);
            setIsCarouselLoading(false)
        }
    }
    useEffect(() => {
        const date = new Date()
        let time = date.getTime()
        let timezone = date.getTimezoneOffset()
        let timeDifference = timezone / 60
        let hoursSinceOrigin = Math.floor(time / 3600000)
        let hourOfDay = (hoursSinceOrigin % 24) - timeDifference
        setHourOfDay(hourOfDay)
    },[])

    useEffect(() => {
        renderBasedOnTime()
    },[hourOfDay])

    useEffect(() => {
        getCarouselRecipes()
    }
    ,[url])

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
        <div className='bg-white border border-b-0 w-full p-2 text-black rounded-t-lg'>
            <p className='text-center text-sm sm:text-base font-semibold tracking-wide'>{message}</p>
        </div>
        <div className='w-full rounded-b-lg'>
            {
                isCarouselLoading ? 
                <div className='w-full bg-slate-300 h-[500px]'></div>
                :
                <Slider {...carouselSettings}>
                {carouselList.map((item) => {
                    return <CarouselItem key={item.title} item = {item}/>
                })}
                </Slider>
            }
            
        </div>
    </div>
  )
}

export default Carousel