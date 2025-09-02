const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

// get all doctors
router.get("/", doctorController.getAllDoctors);

// get doctor by id
router.get("/:id", doctorController.getDoctorById);

// update availability
router.put("/:id/availability", doctorController.updateDoctorAvailability);

module.exports = router;
