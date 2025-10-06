const User = require("../models/user");
const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if email is already registered
        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ message: "Email already registered" });

        // Hash password
        const hash = await bcrypt.hash(password, 10);

        // Create User
        const user = await User.create({ name, email, passwordHash: hash, role });

        // Automatically create Doctor or Patient profile with provided data
        if (role === "doctor") {
            const { specialization, experienceYears = 0, qualification, clinicAddress = "" } = req.body;

            await Doctor.create({
                userId: user._id,
                specialization,
                experienceYears,
                qualification,
                clinicAddress,
                availableSlots: [],
            });
        } else if (role === "patient") {
            const { age, gender, phone, address = "", medicalHistory = [] } = req.body;

            await Patient.create({
                userId: user._id,
                age,
                gender,
                phone,
                address,
                medicalHistory,
            });
        }

        res.status(201).json({ message: "User registered successfully", user });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ error: err.message });
    }
};

// Login
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) return res.status(400).json({ message: "Invalid password" });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


