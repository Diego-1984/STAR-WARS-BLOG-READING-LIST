import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Geonosis = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col-6"><img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="Card image cap" /></div>
				<div className="col-6">
					<h1>Geonosis</h1>
					<p1>Geonosis, referred to as Geonosia by some natives, was the desert home planet of the Geonosians. It was the Confederacy of Independent Systems' first capital and hosted its major battle droid foundries. It was the site of the First Battle of Geonosis, the opening conflict of the Clone Wars, as well as the subsequent invasion by the Galactic Republic. During and after the war, the Death Star was constructed above the planet. Five years after the conflict's conclusion and transformation of the Galactic Republic, the Galactic Empire would garrison the planet heavily and attempt to mine the planet's asteroids for minerals. At least five years after the Clone Wars, the Empire moved the Death Star to another construction site and the planet was sterilized by the Empire as a security measure, an act which resulted in the virtual elimination of the planet's native population.</p1>
				</div>
			</div>
			
		</div>
	);
};
