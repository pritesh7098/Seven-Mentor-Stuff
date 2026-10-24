// step 3 : This comp includes routing logic for 

// Step 4 - creating and using a component whenever users click on it

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function RoutingLogic() {
  return (
    // routes and route are two diff things which compliments each other

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutingLogic;
