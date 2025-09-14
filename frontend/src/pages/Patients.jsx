import React, { useEffect, useState } from "react";
import API from "../services/Api";
import AppointmentCard from "../components/AppointmentCard";
import { jwtDecode } from "jwt-decode";

export const Patients = () => {
  const [patient, setPatient] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      // Fetch patient info
      API.get(`/patients/${userId}`)
        .then((res) => {
          setPatient(res.data);
        })
        .catch((err) => {
          console.error("Error fetching patient info:", err);
          setError("Failed to load patient information. Please try again later.");
        });
    }
  }, []);

  useEffect(() => {
    if (patient) {
      // Fetch appointments
      API.get(`/appointments/patient/${patient._id}`)
        .then((res) => {
          setAppointments(res.data);
        })
        .catch((err) => {
          console.error("Error fetching appointments:", err);
          setError((prev) => prev + " Failed to load appointments.");
        });
    }
  }, [patient]);

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!patient) {
    return <div>Loading patient data...</div>;
  }

  return (
    <>
      <div className="page-container">
        <h2 className="page-title">Patient Dashboard <span>:</span></h2>

        {/* Section 1 - Patient Info */}
        <div className="patient-info-box">
          <h3>Patient Information</h3>
          <p><strong>Name:</strong> {patient.userId.name}</p>
          <p><strong>Age:</strong> {patient.age} ; <strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Phone No:</strong> {patient.phone} ; <strong>Email:</strong> {patient.userId.email}</p>
          <p><strong>Address:</strong> {patient.address}</p>
          <p><strong>Medical History:</strong> {patient.medicalHistory}</p>
        </div>

        {/* Section 2 - Appointments */}
        <div className="appointments-section">
          <h3>Recent Appointments</h3>
          {appointments.length > 0 ? (
            <div className="appointments-grid">
              {appointments.map((appt) => (
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
  );
};


