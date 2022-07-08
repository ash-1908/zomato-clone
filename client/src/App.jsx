//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
import CheckoutLayoutHOC from "./HOC/Checkout.HOC";

//Pages
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import GoogleAuth from "./Pages/GoogleAuth";

//Restaurant Pages
import Overview from "./Pages/Restaurant/Overview";
import OrderOnline from "./Pages/Restaurant/OrderOnline";
import Reviews from "./Pages/Restaurant/Reviews";
import Menu from "./Pages/Restaurant/Menu"
import Photos from "./Pages/Restaurant/Photos";

//Hooks
import {Route, Redirect} from "react-router-dom";

//Components
import restaurantRedirect from "./Components/Restaurant/Redirect"

import { useDispatch, useSelector } from "react-redux";

//redux action
import { getMyself } from "./Redux/Reducer/User/User.action";

import axios from "axios";

import { useEffect } from "react";

//axios global settings
if(localStorage.zomatoUser){
	const {token} = JSON.parse(localStorage.zomatoUser);
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


function App() {
	const reduxState = useSelector(globalStore => globalStore.user.user);

	const dispatch = useDispatch();

	useEffect(()=> {
		if(localStorage.zomatoUser) {
			dispatch(getMyself());
		}
	}, [reduxState])

	return (
		<>
			<Route path="/" exact >
				<Redirect to="/delivery" /> 
			</Route>
			<Route path="/restaurant/:id" exact component={restaurantRedirect}/>
				
			<HomeLayoutHOC path="/:tab" exact component={Home} />
			<HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />
			<RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Overview} />
			<RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={OrderOnline} />
			<RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Photos} />
			<RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Reviews} />
			<RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Menu} />
			<CheckoutLayoutHOC path="/order/checkout" exact component={Checkout} />
		</>
	);
}

export default App;
