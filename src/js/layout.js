import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import Home from "./views/home";
import injectContext from "./store/appContext";
import Vistadetalleplaneta from "./component/vistadetalleplaneta.jsx";
import Vistadetallepersonaje from "./component/vistadetallepersonaje.jsx";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people/:id" element={<Vistadetallepersonaje />} />
            <Route path="/planets/:id" element={<Vistadetalleplaneta />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
