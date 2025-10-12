import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/Api";

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
        <div className="register-page">
            <div className="login-container">
                <div className="register-header">
                    <div className="register-icon">🔐</div>
                    <h2 data-testid="login-title">Welcome Back!</h2>
                    <p>Sign in to access your CareHive account</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        name="email"
                        placeholder="Email address"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-testid="login-email-input"
                    />
                    <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        data-testid="login-password-input"
                    />
                    <button type="submit" data-testid="login-button">
                        Sign In
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </form>
                <p>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    );
}

