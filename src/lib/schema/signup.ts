import { z } from "zod";

export const signUpSchema = z
  .object({
    firstname: z.string()
    .min(1, { message: "Firstname is required" }),
    lastname: z.string()
    .min(1, { message: "Lastname is required" }),
    email: z.string()
    .min(1, { message: "Email is required" })
    .email({
      message: "Must be a valid email",
    }),
    dob: z.string()
    .date().min(1, { message: "Invalid date string!" }),
    password: z.string()
    .min(8, { message: "Password at least 8 characters" }),
    confirmpassword: z.string()
    .min(8, { message: "Password at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    path: ["confirmpassword"],
    message: "Password don't match",
  });

  export type signUpType = z.infer<typeof signUpSchema>
