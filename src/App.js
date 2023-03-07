import React from "react";
import About from "./components/About";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div> 
  );
}

export default App;
