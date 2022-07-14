const User = require("../models/UserModel");

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
        res.status(200).json({ email, user })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { login, signup };