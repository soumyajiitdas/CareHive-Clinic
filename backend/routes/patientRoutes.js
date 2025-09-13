const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
const authMiddleware = require("../middlewares/authMiddleware");

// create new patient (temp)
router.post("/add", authMiddleware, patientController.createPatient);

// get all patient profile
router.get("/", authMiddleware, patientController.getAllPatients);

// get patient profile by id
router.get("/:id", authMiddleware, patientController.getPatientProfile);

// update patient profile
router.put("/:id", authMiddleware, patientController.updatePatientProfile);

module.exports = router;
