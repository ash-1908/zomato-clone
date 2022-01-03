//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//Component
import Temp from "./Components/Temp.Component";

//Libraries

function App() {
	return (
		<>
			<HomeLayoutHOC path="/" exact component={Temp} />
		</>
	);
}

export default App;
