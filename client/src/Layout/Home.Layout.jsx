import React, {useEffect} from "react";

//Navbar
import Navbar from "../Components/Navbar";

//FoodTab
import FoodTab from "../Components/FoodTab";
import { useDispatch } from "react-redux";
import { getCart } from "../Redux/Reducer/Cart/Cart.Action";

const HomeLayout = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCart());
	}, [])
	
	return <>
			<header className="container mx-auto xl:px-40 lg:border-b lg:border-gray-100">
				<Navbar/>
				<FoodTab />
			</header>
			<div className="container mx-auto px-5 xl:px-40">
				{props.children}
			</div>
	</>;
};

export default HomeLayout;
