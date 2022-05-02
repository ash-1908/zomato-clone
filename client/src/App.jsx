//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

//Pages
import Home from "./Pages/Home";

//Restaurant Pages
import Overview from "./Pages/Restaurant/Overview";
import OrderOnline from "./Pages/Restaurant/OrderOnline";

//Hooks
import {Route, Redirect} from "react-router-dom";

function App() {
	return (
		<>
			<Route path="/" exact >
				<Redirect to="/delivery" /> 
			</Route>
			<Route path="/restaurant/:id" exact>
				<Redirect to="/restaurant/:id/overview" /> 
			</Route>
			<HomeLayoutHOC path="/:tab" exact component={Home} />
			<RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Overview} />
			<RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={OrderOnline} />
			<RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Overview} />
			<RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Overview} />
			<RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Overview} />
		</>
	);
}

export default App;
