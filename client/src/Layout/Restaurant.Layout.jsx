import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux"

//components
import RestaurantNavbar from '../Components/Restaurant/Navbar'
import ImageGrid from '../Components/Restaurant/ImageGrid'
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo'
import InfoButtons from '../Components/Restaurant/InfoButtons'
import TabContainer from '../Components/Restaurant/Tabs'
import CartContainer from '../Components/Cart/CartContainer'

//icons
import { AiOutlineStar, AiOutlineShareAlt } from "react-icons/ai"
import { RiDirectionLine } from "react-icons/ri"
import { BsBookmarkPlus } from "react-icons/bs"

// Redux actions
import { getSpecificRestaurant } from "../Redux/Reducer/Restaurant/Restaurant.action"
import { getImage } from "../Redux/Reducer/Image/Image.Action"
import { getCart } from '../Redux/Reducer/Cart/Cart.Action'

const RestaurantLayout = (props) => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const [restaurant, setRestaurant] = useState({
		images: [],
		name: "",
		cuisine: "",
		address: "",
		restaurantTimings: ""
	});

	useEffect(() => {
		dispatch(getSpecificRestaurant(id)).then((data) => {

			setRestaurant((prev) => ({
				...prev,
				...data.payload.restaurant
			}));

			dispatch(getImage(data?.payload?.restaurant?.photos)).then(data => setRestaurant(prev => (
				{
					...prev,
					...data.payload.image
				})));
		});

		dispatch(getCart());
	}, []);

	return (
		<>
			<header className="container mx-auto xl:px-40 lg:border-b lg:border-gray-100">
				<RestaurantNavbar />
			</header>
			<div className="container mx-auto px-5 xl:px-40 pb-10">
				<ImageGrid
					images={restaurant.images} />

				<RestaurantInfo
					restaurantName={restaurant.name}
					restaurantRating={restaurant.rating || 0}
					deliveryRating={restaurant.rating || 0}
					cuisine={restaurant.cuisine}
					address={restaurant.address}
					restaurantTimings={restaurant.restaurantTimings} />

				<div className='flex flex-wrap'>
					<InfoButtons isActive><AiOutlineStar className='mr-1' />Add Review</InfoButtons>
					<InfoButtons ><RiDirectionLine className='mr-1' />Direction</InfoButtons>
					<InfoButtons ><BsBookmarkPlus className='mr-1' />Bookmark</InfoButtons>
					<InfoButtons ><AiOutlineShareAlt className='mr-1' />Share</InfoButtons>
				</div>
				<div className='my-3'>
					<TabContainer />
				</div>
				{props.children}
			</div>
			<CartContainer />
		</>
	)
}

export default RestaurantLayout