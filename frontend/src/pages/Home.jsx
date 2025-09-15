import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => {
  return <>
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Welcome to <span>CareHive Clinic !</span></h1>
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
          </div>
          <div className="hero-img">
            <img src="https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?w=600&auto=format" alt="Doctor" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose <span>CareHive?</span></h2>
        <div className="why-item">
          <img src="https://images.unsplash.com/photo-1617080090911-91409e3496ad?w=300&auto=format" alt="Doctors" />
          <div className="why-text">
            <h3><span>1.</span> Experienced <span>Specialists</span></h3>
            <p>Get expert guidance from certified doctors across multiple fields. Our team is committed to delivering care that’s accurate, reliable, and personalized.</p>
          </div>
        </div>
        <div className="why-item reverse">
          <img src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?w=300&auto=format" alt="Appointments" />
          <div className="why-text">
            <h3><span>2.</span> Seamless <span>Appointments</span></h3>
            <p>Book consultations in just a few clicks. Skip the waiting lines—healthcare that fits into your schedule.</p>
          </div>
        </div>
        <div className="why-item">
          <img src="https://images.unsplash.com/photo-1531341406-2b466854b914?w=300&auto=format" alt="Support" />
          <div className="why-text">
            <h3><span>3.</span> 24/7 <span>Support</span></h3>
            <p>From booking to follow-ups, our support team is here around the clock to ensure your healthcare journey is smooth and stress-free.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our <span>Services:</span></h2>
        <div className="services-grid">
          <div className="service-card">💻 Online Consultations</div>
          <div className="service-card">📄 Digital Prescriptions</div>
          <div className="service-card">📊 Health Records</div>
          <div className="service-card">🧪 Lab Test Bookings</div>
        </div>
      </section>

      {/* Follow Us */}
      <section className="follow-us">
        <div className="follow-inner">
          <h2>Stay <span>Connected:</span></h2>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button type="submit" className="btn">Subscribe</button>
          </form>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </section>

    </div>

  </>
}

