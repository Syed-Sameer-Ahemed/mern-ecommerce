import React from "react";
import Services from "../components/Services";
import Footer from "../components/Footer";

function ServicesPage() {
  return (
    <>
      <section className="page-header text-center bg-primary text-white py-5">
        <h1>Our Services</h1>
      </section>
      <Services />
      <Footer />
    </>
  );
}

export default ServicesPage;
