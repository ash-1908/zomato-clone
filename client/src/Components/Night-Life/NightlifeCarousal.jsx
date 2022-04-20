import React from 'react'
import { NextArrow } from '../CustomArrows/NextArrow';
import { PrevArrow } from '../CustomArrows/PrevArrow';
import PictureCarousalCard from '../PictureCarousal'
import Slider from 'react-slick';

const NightlifeCarousal = () => {
    let settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
    responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  arrows: false,
				  swipeToSlide: true
				}
			}
		],
		
	};
  return (
    <div className='w-full mt-10'>
        {
            <Slider {...settings}>
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
            </Slider>
        }
    </div>
  )
}

export default NightlifeCarousal