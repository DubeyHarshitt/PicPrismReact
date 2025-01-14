require('dotenv').config(); // This should be at the very top
const express = require('express')
const { readdirSync } = require('fs');
const { connectDB } = require('./connection');
const cors = require('cors');


//  Requiring Routes (required dynamically down)
// const authRoute = require('./Router/authRouter');


const app = express();
const Port = process.env.PORT;

// Calling MongoDB Connection
connectDB();

// using Cors for cross origin resource sharing
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Using Routes
// app.use('/api', authRoute)

// Importing and using Routes Dynamically
readdirSync('./Router').map((route)=>{
    app.use('/api', require(`./Router/${route}`))
});

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
});