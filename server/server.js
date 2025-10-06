const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// import db
const connectDB = require('./config/db');

// import routes
const userRoutes = require("./routes/userRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

// .env injection
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

// use routs
app.use("/api/users", userRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);

connectDB();

app.get('/', (req, res)=>{
    res.send("Care-Hive Clinic api is running successfully 🎉");
});

const port = process.env.PORT || 5800;

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port} 🎉`);
    
})