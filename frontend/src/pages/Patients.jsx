import React, { useEffect, useState } from "react";
import API from "../services/Api";
import AppointmentCard from "../components/AppointmentCard";

export const Patients = () => {
  // Sample patient info
  const patient = {
    id: 101,
    name: "Alice Johnson",
    age: 29,
    gender: "male",
    email: "alice.johnson@example.com"
  };

  // recent appointments display
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    API.get("/appointments/")
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.error("Error fetching appointments:", err);
      });
  }, []);


  return <>
    <div className="page-container">
      <h2 className="page-title">Patient Dashboard <span>:</span></h2>

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
        {appointments.length > 0 ? (
          <div className="appointments-grid">
            {appointments.map(appt => (
              <div key={appt._id}>
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

