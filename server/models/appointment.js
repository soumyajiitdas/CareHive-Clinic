const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    dateTime: { type: Date, required: true },
    reason: { type: String },
    status: {
        type: String,
        enum: ["booked", "completed", "canceled"],
        default: "booked"
    }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);