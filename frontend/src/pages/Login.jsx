// src/pages/Login.jsx
import { useState } from "react";
import API from "../services/api";

export default function Login({ onLoginSuccess }) {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/users/login", formData);
            localStorage.setItem("token", res.data.token);
            alert("Login successful");
            onLoginSuccess();
        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
            <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
    );
}
