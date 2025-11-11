import React from "react";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function ProductsPage() {
  const products = [
    { name: "Wireless Headphones", price: 59.99, image: "/images/products/headphones.jpg" },
    { name: "Smart Watch", price: 89.99, image: "/images/products/smartwatch.jpg" },
    { name: "Bluetooth Speaker", price: 39.99, image: "/images/products/speaker.jpg" },
    { name: "Fitness Tracker", price: 45.99, image: "/images/products/tracker.jpg" },
  ];

  return (
    <>
      <section className="page-header text-center bg-primary text-white py-5">
        <h1>Our Products</h1>
      </section>

      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {products.map((item, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <ProductCard name={item.name} price={item.price} image={item.image} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductsPage;
