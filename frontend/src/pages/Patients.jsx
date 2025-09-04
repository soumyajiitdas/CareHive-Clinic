import React from 'react';

export const Patients = () => {
    // Sample patient info
  const patient = {
    id: 1,
    name: "Alice Johnson",
    age: 29,
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
      <h2>Patient Dashboard</h2>

      <div className="patient-info">
        <h3>Patient Information</h3>
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Email:</strong> {patient.email}</p>
      </div>

      <div className="patient-appointments">
        <h3>Recent Appointments</h3>
        <p>No appointments found.</p>
      </div>
    </div>

  </>
}

