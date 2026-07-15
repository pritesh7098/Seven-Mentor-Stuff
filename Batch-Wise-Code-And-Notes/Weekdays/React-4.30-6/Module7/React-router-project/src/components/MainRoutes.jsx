import { Routes, Route } from "react-router-dom";

// this is the actual routing logic so whenever user clicks on any navbar component like home, about, contact it redirects to this routing logic and load the component

import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default MainRoutes;
