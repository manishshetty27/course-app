const {z} = require("zod")

export const signupValidation = z.object({
    username: z.string().min(1).max(20),
    email: z.string().email(),
    password: z.string().min(8).max(50)
}) 

export const signinValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(50)
}) 