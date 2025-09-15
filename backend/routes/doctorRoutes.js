const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");
const authMiddleware = require("../middlewares/authMiddleware");

// create new doctor (temp)
router.post("/add", authMiddleware, doctorController.createDoctor);

// get all doctors
router.get("/", authMiddleware, doctorController.getAllDoctors);

// get doctor by id
router.get("/:id", authMiddleware, doctorController.getDoctorById);

// update availability
router.put("/:id/availability", authMiddleware, doctorController.updateDoctorAvailability);

module.exports = router;
