const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

// get all patient profile
router.get("/", patientController.getAllPatients);

// get patient profile by id
router.get("/:id", patientController.getPatientProfile);

// update patient profile
router.put("/:id", patientController.updatePatientProfile);

module.exports = router;
