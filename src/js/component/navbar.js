import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 bg-black">
			<Link to="/">
				<span className="navbar mb-0 h1 mx-2 text-white mx-3"><img width="100" height="50" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"></img></span>
			</Link>
			<div className="ml-auto mx-3">
				<Dropdown/>
			</div>
		</nav>
	);
};
