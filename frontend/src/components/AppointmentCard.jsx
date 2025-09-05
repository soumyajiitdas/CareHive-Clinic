import React from 'react';

const AppointmentCard = ({ appointment }) => {
    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case "confirmed":
                return "status-confirmed";
            case "pending":
                return "status-pending";
            case "cancelled":
                return "status-cancelled";
            default:
                return "";
        }
    };

    return <>
        <div className="appointment-card">
            <div className="appointment-header">
                <h3>{appointment.doctorName}</h3>
                <span className={`status ${getStatusClass(appointment.status)}`}>
                    {appointment.status}
                </span>
            </div>
            <div className="appointment-details">
                <p><strong>Patient:</strong> {appointment.patientName}</p>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
            </div>
        </div>
    </>
};

export default AppointmentCard;
