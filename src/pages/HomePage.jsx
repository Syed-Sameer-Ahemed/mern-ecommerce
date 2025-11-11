import React from "react";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import "../assets/css/styles.css";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero text-center bg-light py-5">
        <div className="container">
          <h1 className="display-5 fw-bold text-primary">
            Welcome to ShopEase
          </h1>
          <p className="lead text-secondary">
            Discover quality products at unbeatable prices.
          </p>
          <a href="/products" className="btn btn-primary btn-lg mt-3">
            Shop Now
          </a>
        </div>
      </section>

      {/* Main Sections */}
      <About />
      <Services />
      <Testimonials />
      <Reviews />
      <Footer />
    </>
  );
}

export default HomePage;
