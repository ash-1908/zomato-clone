import React from 'react';
import Slider from 'react-slick';

//components
import Category from './Category';
import {NextArrow} from '../CustomArrows/NextArrow';
import {PrevArrow} from '../CustomArrows/PrevArrow';

const Carousal = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const categories = [
    {
      image: "https://b.zmtcdn.com/data/homepage_dish_data/4/7cf2db5ec261a0fa27a502d3196a6f60.png",
      title: "Pizza"
    },
    {
      image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      title: "Burger"
    },
    {
      image: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
      title: "Rolls"
    },
    {
      image: "https://b.zmtcdn.com/data/homepage_dish_data/4/d9452952b432b35d1019ada01cedce7f.png",
      title: "Chaat"
    },
    {
      image: "https://b.zmtcdn.com/data/homepage_dish_data/4/9ab7b145bc19095dac6b18cf02bb958e.png",
      title: "Momos"
    },
    {
      image: "https://b.zmtcdn.com/data/homepage_dish_data/2/78261817faa51e9456cfab592c189a62.png",
      title: "Cake"
    },
    {
      image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      title: "Chicken"
    },
    {
      image: "https://b.zmtcdn.com/data/homepage_dish_data/2/96622ce1309d6ff6047c1965b8a22a5e.png",
      title: "Samosa"
    },
    {
      image: "https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
      title: "Fries"
    },
    {
      image: "https://b.zmtcdn.com/data/homepage_dish_data/2/d541098e14dd80d1a17a08594aa43460.png",
      title: "Noodles"
    },
    {
      image: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
      title: "Paneer"
    },
    {
      image: "https://b.zmtcdn.com/data/homepage_dish_data/4/98a5f537c46e6a2bcd1066ec72b9a612.png",
      title: "Soup"
    }
  ]

  return (
  <>
    
    {/* div for background color */}<div className='hidden md:block absolute left-0 bg-greyy-100 w-full -z-50 h-60' />

    <h1 className='relative text-xl text-left font-semibold md:text-4xl my-5'>
      Inspiration for your first order
    </h1>
    
      {/* small screen flex category starts */}
    <div className='md:hidden flex flex-wrap my-3 md:my-6 justify-around'>
      {categories.map((category) => (
        <Category {...category} />
      ))}
    </div>
      {/* small screen flex category end */}
      
      {/* category carousal */}
    <div className='hidden md:block'>
        <Slider {...settings}>
        {categories.map((category) => (
        <Category {...category} />
      ))}
        </Slider>
    </div>
      {/* carousal ends */}
    
  </>);
};

export default Carousal;
