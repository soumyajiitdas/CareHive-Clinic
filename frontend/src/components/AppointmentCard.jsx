import React from 'react';

const AppointmentCard = ({ appointment }) => {
    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case "booked":
                return "status-booked";
            case "completed":
                return "status-completed";
            case "canceled":
                return "status-canceled";
            default:
                return "";
        }
    };

    const appointmentDate = new Date(appointment.dateTime);
    const date = appointmentDate.toLocaleDateString();
    const time = appointmentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return <>
        <div className="appointment-card">
            <div className="appointment-header">
                <h3>{appointment.doctorId?.userId?.name || "N/A"}</h3>
                <span className={`status ${getStatusClass(appointment.status)}`}>
                    {appointment.status}
                </span>
            </div>
            <div className="appointment-details">
                <p><strong>Patient:</strong> {appointment.patientId?.userId?.name || "N/A"}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Time:</strong> {time}</p>
                {appointment.reason && <p><strong>Reason:</strong> {appointment.reason}</p>}
            </div>
        </div>
    </>
};

export default AppointmentCard;
