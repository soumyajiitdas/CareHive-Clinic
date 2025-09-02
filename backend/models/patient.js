const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",                            // foreign key User
        required: true,
        unique: true
    },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    phone: { type: String, required: true },
    address: { type: String },
    medicalHistory: [{ type: String }]          // list of past conditions/notes
}, { timestamps: true });

module.exports = mongoose.model("Patient", patientSchema);