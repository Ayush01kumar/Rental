import React from "react";
import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <motion.div 
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 color="black">Rent the Best Cars in the City</h2>
        <p color="black">Affordable, Reliable, and Fast</p>
        <motion.a 
          href="#cars" 
          className="btn"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Explore Cars
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;