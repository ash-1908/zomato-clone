//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

//Pages
import Home from "./Pages/Home";
import Restaurant from "./Pages/Restaurant";

//Hooks
import {Route, Redirect} from "react-router-dom";

function App() {
	return (
		<>
			<Route path="/" exact >
				<Redirect to="/delivery" /> 
			</Route>
			<HomeLayoutHOC path="/:tab" exact component={Home} />
			<RestaurantLayoutHOC path="/restaurant/:id" exact component={Restaurant} />
		</>
	);
}

export default App;
