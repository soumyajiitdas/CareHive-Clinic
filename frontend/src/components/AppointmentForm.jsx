import { useState, useEffect } from "react";
import axios from "axios";

const AppointmentForm = () => {
    const [doctors, setDoctors] = useState([]);
    const [formData, setFormData] = useState({
        doctorId: "",
        patientName: "",
        date: "",
        time: "",
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/doctors/")
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
        try {
            await axios.post("http://localhost:8000/api/appointments/book", formData);
            alert("✅ Appointment created successfully!");
            // Optionally reset form or refresh list
        } catch (err) {
            alert(err.response?.data?.message || "❌ Failed to create appointment");
        }
    };

    return (
        <form className="appointment-form" onSubmit={handleSubmit}>

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
                name="patientName"
                placeholder="Patient Name"
                value={formData.patientName}
                onChange={handleChange}
                required
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
