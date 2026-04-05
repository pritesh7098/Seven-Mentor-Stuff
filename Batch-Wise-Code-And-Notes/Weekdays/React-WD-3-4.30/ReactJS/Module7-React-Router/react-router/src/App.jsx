import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainRoutes from "./components/MainRoutes";

function App() {
  return (
    <div>
      <h1>React Router DEMO </h1>
      <header>This is our header</header>
      <Navbar />
      <MainRoutes />
      <footer>This is our footer</footer>
    </div>
  );
}

export default App;
