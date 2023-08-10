import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import MainScreen from "./MainScreen";
import "./App.css";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<LoginScreen />} />
					<Route path="/mainscreen" element={<MainScreen />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

