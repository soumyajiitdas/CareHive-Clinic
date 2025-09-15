import { useState } from "react";
import API from "../services/Api";

export default function Register() {
    const [role, setRole] = useState("patient");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        // Patient fields
        age: "",
        gender: "male",
        phone: "",
        address: "",
        medicalHistory: "",
        // Doctor fields
        specialization: "",
        experienceYears: "",
        qualification: "",
        clinicAddress: "",
        availableSlots: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload =
            role === "patient"
                ? {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    role,
                    age: Number(formData.age),
                    gender: formData.gender,
                    phone: formData.phone,
                    address: formData.address,
                    medicalHistory: formData.medicalHistory
                        ? formData.medicalHistory.split(",").map((s) => s.trim())
                        : [],
                }
                : {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    role,
                    specialization: formData.specialization,
                    experienceYears: Number(formData.experienceYears || 0),
                    qualification: formData.qualification,
                    clinicAddress: formData.clinicAddress,
                    availableSlots: formData.availableSlots
                        ? formData.availableSlots.split(",").map((s) => new Date(s.trim()).toISOString())
                        : [],
                };

        try {
            const res = await API.post("/users/register", payload);
            alert(res.data.message);
            // Optionally reset form
            setFormData({
                name: "",
                email: "",
                password: "",
                age: "",
                gender: "male",
                phone: "",
                address: "",
                medicalHistory: "",
                specialization: "",
                experienceYears: "",
                qualification: "",
                clinicAddress: "",
            });
            setRole("patient");
        } catch (err) {
            alert(err.response?.data?.message || "❌ Registration failed");
        }
    };

    return (
        <div className="register-container">
        <h2 className="page-title">Registration Form <span>:</span></h2>
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                name="email"
                placeholder="Enter email address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                name="password"
                placeholder="Create password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <select name="role" value={role} onChange={handleRoleChange}>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
            </select>

            {role === "patient" ? (
                <>
                    <input
                        name="age"
                        placeholder="Enter your age"
                        type="number"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <input
                        name="phone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <input
                        name="medicalHistory"
                        placeholder="Enter your Medical History (comma separated, if any)"
                        value={formData.medicalHistory}
                        onChange={handleChange}
                    />
                </>
            ) : (
                <>
                    <input
                        name="specialization"
                        placeholder="Enter Specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="experienceYears"
                        placeholder="Your Years of Experience"
                        type="number"
                        value={formData.experienceYears}
                        onChange={handleChange}
                    />
                    <input
                        name="qualification"
                        placeholder="Your Qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="clinicAddress"
                        placeholder="Your Clinic Address"
                        value={formData.clinicAddress}
                        onChange={handleChange}
                    />
                    <textarea
                        name="availableSlots"
                        placeholder="Available Slots (comma-separated ISO 8601 dates, e.g., 2025-09-14T09:00:00.000Z, 2025-09-14T10:00:00.000Z)"
                        value={formData.availableSlots}
                        onChange={handleChange}
                        rows="5"
                    ></textarea>
                </>
            )}

            <button type="submit">Register</button>
        </form>
        </div>
    );
}

