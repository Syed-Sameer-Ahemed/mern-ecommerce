import React from "react";
import "../assets/css/styles.css";

function Reviews() {
  const reviews = [
    { name: "John", rating: 5, text: "Excellent quality and service!" },
    { name: "Sara", rating: 4, text: "Loved the packaging and fast delivery." },
    { name: "Meera", rating: 5, text: "Best online store I've used so far!" },
  ];

  return (
    <section className="reviews">
      <div className="container">
        <h2>Customer Reviews</h2>
        {reviews.map((r, index) => (
          <div key={index} className="review-card">
            <h4>{r.name}</h4>
            <p>{r.text}</p>
            <span>{"⭐".repeat(r.rating)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
