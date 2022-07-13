const express = require("express");
const router = express.Router();
const {
    login,
    signup
} = require("../controllers/userController");


//LOGIN ROUTER
router.post("/login", login);

//SIGNUP ROUTER
router.post("/signup", signup);



module.exports = router;