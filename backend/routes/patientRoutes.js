const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

// create new patient (temp)
router.post("/add", patientController.createPatient);

// get all patient profile
router.get("/", patientController.getAllPatients);

// get patient profile by id
router.get("/:id", patientController.getPatientProfile);

// update patient profile
router.put("/:id", patientController.updatePatientProfile);

module.exports = router;
