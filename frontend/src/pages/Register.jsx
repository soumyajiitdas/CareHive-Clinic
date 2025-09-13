import { useState } from "react";
import API from "../services/api";

export default function Register() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "patient" });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/users/register", formData);
            alert(res.data.message);
        } catch (err) {
            alert(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
            <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
            <select name="role" onChange={handleChange}>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
}
