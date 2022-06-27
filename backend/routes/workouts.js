const express = require("express");
const router = express.Router();

//GET ALL WORKOUTS
router.get("/", (req, res) => {
    res.json({
        msg: "GET ALL WORKOUTS",
    })
});
//GET A SINGLE WORKOUT
router.get("/:id", (req, res) => {
    res.json({
        msg: "GET A SINGLE WORKOUT",
    })
});
//POST A WORKOUT
router.post("/", (req, res) => {
    res.json({
        msg: "POST A WORKOUT",
    })
});
//UPDATE A WORKOUT
router.patch("/:id", (req, res) => {
    res.json({
        msg: "UPDATE A WORKOUT",
    })
});
//DELETE A WORKOUT
router.delete("/:id", (req, res) => {
    res.json({
        msg: "Delete A WORKOUT",
    })
});


module.exports = router;