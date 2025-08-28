const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("<h3>Care-Hive Clinic api is running successfully 🎉</h3>");
});

const port = process.env.PORT || 5800;

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port} 🎉`);
    
})