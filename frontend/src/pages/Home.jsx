import React from 'react'

export const Home = () => {
    return <>
        <div className="home">
            <header className="home-header">
                <h1>Welcome to ClinicApp</h1>
                <p>Your trusted online doctor appointment system.</p>
            </header>

            <section className="home-actions">
                <button className="home-btn">View Doctors</button>
                <button className="home-btn">Patient Dashboard</button>
                <button className="home-btn">Book Appointment</button>
                <button className="home-btn">Login</button>
            </section>
        </div>
    </>
}

