import React from 'react';
import "../index.css";

export const Footer = () => {
  return <>
    <div className="footer">
      <div className="footer-container">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} CareHive-Clinic App. All Rights Reserved.
        </p>

        <ul className="footer-links">
          <li>Home</li>
          <li>Doctors</li>
          <li>Appointments</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  </>
}
