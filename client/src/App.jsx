//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//Component
import Home from "./Pages/Home";

//Hooks
import {Route, Redirect} from "react-router-dom";

function App() {
	return (
		<>
			<Route path="/" exact >
				<Redirect to="/delivery" /> 
			</Route>
			<HomeLayoutHOC path="/:tab" exact component={Home} />
		</>
	);
}

export default App;
