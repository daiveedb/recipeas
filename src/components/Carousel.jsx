import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import breakfast from "../projectSvgs/breakfast.jpg"

const Carousel = () => {

    const [carouselList, setCarouselList] = useState([
        {
            title: 'Freshly Baked Banana Bread',
            readyInMinutes: 45,
            image: breakfast,
            summary:"Get the best banana bread all withing less than an hour from when you start cooking. Get the full information on how to prepare this amazing meal when you click on the button below. What are you waiting for nigaaaaaa "
        }
    ])
    const [isCarouselLoading, setIsCarouselLoading] = useState(false)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // enable autoplay
        autoplaySpeed: 5000, // set autoplay speed to 5 seconds
      };

    const apiKey = "dd5446f6f07c4707a6f376ea217c7740"
    let url = "https://api.spoonacular.com/recipes/random?limitLicense=true&number=1&tags=breakfast&apiKey=dd5446f6f07c4707a6f376ea217c7740"



    const GetCarouselRecipes = async () => {
        const result = await axios.get(url)
        console.log(result.data.recipes);
        setCarouselList(result.data.recipes);
        setIsCarouselLoading(false)
    }

    // useEffect(()=> GetCarouselRecipes,[])

  return (
    <div className="px-32">
        <div className='bg-white border border-b-0 w-full p-2 text-black rounded-t-lg'>
            <p className='text-center font-semibold tracking-wide'>Good Morning, Breakfast Ideas?</p>
        </div>
        <div className='w-full rounded-b-lg'>
            {
                isCarouselLoading ? 
                <div className='w-full bg-slate-300 h-[500px]'>

                </div>
                :
                <Slider {...settings}>
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