import React from 'react'

export const AppointmentCard = () => {
    return <>
        <div className="appointment-card">
            <h3>{appointment.doctorName}</h3>
            <p><strong>Patient:</strong> {appointment.patientName}</p>
            <p><strong>Date:</strong> {appointment.date}</p>
            <p><strong>Time:</strong> {appointment.time}</p>
            <p><strong>Status:</strong> {appointment.status}</p>
        </div>
    </>
}
