import React from "react";
import Navigation from "./components/Navigation"
import MainRoutes from "./components/MainRoutes";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <div>
      <h1>React Router session</h1>
      <br />
      <hr />
      <Navigation />
      <br />
      <hr />
      <MainRoutes />
      <br />
      <br /><hr />
      <Footer />
    </div>
  );
}

export default App;
