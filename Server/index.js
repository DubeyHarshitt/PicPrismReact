require('dotenv').config(); // This should be at the very top
const express = require('express');
const { readdirSync } = require('fs');
const { connectDB } = require('./connection');
const cors = require('cors');


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
// readdirSync('./Router').map((route)=>{
//     app.use('/api', require(`./Router/${route}`))
// });

readdirSync('./Router').filter(file => file.endsWith('.js')).forEach(route => {
    // console.log(`Loading route: ${route}`);
    const router = require(`./Router/${route}`);
    app.use('/api', router);
  });
  
// readdirSync('./Router').filter(file => file.endsWith('.js')).map(route => {
//     try {
//         const router = require(`./Router/${route}`);
//         if (typeof router !== 'function') {
//             throw new Error(`${route} does not export a valid router`);
//         }
//         app.use('/api', router);
//     } catch (err) {
//         console.error(`Error loading route ${route}:`, err.message);
//     }
// });

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
});