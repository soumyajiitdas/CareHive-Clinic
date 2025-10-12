import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/Api";

export default function PatientRegister() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        gender: "male",
        phone: "",
        address: "",
        medicalHistory: "",
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
            role: "patient",
            age: Number(formData.age),
            gender: formData.gender,
            phone: formData.phone,
            address: formData.address,
            medicalHistory: formData.medicalHistory
                ? formData.medicalHistory.split(",").map((s) => s.trim())
                : [],
        };

        try {
            const res = await API.post("/users/register", payload);
            alert(res.data.message);
            setFormData({
                name: "",
                email: "",
                password: "",
                age: "",
                gender: "male",
                phone: "",
                address: "",
                medicalHistory: "",
            });
        } catch (err) {
            alert(err.response?.data?.message || "❌ Registration failed");
        }
    };

    return (
        <div className="register-page">
            <div className="register-container modern-card">
                <div className="register-header">
                    <div className="register-icon">🧑🏻‍⚕️</div>
                    <h2 data-testid="patient-register-title">Patient Registration</h2>
                    <p>Join CareHive and start your healthcare journey</p>
                </div>
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            data-testid="patient-name-input"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            placeholder="your.email@example.com"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            data-testid="patient-email-input"
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
                            data-testid="patient-password-input"
                        />
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input
                                id="age"
                                name="age"
                                placeholder="Your age"
                                type="number"
                                value={formData.age}
                                onChange={handleChange}
                                required
                                data-testid="patient-age-input"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select 
                                id="gender"
                                name="gender" 
                                value={formData.gender} 
                                onChange={handleChange}
                                data-testid="patient-gender-select"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            data-testid="patient-phone-input"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            id="address"
                            name="address"
                            placeholder="Your address"
                            value={formData.address}
                            onChange={handleChange}
                            data-testid="patient-address-input"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="medicalHistory">Medical History (Optional)</label>
                        <textarea
                            id="medicalHistory"
                            name="medicalHistory"
                            placeholder="Enter your medical history (comma separated)"
                            value={formData.medicalHistory}
                            onChange={handleChange}
                            rows="3"
                            data-testid="patient-medical-history-input"
                        />
                    </div>

                    <button type="submit" className="btn-submit" data-testid="patient-register-button">
                        <span>Register as Patient</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </form>
                
                <div className="register-footer">
                    <p className="switch-text">
                        Not a patient? <Link to="/register/doctor" className="switch-link">Register as a Doctor</Link>
                    </p>
                    <p className="login-text">
                        Already have an account? <Link to="/login" className="login-link">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
