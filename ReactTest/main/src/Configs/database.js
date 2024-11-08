const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/test091124");
        console.log("connect sucess")
    } catch (error) {
        console.log("connect db fail", error.message);
    }
}

module.exports = connectDB;