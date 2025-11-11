import React from "react";
import Footer from "../components/Footer";

function CartPage() {
  const cartItems = [
    { name: "Wireless Headphones", price: 59.99, quantity: 1 },
    { name: "Smart Watch", price: 89.99, quantity: 2 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <section className="page-header text-center bg-primary text-white py-5">
        <h1>Your Shopping Cart</h1>
      </section>

      <div className="container py-5">
        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center bg-white shadow-sm">
            <thead className="table-primary">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-end mt-3">
          <h5>Grand Total: ${total.toFixed(2)}</h5>
          <button className="btn btn-success mt-2">
            Proceed to Checkout
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CartPage;
