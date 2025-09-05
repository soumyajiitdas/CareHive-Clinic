import React from 'react';
import AppointmentCard from "../components/AppointmentCard";

export const Patients = () => {
  // Sample patient info
  const patient = {
    id: 1,
    name: "Alice Johnson",
    age: 29,
    gender: "male",
    email: "alice.johnson@example.com"
  };

  // Sample recent appointments
  const recentAppointments = [
    {
      id: 101,
      doctorName: "Dr. John Smith",
      patientName: "Alice Johnson",
      date: "2025-09-01",
      time: "10:30 AM",
      status: "Confirmed"
    },
    {
      id: 102,
      doctorName: "Dr. Emily Brown",
      patientName: "Alice Johnson",
      date: "2025-09-05",
      time: "2:00 PM",
      status: "Pending"
    }
  ];


  return <>
    <div className="patients">
      <h2 className="patients-title">Patient Dashboard</h2>

      {/* Section 1 - Patient Info */}
      <div className="patient-info-box">
        <h3>Patient Information</h3>
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Email:</strong> {patient.email}</p>
      </div>

      {/* Section 2 - Appointments */}
      <div className="appointments-section">
        <h3>Recent Appointments</h3>
        {recentAppointments.length > 0 ? (
          <div className="appointments-grid">
            {recentAppointments.map(appt => (
              <div className="appointment-card" key={appt.id}>
                <AppointmentCard appointment={appt} />
              </div>
            ))}
          </div>
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  </>
}

