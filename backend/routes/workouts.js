const express = require("express");
const router = express.Router();
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require("../controllers/workoutController");

//GET ALL WORKOUTS
router.get("/", getWorkouts);

//GET A SINGLE WORKOUT
router.get("/:id", getWorkout);

//POST A WORKOUT
router.post("/", createWorkout);

//UPDATE A WORKOUT
router.patch("/:id", updateWorkout);

//DELETE A WORKOUT
router.delete("/:id", deleteWorkout);


module.exports = router;