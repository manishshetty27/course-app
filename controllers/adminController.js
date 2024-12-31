import { signupValidation, signinValidation } from "../validator/adminValidator.js"
export const signupController = (req, res)=> {
    const {username, email, password} = req.body
    const parsedData = signUpSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(400).json({
          message: "Validation failed",
          errors: parsedData.error.issues,
        });
      }
} 

export const signinController = ()=> {
  console.log("hi");
}