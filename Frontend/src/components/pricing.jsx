import React from "react";
import "./pricing.css";

const pricingPlans = [
  { name: "Basic", price: "500/day" },
  { name: "Standard", price: "980/day" },
  { name: "Premium", price: "2000/day" }
];

const Pricing = () => {
  const handlePlanSelection = (plan) => {
    alert(`You have selected the ${plan} plan.`);
  };

  return (
    <section id="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-table">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="plan">
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <button onClick={() => handlePlanSelection(plan.name)}>Select Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
