import React, {useEffect, useState} from "react";

import {Link} from 'react-router-dom'

import { useDispatch } from "react-redux";

//icons
import { AiFillStar } from "react-icons/ai";

//image reducer
import {getImage} from "../../Redux/Reducer/Image/Image.Action"

const RestaurantCard = (props) => {
	const [image, setImage] = useState({
		images: []
	});

	const dispatch = useDispatch();

	useEffect(()=> {
		props.photos && dispatch(getImage(props.photos)).then((data) => 
		setImage(data.payload.image));
	}, [props.photos]);

	return (
		<Link to={`/restaurant/${props._id}`} className="w-full">
		<div className="w-full md:w-1/2 lg:w-1/3 hover:shadow-xl rounded-xl p-2 my-5 border border-transparent transition ease-in-out duration-400 hover:border-gray-200">
			<div className="relative w-full h-56 xl:h-64">
				<div className="absolute z-10 flex justify-between w-full items-end bottom-0 mb-2 text-sm text-white font-normal">
					<div className="flex flex-col">
						{props.proOffer && (
							<span className="bg-zred-500 px-1 rounded-sm mb-3">
								{props.proOffer}
							</span>
						)}
						{props.offer && (
							<span className="bg-blue-500 px-1 rounded-sm">
								{props.offer}
							</span>
						)}
					</div>
					<span className="bg-gray-100 text-gray-600 px-1 rounded mr-3 text-xs py-0.5">{props.deliveryDuration} min</span>
				</div>
				<img
					src={image.images.length && image.images[0].location}
					alt="restaurant image"
					className="w-full h-full object-cover rounded-xl relative"
				/>
			</div>
			<div className="flex justify-between my-1">
				<h4 className="font-semibold text-md">{props.name}</h4>
				<span className="flex items-center bg-green-600 w-10 rounded p-1 text-xs justify-between text-white font-bold">
					{props.restaurantreviewrating} <AiFillStar />
				</span>
			</div>
			<div className="text-sm font-base flex justify-between my-1 items-center text-gray-400">
				<p className="">{props.cuisine.length && props.cuisine.join(", ")}</p>
				<span className="">₹{props.averageCost} for one</span>
			</div>
		</div>
		</Link>
	);
};

export default RestaurantCard;
