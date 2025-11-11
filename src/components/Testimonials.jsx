import React from "react";
import "../assets/css/styles.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Ayesha",
      text: "Amazing products and super fast delivery!",
    },
    {
      name: "Rahul",
      text: "ShopEase made online shopping so much easier!",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p>"{t.text}"</p>
            <span>- {t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
