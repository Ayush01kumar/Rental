import React from "react";
import car1 from "../assets/Car11.webp";
import car2 from "../assets/car22.webp";
import car3 from "../assets/car33.webp";
import car4 from "../assets/car44.webp";
import car5 from "../assets/car55.webp";
import car6 from "../assets/car6.webp";
import car7 from "../assets/car7.jpg";
import "./cars.css";

const carData = [
  { img: car1, name: "Sedan", desc: "Comfortable and stylish for city rides." },
  { img: car2, name: "SUV", desc: "Perfect for family trips." },
  { img: car3, name: "Hatchback", desc: "Perfect for fun trips." },
  { img: car4, name: "Prime Sedan", desc: "For a comfortable family ride." },
  { img: car5, name: "4X4 Offroad", desc: "Perfect for friends' offroading." },
  { img: car6, name: "Coupe", desc: "Perfect for couple long drives." },
  { img: car7, name: "Tourist Van", desc: "Perfect for full family trip." }
];

const Cars = () => {
  const handleRent = (name) => {
    alert(`You have selected the ${name}. Proceed to checkout.`);
  };

  return (
    <section id="cars">
      <h2>Our Fleet</h2>
      <div className="car-grid">
        {carData.map((car, index) => (
          <div key={index} className="car-card">
            <img src={car.img} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.desc}</p>
            <button onClick={() => handleRent(car.name)}>Rent Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cars;
