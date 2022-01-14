import React from "react";

//Navbar
import Navbar from "../Components/Navbar";

//FoodTab
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
	return <>
			<header className="lg:container lg:mx-auto lg:px-56 lg:border-b lg:border-gray-100">
				<Navbar/>
				<FoodTab />
			</header>
			<div className="container mx-auto px-4 lg:px-56">
				{props.children}
			</div>
	</>;
};

export default HomeLayout;
