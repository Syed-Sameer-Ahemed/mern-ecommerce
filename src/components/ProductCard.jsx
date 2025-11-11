import React from "react";
import "../assets/css/styles.css";

function ProductCard({ name, price, image }) {
  return (
    <div className="card product-card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-success fw-bold">${price}</p>
        <button className="btn btn-primary">
          <i className="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
