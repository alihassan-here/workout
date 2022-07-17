const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, {
        expiresIn: "3d",
    });
}

const login = async (req, res) => {
    try {
        res.json("login route")
    } catch (error) {
        console.log(error);
    }
}
const signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.signup(email, password);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { login, signup };