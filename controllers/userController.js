const { signupValidation, signinValidation } = require("../validator/userValidator")
const { user } = require("../models/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

export const signupController = async (req, res) => {
    try{ 
        const {username, email, password} = req.body;
        const parsedData = signupValidation.safeParse(req.body);
        if(!parsedData.success) {
            return res.status(500).json({
                message: "Validation failed",
                errors: parsedData.error.issues
            })
        }
        const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await user.create({ 
        username,
        email,
        password: hashedPassword
    });

    return res.status(201).json({
        message: "You have signed up!",
        user: {
        username: newUser.username,
        email: newUser.email
        }
    })

}catch(error){
    console.error(error);
    res.status(500).json({ message: "Server error during signup" });
    } 
}

export const signinController = async (req, res) => {
    try{
        const {email, password} = req.body
        const parsedData = signinValidation.safeParse(req.body);
        if(!parsedData.success) {
            return res.status(400).json({
                message: "Validation failed",
                errors: parsedData.error.issues,
              });
        }
        const findUser = await user.findOne({email})
        if(!findUser) {
            return res.status(404).json({
            message: "Account with this email doesn't exist, Signup first"
            })
        }

        const isPasswordValid = await bcrypt.compare(password, findUser.password)
        if(!isPasswordValid) {
            res.status(403).json({
                message: "Incorrect Password",
                errors: parsedData.error.issues,
              });
        }
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, { expiresIn: "30d" })
        return res.status(200).json({
            message: "Signin successfull",
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error while signing in, check your credentials and try again"
        })
    }
}