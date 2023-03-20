import React from "react";
import "../../styles/home.css";
import Characters from "../component/characters.jsx";
import Planets from "../component/planets.jsx";

export const Home = () => (
	<>
	<div className="container">
		<h1>Planets</h1>
		<div className="card-group">
			<Planets />
		</div>
	</div>
	<div className="container">
			<h1>Characters</h1>
			<div className="card-group">
				<Characters />
			</div>
	</div>
	</>
);
