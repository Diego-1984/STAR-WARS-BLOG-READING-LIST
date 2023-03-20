import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 bg-black">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-2 text-white">Star Wars</span>
			</Link>
			<div className="ml-auto mx-2">
				<Link to="/demo">
					<Dropdown/>
				</Link>
			</div>
		</nav>
	);
};
