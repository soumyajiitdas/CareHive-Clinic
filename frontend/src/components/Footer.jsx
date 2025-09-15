import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
  return <>
    <div className="footer">
      <div className="footer-container">

        {/* Column 1 - Brand */}
        <div className="footer-col">
          <h3>CareHive<span>Clinic</span></h3>
          <p>
            Your trusted partner for online healthcare.
            Easy appointments, expert doctors, and
            support you can count on—anytime, anywhere.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/appointments">Appointments</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact & Social */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>Email: support@carehiveclinic.com</p>
          <p>Phone: +91 00000 00000</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CareHive Clinic. All Rights Reserved.</p>
        <p>●</p>
        <p>Crafted with ❤️ & care by Stark-Coders 👨🏻‍💻</p>
      </div>
    </div>

  </>
}
