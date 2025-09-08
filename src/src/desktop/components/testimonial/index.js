import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials mt-5">
      {/* Left Column */}
      <div className="left-col col-md-4">
        <span className="badge">Testimonials</span>
        <h2>What our customers are saying.</h2>
        <div className="nav-buttons">
          <button className="btn-outline">
            <FaArrowLeft />
          </button>
          <button className="btn-filled">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Middle Card */}
      <div className="testimonial-card dark col-md-4">
        <span className="quote">“</span>
        <p>
          "AI Your Rhythm transformed my music creation. It understood my style
          and provided new ideas, like a creative partner 24/7!"
        </p>
        <h4>Alex R.</h4>
        <small>Indie Musician</small>
      </div>

      {/* Right Card (placeholder) */}
      <div className="testimonial-card light">
        <div className="placeholder"></div>
        <h4>Max L</h4>
        <small>Bedroom Producer</small>
      </div>
    </section>
  );
};

export default Testimonials;
