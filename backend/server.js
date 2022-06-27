const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

const app = express();

//MIDDLEWARE
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.get("/api/workouts", workoutRoutes);

//CONNECT TO DB
const PORT = process.env.PORT || 8080;
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to DB and listening on port ${PORT}`);
        })
    })
    .catch(error => {
        console.log(error);
    })



