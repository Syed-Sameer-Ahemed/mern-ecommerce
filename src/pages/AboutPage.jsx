import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <section className="page-header text-center bg-primary text-white py-5">
        <h1>About Us</h1>
      </section>
      <About />
      <Footer />
    </>
  );
}

export default AboutPage;
