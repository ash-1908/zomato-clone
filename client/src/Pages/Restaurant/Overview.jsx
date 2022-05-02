import React from 'react';
import { Link } from 'react-router-dom'

import Slider from 'react-slick';

//icons
import { BiRightArrowAlt } from "react-icons/bi"

//components
import ImageCollection from "../../Components/Restaurant/ImageCollection"
import SimilarRestaurantCard from '../../Components/Restaurant/SimilarRestaurantCard';
import { PrevArrow } from '../../Components/CustomArrows/PrevArrow';
import { NextArrow } from '../../Components/CustomArrows/NextArrow';
import ReactStars from 'react-rating-stars-component';
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';
import MapView from '../../Components/Restaurant/MapView';


const Overview = () => {
	let settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <NextArrow bgWhite='true' />,
		prevArrow: <PrevArrow bgWhite='true' />,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			}
		],
	};
	const ratingChanged = (newRating) => {
		console.log(newRating);
	};
	return (
		<>
			<div className='flex flex-col md:flex-row'>
				<div className='w-full md:w-8/12'>
					<h2 className='font-base text-lg md:text-xl my-5'>About this place</h2>
					<div className='flex justify-between items-center mb-5'>
						<h3 className='font-base text-lg'>Menu</h3>
						<Link to='menu'>
							<span className='flex items-center text-sm font-semibold text-zred-400'>See all menus <BiRightArrowAlt className='' /></span>
						</Link>
					</div>
					<div className='flex flex-wrap gap-2'>
						<ImageCollection title="Menu" pages="3" url="https://b.zmtcdn.com/data/menus/003/19954003/4f253d50d29c0d6e272cdb3916962b90.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" alt="Menu" />
					</div>
					<h4 className='font-base text-lg md:text-xl my-5'>
						Cuisines
					</h4>
					<div className='flex flex-wrap gap-2'>
						<span className='border rounded-full text-blue-400 py-1 px-2 border-gray-400'>Street Food</span>
						<span className='border rounded-full text-blue-400 py-1 px-2 border-gray-400'>Street Food</span>
						<span className='border rounded-full text-blue-400 py-1 px-2 border-gray-400'>Street Food</span>
					</div>
					<div className='my-5'>
						<h4 className='font-base text-lg md:text-xl'>
							Average Cost
						</h4>
						<h6 className='mt-4 font-light text-md'>Rs 100 for one order (approx.)</h6>
						<small className='text-gray-500 font-light text-sm'>Exclusive of applicable taxes and charges, if any</small>
					</div>
					<div className='my-5'>
						<h4 className='font-base text-lg md:text-xl mb-5'>Similar Restaurants</h4>
						<Slider {...settings}>
							<SimilarRestaurantCard image="https://b.zmtcdn.com/data/reviews_photos/b37/721bd509b6544fb1819e835a5d9fbb37_1598631456.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
								title="Pizza" />
							<SimilarRestaurantCard image="https://b.zmtcdn.com/data/reviews_photos/b37/721bd509b6544fb1819e835a5d9fbb37_1598631456.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
								title="Pizza" />
							<SimilarRestaurantCard image="https://b.zmtcdn.com/data/reviews_photos/b37/721bd509b6544fb1819e835a5d9fbb37_1598631456.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
								title="Pizza" />
							<SimilarRestaurantCard image="https://b.zmtcdn.com/data/reviews_photos/b37/721bd509b6544fb1819e835a5d9fbb37_1598631456.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
								title="Pizza" />
							<SimilarRestaurantCard image="https://b.zmtcdn.com/data/reviews_photos/b37/721bd509b6544fb1819e835a5d9fbb37_1598631456.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
								title="Pizza" />
							<SimilarRestaurantCard image="https://b.zmtcdn.com/data/reviews_photos/b37/721bd509b6544fb1819e835a5d9fbb37_1598631456.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
								title="Pizza" />
						</Slider>
					</div>
					<div className='mt-7 mb-5'>
						<h4 className='font-base text-lg md:text-xl'>Rate your delivery experience</h4>
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={36}
							activeColor="#ffd700"
						/>
					</div>
					<div className='md:hidden w-full my-5'>
						<MapView restaurantName="Rahil Restaurant" phoneNo='1234567890' mapLocation={[25.266404618793338, 82.98079182248115]} address='A-64, Kashiraj Apartments, Kamachha, Varanasi'/>
					</div>
					<div className='mt-10 md:mt-7 md:mb-5'>
						<ReviewCard />
						<ReviewCard />
						<ReviewCard />
					</div>
				</div>
				<aside style={{ height: 'fit-content' }} className='hidden md:block md:w-4/12 sticky shadow-xl p-3'>
					<MapView restaurantName="Rahil Restaurant" phoneNo='1234567890' mapLocation={[25.266404618793338, 82.98079182248115]} address='A-64, Kashiraj Apartments, Kamachha, Varanasi'/>
				</aside>
			</div>
		</>
	);
};

export default Overview;
