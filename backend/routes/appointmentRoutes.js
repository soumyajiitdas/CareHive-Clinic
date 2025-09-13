const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");
const authMiddleware = require("../middlewares/authMiddleware");

// book appointment
router.post("/book", authMiddleware, appointmentController.bookAppointment);

// get all appointments
router.get("/", authMiddleware, appointmentController.getAllAppointments);

// get appointments by patient
router.get("/patient/:patientId", authMiddleware, appointmentController.getAppointmentsByPatient);

// get appointments by doctor
router.get("/doctor/:doctorId", authMiddleware, appointmentController.getAppointmentsByDoctor);

// cancel appointment
router.put("/:id/cancel", authMiddleware, appointmentController.cancelAppointment);

module.exports = router;
