import { useState, useEffect } from "react";
import axios from "axios";

function AppointmentForm({ token, patientId }) {
    const [doctors, setDoctors] = useState([]);
    const [doctorId, setDoctorId] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [reason, setReason] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios
            .get("/api/doctors")
            .then((res) => setDoctors(res.data))
            .catch((err) => console.error(err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await axios.post(
                "/api/appointments/book",
                { patientId, doctorId, dateTime, reason },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setMessage("✅ Appointment booked successfully!");
            setDoctorId("");
            setDateTime("");
            setReason("");
        } catch (error) {
            setMessage(error.response?.data?.message || "❌ Booking failed");
        }
    };

    return (
        <div className="appointment-form-container">
            <h2>Book an Appointment</h2>

            <form className="appointment-form" onSubmit={handleSubmit}>
                <label>Choose Doctor</label>
                <select
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    required
                >
                    <option value="">-- Select a Doctor --</option>
                    {doctors.map((doc) => (
                        <option key={doc._id} value={doc._id}>
                            {doc.userId.name} - {doc.specialization}
                        </option>
                    ))}
                </select>

                <label>Date & Time</label>
                <input
                    type="datetime-local"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    required
                />

                <label>Reason</label>
                <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Describe your reason..."
                    required
                ></textarea>

                <button type="submit">Book Appointment</button>
            </form>

            {message && <p className="form-message">{message}</p>}
        </div>
    );
}

export default AppointmentForm;
