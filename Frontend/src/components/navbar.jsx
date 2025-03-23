import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <h1>MY CAR RENTALS</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#cars">Cars</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
