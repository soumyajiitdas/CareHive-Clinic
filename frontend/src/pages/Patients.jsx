import React, { useEffect, useState } from "react";
import API from "../services/Api";
import AppointmentCard from "../components/AppointmentCard";
import { jwtDecode } from "jwt-decode";

export const Patients = () => {
  const [patient, setPatient] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.id;

          const patientRes = await API.get(`/patients/${userId}`);
          setPatient(patientRes.data);

          const appointmentsRes = await API.get("/appointments/");
          setAppointments(appointmentsRes.data);
        }
      } catch (err) {
        console.error("Error fetching patient data:", err);
        setError("Failed to load patient information or appointments. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading patient data...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="page-container">
      <h2 className="page-title">Patient Dashboard <span>:</span></h2>

      {/* Section 1 - Patient Info */}
      <div className="patient-info-box">
        <h3>Patient Information</h3>
        {patient && patient.userId ? (
          <>
            <p><strong>Name:</strong> {patient.userId.name}</p>
            <p><strong>Age:</strong> {patient.age} ; <strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Phone No:</strong> {patient.phone} ; <strong>Email:</strong> {patient.userId.email}</p>
            <p><strong>Address:</strong> {patient.address}</p>
            <p><strong>Medical History:</strong> {patient.medicalHistory}</p>
          </>
        ) : (
          <p>No patient information available.</p>
        )}
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
  );
};


