import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

//components
import Carousal from "./Carousal";
import RestaurantCard from "./RestaurantCard";

const Delivery = () => {
	const [restaurantList, setRestaurantList] = useState([]);

	const reduxState = useSelector((globalStore) => globalStore.restaurant.restaurants);

	useEffect(()=> {
		reduxState.restaurants && setRestaurantList(reduxState.restaurants)
	}, [reduxState.restaurants])
	return (
		<>
			<Carousal />
			<div className="md:flex md:flex-wrap">
				{restaurantList.map((restaurant) => (
					<RestaurantCard {...restaurant} />
				))}
			</div>
		</>
	);
};

export default Delivery;




// {
// 	name: "Bhawna Sweets",
// 	photos: [
// 		"https://b.zmtcdn.com/data/pictures/9/3401239/65840c3566f0e9a6cc7d265834f19cce.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
// 	],
// 	restaurantreviewrating: 3.8,
// 	cuisine: ["Mithai", "Deserts", "Bakery"],
// 	averageCost: 300,
// 	offer: "60% OFF",
// 	deliveryDuration: 54
// },
// {
// 	name: "Bhawna Sweets",
// 	photos: [
// 		"https://b.zmtcdn.com/data/pictures/9/3401239/65840c3566f0e9a6cc7d265834f19cce.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
// 	],
// 	restaurantreviewrating: 3.8,
// 	cuisine: ["Mithai", "Deserts", "Bakery"],
// 	averageCost: 300,
// 	offer: "10% OFF",
// 	deliveryDuration: 34
// },
// {
// 	name: "Bhawna Sweets",
// 	photos: [
// 		"https://b.zmtcdn.com/data/pictures/9/3401239/65840c3566f0e9a6cc7d265834f19cce.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
// 	],
// 	restaurantreviewrating: 3.8,
// 	cuisine: ["Mithai", "Deserts", "Bakery"],
// 	averageCost: 300,
// 	offer: "BUY 1 GET 1",
// 	deliveryDuration: 23
// },
// {
// 	name: "Bhawna Sweets",
// 	photos: [
// 		"https://b.zmtcdn.com/data/pictures/9/3401239/65840c3566f0e9a6cc7d265834f19cce.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
// 	],
// 	restaurantreviewrating: 3.8,
// 	cuisine: ["Mithai", "Deserts", "Bakery"],
// 	averageCost: 300,
// 	offer: "20% OFF",
// 	deliveryDuration: 44
// },
// {
// 	name: "Bhawna Sweets",
// 	photos: [
// 		"https://b.zmtcdn.com/data/pictures/9/3401239/65840c3566f0e9a6cc7d265834f19cce.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
// 	],
// 	restaurantreviewrating: 3.8,
// 	cuisine: ["Mithai", "Deserts", "Bakery"],
// 	averageCost: 300,
// 	proOffer: "Pro extra 60% OFF",
// 	offer: "60% OFF",
// 	deliveryDuration: 54
// }