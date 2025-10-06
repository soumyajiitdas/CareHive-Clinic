const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDB is connected ✅");
        
    } catch (error) {
        console.error("❌ 500", error);
        
    }
}

module.exports = connectDB;