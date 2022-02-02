import React, { useState } from "react";

//components
import Carousal from "./Carousal";
import RestaurantCard from "./RestaurantCard";

const Delivery = () => {
	const [restaurantList, setRestaurantList] = useState([
		{
			name: "Bhawna Sweets",
			photos: [
				"https://b.zmtcdn.com/data/pictures/9/3401239/65840c3566f0e9a6cc7d265834f19cce.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
			],
			restaurantreviewrating: 3.8,
			cuisine: ["Mithai", "Deserts", "Bakery"],
			averageCost: 300,
		},
    {
			name: "Bhawna Sweets",
			photos: [
				"https://b.zmtcdn.com/data/pictures/9/3401239/65840c3566f0e9a6cc7d265834f19cce.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
			],
			restaurantreviewrating: 3.8,
			cuisine: ["Mithai", "Deserts", "Bakery"],
			averageCost: 300,
		},
    {
			name: "Bhawna Sweets",
			photos: [
				"https://b.zmtcdn.com/data/pictures/9/3401239/65840c3566f0e9a6cc7d265834f19cce.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
			],
			restaurantreviewrating: 3.8,
			cuisine: ["Mithai", "Deserts", "Bakery"],
			averageCost: 300,
		},
	]);
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
