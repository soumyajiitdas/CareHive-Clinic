import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const Navbar = ({ isLoggedIn, handleLogout }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/">&lt; CareHive<span>Clinic</span> /&gt;</Link>
            </div>

            {/* Hamburger Menu Button */}
            <button 
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
            >
                <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            </button>

            {/* Navigation Links */}
            <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                <li><Link to="/doctors" onClick={closeMobileMenu}>Doctors</Link></li>
                <li><Link to="/patients" onClick={closeMobileMenu}>Patients</Link></li>
                <li><Link to="/appointments" onClick={closeMobileMenu}>Appointments</Link></li>
                {!isLoggedIn ? (
                    <li><Link to="/login" onClick={closeMobileMenu}>Login</Link></li>
                ) : (
                    <li><button onClick={() => { handleLogout(); closeMobileMenu(); }}>Logout</button></li>
                )}
            </ul>
        </div>
    );
};