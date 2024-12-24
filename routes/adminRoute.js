const express = require("express")
export const router = express.Router()

router.post("/signup", signupController)
router.post("/signin", signinController)