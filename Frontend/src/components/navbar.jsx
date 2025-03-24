import React from "react";
import { motion } from "framer-motion";
import "./navbar.css";

const Navbar = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="navbar"
    >
      <h1 className="logo">MY CAR RENTALS</h1>
      <nav>
        <ul className="nav-links">
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
            <a href="#home">Home</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
            <a href="#cars">Cars</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
            <a href="#pricing">Pricing</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
