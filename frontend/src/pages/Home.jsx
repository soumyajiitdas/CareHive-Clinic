import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => {
  return <>
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to <span>CareHive Clinic</span></h1>
        <p>
          Your trusted partner in online healthcare.
          Book appointments, connect with expert doctors,
          and manage your health records—all in one place.
          We make quality care simple, fast, and accessible.
        </p>
        <div className="hero-buttons">
          <Link to="/doctors" className="btn">Find a Doctor</Link>
          <Link to="/appointments" className="btn btn-secondary">Book Appointment</Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <h2>Why Choose <span>CareHive?</span></h2>

        <div className="why-item">
          <img src="https://images.unsplash.com/photo-1617080090911-91409e3496ad" alt="Doctors" />
          <div className="why-text">
            <h3>Experienced Specialists</h3>
            <p>
              Get expert guidance from certified doctors across multiple fields.
              Our team is committed to delivering care that’s accurate, reliable, and personalized.
            </p>
          </div>
        </div>

        <div className="why-item reverse">
          <img src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?w=500&auto=format" alt="Appointments" />
          <div className="why-text">
            <h3>Seamless Appointments</h3>
            <p>
              Book consultations in just a few clicks.
              Skip the waiting lines—healthcare that fits into your schedule.
            </p>
          </div>
        </div>

        <div className="why-item">
          <img src="https://images.unsplash.com/photo-1531341406-2b466854b914" alt="Support" />
          <div className="why-text">
            <h3>24/7 Support</h3>
            <p>
              From booking to follow-ups, our support team is here around the clock
              to ensure your healthcare journey is smooth and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="follow-us">
        <h2>Stay Connected...</h2>
        <p>Follow us for health tips, updates, and more.</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

    </div>

  </>
}

