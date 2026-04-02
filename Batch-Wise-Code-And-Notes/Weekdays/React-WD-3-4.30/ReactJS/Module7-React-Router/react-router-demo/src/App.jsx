import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { MainRoutes } from "./components/MainRoutes";

function App() {
  return (
    <div>
      <h1>React Router DEMO</h1>
      <Header />
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
