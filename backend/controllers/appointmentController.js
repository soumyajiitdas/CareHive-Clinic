const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");

// book appointment
exports.bookAppointment = async (req, res) => {
    try {
        const { patientId, doctorId, dateTime, reason } = req.body;

        // check doctor availability
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });

        if (!doctor.availableSlots.includes(new Date(dateTime).toISOString())) {
            return res.status(400).json({ message: "Doctor not available at this time" });
        }

        const appointment = await Appointment.create({ patientId, doctorId, dateTime, reason });
        res.status(201).json({ message: "Appointment booked", appointment });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// get all appointments
exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate({
                path: 'doctorId',
                select: 'specialization',
                populate: {
                    path: 'userId',
                    select: 'name email'
                }
            })
            .populate({
                path: 'patientId',
                populate: {
                    path: 'userId',
                    select: 'name email'
                }
            });
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// get appointments by patient
exports.getAppointmentsByPatient = async (req, res) => {
    try {
        const appointments = await Appointment.find({ patientId: req.params.patientId })
            .populate("doctorId", "specialization userId");
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// get appointments by doctor
exports.getAppointmentsByDoctor = async (req, res) => {
    try {
        const appointments = await Appointment.find({ doctorId: req.params.doctorId })
            .populate("patientId", "userId");
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// cancel appointment
exports.cancelAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            { status: "canceled" },
            { new: true }
        );
        res.json({ message: "Appointment canceled", appointment });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
