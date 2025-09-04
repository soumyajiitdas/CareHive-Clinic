import React from 'react'

export const Navbar = () => {
    return <>
        <div className="navbar">
            <div className="nav-logo">
                &lt; CareHive Clinic /&gt;
            </div>

            <ul className="nav-links">
                <li>Home</li>
                <li>Doctors</li>
                <li>Patients</li>
                <li>Appointments</li>
                <li>Login</li>
            </ul>
        </div>
    </>
}

