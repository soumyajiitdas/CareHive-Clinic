import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = ({ isLoggedIn, handleLogout }) => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/">&lt; CareHive<span>Clinic</span> /&gt;</Link>
            </div>

            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/doctors">Doctors</Link></li>
                <li><Link to="/patients">Patients</Link></li>
                <li><Link to="/appointments">Appointments</Link></li>
                {!isLoggedIn ? (
                    <li><Link to="/login">Login</Link></li>
                ) : (
                    <li><button onClick={handleLogout}>Logout</button></li>
                )}
            </ul>
        </div>
    );
};