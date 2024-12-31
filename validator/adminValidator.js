import { z } from "zod"

export const signupValidation = z.object({
  username: z
    .string()
    .min(1, { message: "Username must be at least 1 character" })
    .max(20, { message: "Username must not exceed 20 characters" }),
  email: z
    .string()
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(50, { message: "Password must not exceed 50 characters" }),
});

export const signinValidation = z.object({
  email: z
    .string()
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(50, { message: "Password must not exceed 50 characters" }),
});
