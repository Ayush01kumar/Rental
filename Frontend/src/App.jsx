import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cars />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
