import React from "react";

//Navbar
import Navbar from "../Components/Navbar";

//FoodTab
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
	return <>
			<header className="container mx-auto lg:px-40 lg:border-b lg:border-gray-100">
				<Navbar/>
				<FoodTab />
			</header>
			<div className="container mx-auto px-5 lg:px-40">
				{props.children}
			</div>
	</>;
};

export default HomeLayout;
