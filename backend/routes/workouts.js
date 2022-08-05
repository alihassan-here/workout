const express = require("express");
const router = express.Router();
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

//!require auth for all workouts routes
router.use(requireAuth);

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