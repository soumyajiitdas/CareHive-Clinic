const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");

// book appointment
router.post("/book", appointmentController.bookAppointment);

// get all appointments
router.get("/", appointmentController.getAllAppointments);

// get appointments by patient
router.get("/patient/:patientId", appointmentController.getAppointmentsByPatient);

// get appointments by doctor
router.get("/doctor/:doctorId", appointmentController.getAppointmentsByDoctor);

// cancel appointment
router.put("/:id/cancel", appointmentController.cancelAppointment);

module.exports = router;
