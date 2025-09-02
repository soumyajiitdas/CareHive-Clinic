const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",                             // foreign key User
        required: true,
        unique: true
    },
    specialization: { type: String, required: true },
    experienceYears: { type: Number, default: 0 },
    qualification: { type: String, required: true },
    clinicAddress: { type: String },
    availableSlots: [{ type: Date }]               // available appointment times arr
}, { timestamps: true });

module.exports = mongoose.model("Doctor", doctorSchema);