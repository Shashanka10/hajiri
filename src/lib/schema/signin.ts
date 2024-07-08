import { z } from "zod"
 
export const signInSchema = z.object({
  email: z.string()
    .min(1, {message: "Email is required"})
    .email("Please enter a valid email"),
  password: z.string()
    .min(1, {message: "Password is required"})
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be less than 32 characters"),
})

export type signInType  = z.infer<typeof signInSchema>