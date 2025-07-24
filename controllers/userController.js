const asyncHandler = require("express-async-handler")
const userModel = require("../models/userModel")

const register = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const userExist = userModel.findOne({ email });

    if (userExist) {
        res.status(400).json({ message: "user already exists" })
        return
    }

    const newUser = userModel.create({
        email: email,
        password: password
    })

    if (newUser) {
        res.status(200).json({ message: "user created", email: email })
        return
    }

    else {
        res.status(400).json({ message: "error creating user" })
        return
    }
});

const login = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const userExist = await userModel.findOne({ email });

    console.log(userExist)

    if (!userExist) {
        res.status(400).json({ message: "user not found" })
        return
    }
    res.status(200).json({ message: "login succesful", email: email })
});

module.exports = { register, login }
