import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import { Home } from "./views/home";
import { Geonosis } from "./views/geonosis";
import { Cantonica } from "./views/cantonica";
import { Anoat } from "./views/anoat";
import { Crait } from "./views/crait";
import { R2d2 } from "./views/r2d2";
import { C3po } from "./views/c3po";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Luck } from "./views/luck";
import { Leia } from "./views/leia";





//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/geonosis" element={<Geonosis />} />
						<Route path="/cantonica" element={<Cantonica />} />
						<Route path="/anoat" element={<Anoat />} />
						<Route path="/crait" element={<Crait />} />
						<Route path="/r2d2" element={<R2d2 />} />
						<Route path="/c3po" element={<C3po />} />
						<Route path="/luck" element={<Luck />} />
						<Route path="/leia" element={<Leia />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
