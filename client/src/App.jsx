//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//Component
import Master from "./Components/Master";
import Re_direct from "./Components/Re_direct";

//Hooks
import {Route} from "react-router-dom";

function App() {
	return (
		<>
			<Route path="/" exact component={Re_direct} />
			<HomeLayoutHOC path="/:tab" exact component={Master} />
		</>
	);
}

export default App;
