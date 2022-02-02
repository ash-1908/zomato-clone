import React from "react";
//icons
import { AiFillStar } from "react-icons/ai";

const RestaurantCard = (props) => {
	return (
		<div className="w-full md:w-1/2 lg:w-1/3 hover:shadow-xl rounded-xl p-2 my-5 border border-transparent transition ease-in-out duration-400 hover:border-gray-200">
			<div className="relative w-full h-56 xl:h-64">
				<div className="absolute z-10 flex justify-between w-full items-end bottom-0 mb-2 text-sm text-white font-normal">
          <div className="flex flex-col">
            <span className="bg-zred-500 px-1 rounded-sm mb-3">
              Pro extra 60% OFF
            </span>
            <span className="bg-blue-500 px-1 rounded-sm">
              60% OFF
            </span>
          </div>
          <span className="bg-gray-100 text-gray-600 px-1 rounded mr-3 text-xs py-0.5">52 min</span>
        </div>
				<img
					src={props.photos[0]}
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
	);
};

export default RestaurantCard;
