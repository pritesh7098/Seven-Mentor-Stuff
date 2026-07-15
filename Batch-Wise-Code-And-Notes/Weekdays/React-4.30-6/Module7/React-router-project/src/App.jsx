import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainRoutes from "./components/MainRoutes";

function App() {
  return (
    <div>
      <h1>React-Router-Project</h1>
      <br />
      <hr />
      <Navbar />
      <br />
      <hr />
      <MainRoutes />
      <br />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
