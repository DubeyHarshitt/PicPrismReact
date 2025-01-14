const mongoose = require('mongoose');

const connectDB = async ()=>{
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    if(connection.STATES.connected) return console.log("DataBase Connected");
    if(connection.STATES.disconnected) return console.log("DataBase Disconnected");
};

module.exports = { connectDB }