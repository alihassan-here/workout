const User = require("../models/UserModel");

const login = async (req, res) => {
    try {
        res.json("login route")
    } catch (error) {
        console.log(error);
    }
}
const signup = async (req, res) => {
    try {
        res.json("signup route")
    } catch (error) {
        console.log(error);
    }
}

module.exports = { login, signup };