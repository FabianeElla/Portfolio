import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Sobre from "./Sobre";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Footer from "./Footer";

function App() {
  return (
    <div className="center">
      <Navbar />
      <Home />
      <Sobre />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
