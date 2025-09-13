import React, { useEffect, useState } from "react";
import axios from "axios";
import AppointmentCard from "../components/AppointmentCard";
import AppointmentForm from '../components/AppointmentForm';

export const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/appointments/")
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.error("Error fetching appointments:", err);
      });
  }, []);

  return (
    <div className="page-container">
      <h2 className="page-title">Appointments <span>:</span></h2>

      {appointments.length > 0 ? (
        <div className="appointments-grid">
          {appointments.map((appt) => (
            <div className="appointment-wrapper" key={appt._id}>
              <AppointmentCard appointment={appt} />

              {/* Action buttons */}
              <div className="appointment-actions">
                <button className="btn view-action">View</button>
                <button className="btn track-action">Track</button>
                <button className="btn reschedule-action">Reschedule</button>
                <button className="btn cancel-action">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-appointments">No appointments available.</p>
      )}

      <AppointmentForm />
    </div>
  );
};