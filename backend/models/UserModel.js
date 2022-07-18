const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require("validator");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

//STATIC SIGNUP METHOD
userSchema.statics.signup = async function (email, password) {
    if (!email || !password) {
        throw Error("All fields must be provided");
    }
    if (!validator.isEmail(email)) {
        throw Error("Email is not valid");
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password is too weak");
    }

    const exists = await this.findOne({ email });
    if (exists) {
        throw Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hash });
    return user;
}

//STATIC LOGIN METHOD
userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("All fields must be provided");
    }
    if (!validator.isEmail(email)) {
        throw Error("Email is not valid");
    }
    const user = await this.findOne({ email });
    if (!user) {
        throw Error("Email not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw Error("Password is incorrect");
    }
    return user;
}


module.exports = mongoose.model("User", userSchema);