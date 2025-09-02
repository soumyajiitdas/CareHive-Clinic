const Doctor = require("../models/Doctor");

// get all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find().populate("userId", "name email");
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// get doctor by id
exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id).populate("userId", "name email");
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// update availability
exports.updateDoctorAvailability = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(
            req.params.id,
            { availableSlots: req.body.availableSlots },
            { new: true }
        );
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
