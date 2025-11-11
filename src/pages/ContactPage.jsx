import React from "react";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <>
      <section className="page-header text-center bg-primary text-white py-5">
        <h1>Contact Us</h1>
      </section>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="p-4 shadow bg-white rounded">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
