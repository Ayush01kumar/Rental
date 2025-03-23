import React, { useState } from "react";
import "./contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
    } else {
      alert("Thank you for contacting us! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
        
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
