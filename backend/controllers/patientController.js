const Patient = require("../models/Patient");

// get all patients
exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find().populate("userId", "name email");
        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// get patient profile by id
exports.getPatientProfile = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id).populate("userId", "name email");
        if (!patient) return res.status(404).json({ message: "Patient not found" });
        res.json(patient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// update patient profile
exports.updatePatientProfile = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(patient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
