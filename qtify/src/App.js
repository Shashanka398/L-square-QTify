import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import NavBar  from "./components/NavBar/NavBar";
import "./index.css"
function App() {
	return (
		<div className="App">
			<NavBar/>
		</div>
	);
}

export default App;
