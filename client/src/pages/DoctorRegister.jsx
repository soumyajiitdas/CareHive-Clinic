import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/Api";

export default function DoctorRegister() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: "doctor",
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
            setFormData({
                name: "",
                email: "",
                password: "",
                specialization: "",
                experienceYears: "",
                qualification: "",
                clinicAddress: "",
                availableSlots: "",
            });
        } catch (err) {
            alert(err.response?.data?.message || "❌ Registration failed");
        }
    };

    return (
        <div className="register-page">
            <div className="register-container modern-card">
                <div className="register-header">
                    <div className="register-icon doctor-icon">👨‍⚕️</div>
                    <h2 data-testid="doctor-register-title">Doctor Registration</h2>
                    <p>Join our network of healthcare professionals</p>
                </div>
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            placeholder="Dr. Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            data-testid="doctor-name-input"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            placeholder="doctor@example.com"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            data-testid="doctor-email-input"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            placeholder="Create a strong password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            data-testid="doctor-password-input"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="specialization">Specialization</label>
                        <input
                            id="specialization"
                            name="specialization"
                            placeholder="e.g., Cardiology, Pediatrics"
                            value={formData.specialization}
                            onChange={handleChange}
                            required
                            data-testid="doctor-specialization-input"
                        />
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="experienceYears">Years of Experience</label>
                            <input
                                id="experienceYears"
                                name="experienceYears"
                                placeholder="Years"
                                type="number"
                                value={formData.experienceYears}
                                onChange={handleChange}
                                data-testid="doctor-experience-input"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="qualification">Qualification</label>
                            <input
                                id="qualification"
                                name="qualification"
                                placeholder="MBBS, MD, etc."
                                value={formData.qualification}
                                onChange={handleChange}
                                required
                                data-testid="doctor-qualification-input"
                            />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="clinicAddress">Clinic Address</label>
                        <input
                            id="clinicAddress"
                            name="clinicAddress"
                            placeholder="Your clinic address"
                            value={formData.clinicAddress}
                            onChange={handleChange}
                            data-testid="doctor-clinic-input"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="availableSlots">Available Slots (Optional)</label>
                        <textarea
                            id="availableSlots"
                            name="availableSlots"
                            placeholder="Comma-separated ISO 8601 dates\ne.g., 2025-09-14T09:00:00.000Z, 2025-09-14T10:00:00.000Z"
                            value={formData.availableSlots}
                            onChange={handleChange}
                            rows="4"
                            data-testid="doctor-slots-input"
                        />
                    </div>

                    <button type="submit" className="btn-submit doctor-btn" data-testid="doctor-register-button">
                        <span>Register as Doctor</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </form>
                
                <div className="register-footer">
                    <p className="switch-text">
                        Not a doctor? <Link to="/register/patient" className="switch-link">Register as a Patient</Link>
                    </p>
                    <p className="login-text">
                        Already have an account? <Link to="/login" className="login-link">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
