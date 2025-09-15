import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

export default function Login({ onLoginSuccess }) {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/users/login", formData);
            const token = res.data.token;

            // Save token in localStorage
            localStorage.setItem("token", token);

            // Update App state
            onLoginSuccess(token);

            alert("Login successful! 🎉");

            // Redirect to home
            navigate("/");
        } catch (err) {
            alert(err.response?.data?.message || "❌ Login failed!");
        }
    };

    return (
        <div className="login-container">
        <h2 className="page-title">Login Form <span>:</span></h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p style={{ marginTop: "10px" }}>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
}

