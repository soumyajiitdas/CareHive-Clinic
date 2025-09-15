import { useState, useEffect } from "react";
import API from "../services/Api";
import { jwtDecode } from "jwt-decode";

const AppointmentForm = () => {
    const [doctors, setDoctors] = useState([]);
    const [formData, setFormData] = useState({
        doctorId: "",
        date: "",
        time: "",
        reason: "",
    });

    useEffect(() => {
        API.get("/doctors")
            .then((res) => {
                setDoctors(res.data);
            })
            .catch((err) => {
                console.error("Error fetching doctors:", err);
            });
    }, []);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            alert("Please log in to book an appointment.");
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            const patientId = decodedToken.id; // Assuming 'id' in token is the patient's userId

            const dateTime = new Date(`${formData.date}T${formData.time}`).toISOString();

            const appointmentData = {
                doctorId: formData.doctorId,
                patientId: patientId,
                dateTime: dateTime,
                reason: formData.reason,
            };

            const res = await API.post("/appointments/book", appointmentData);
            alert("✅ Appointment booked!");
            // Optionally clear form or refresh appointments list
        } catch (err) {
            console.error("Error booking appointment:", err);
            alert(err.response?.data?.message || "❌ Failed to create appointment");
        }
    };

    return (
        <form className="appointment-form" onSubmit={handleSubmit}>
            <h2 className="page-title">Appointment Form<span>:</span></h2>
            <label>Select Doctor:</label>
            <select
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                required
            >
                <option value="">-- Select a Doctor --</option>
                {doctors.map((doc) => (
                    <option key={doc._id} value={doc._id}>
                        {doc.userId?.name || "Unnamed Doctor"}
                    </option>
                ))}
            </select>

            
            <input
                name="reason"
                placeholder="Reason for Appointment (Optional)"
                value={formData.reason}
                onChange={handleChange}
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
            />
            <button type="submit">Create Appointment</button>
        </form>
    );
};

export default AppointmentForm;
