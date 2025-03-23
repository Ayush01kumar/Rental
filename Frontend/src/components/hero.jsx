import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section id="home">
      <div className="hero">
        <h2>Rent the Best Cars in the City</h2>
        <p>Affordable, Reliable, and Fast</p>
        <a href="#cars" className="btn">Explore Cars</a>
      </div>
    </section>
  );
};

export default Hero;
