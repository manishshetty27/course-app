import {Router} from "express" 
import { signupController, signinController } from "../controllers/userController.js"

const router = Router() 
router.post("/signup", signupController)
router.post("/signin", signinController)

export default router