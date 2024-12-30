const express = require("express")
const { signupController, signinController } = require("../controllers/adminController")
export const router = express.Router()

router.post("/signup", signupController)
router.post("/signin", signinController)