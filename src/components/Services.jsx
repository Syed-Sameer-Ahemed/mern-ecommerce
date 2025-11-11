import React from "react";
import "../assets/css/styles.css";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service">
            <i className="fa-solid fa-truck-fast fa-2x mb-3"></i>
            <h5>Fast Delivery</h5>
            <p>Get your orders delivered quickly and safely right to your door.</p>
          </div>
          <div className="service">
            <i className="fa-solid fa-rotate-left fa-2x mb-3"></i>
            <h5>Easy Returns</h5>
            <p>Return or exchange products easily with our hassle-free policy.</p>
          </div>
          <div className="service">
            <i className="fa-solid fa-headset fa-2x mb-3"></i>
            <h5>24/7 Support</h5>
            <p>Our support team is always available to assist you anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
