import React from 'react';
import AppointmentCard from "../components/AppointmentCard";

export const Appointments = () => {
  // Sample appointment data
  const appointments = [
    {
      id: 1,
      doctorName: "Dr. John Smith",
      patientName: "Alice Johnson",
      date: "2025-09-01",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctorName: "Dr. Emily Brown",
      patientName: "Michael Lee",
      date: "2025-09-02",
      time: "2:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      doctorName: "Dr. Raj Patel",
      patientName: "David Kim",
      date: "2025-09-03",
      time: "4:00 PM",
      status: "Cancelled",
    },
  ];

  return <>
    <div className="appointments">
      <h2 className="appointments-title">Appointments</h2>

      {appointments.length > 0 ? (
        <div className="appointments-grid">
          {appointments.map((appt) => (
            <div className="appointment-wrapper" key={appt.id}>
              <AppointmentCard appointment={appt} />

              {/* Action buttons */}
              <div className="appointment-actions">
                <button className="view-action">View</button>
                <button className="track-action">Track</button>
                <button className="reschedule-action">Reschedule</button>
                <button className="cancel-action">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-appointments">No appointments available.</p>
      )}
    </div>

  </>
}

