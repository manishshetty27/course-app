import express from "express"
import { signupController, signinController } from "../controllers/adminController.js"
const router = express.Router()

router.post("/signup", signupController)
router.post("/signin", signinController)

export default router