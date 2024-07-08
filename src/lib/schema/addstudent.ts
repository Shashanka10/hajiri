import { z } from "zod";

export const addStudentSchema = z
.object({
  fullname: z.string().min(1, { message: "Firstname is required" }),
  semester: z.string().min(1,{ message: "Sem selection is required!" }),
  contact: z.string()
  .min(1,{ message: "Phone number is required!" })
  .max(10,{ message: "Phone number can not exceed 10 in number!" }),
  address: z
  .string().min(1, { message: "Address is required!" }),
})

export type addStudentType = z.infer<typeof addStudentSchema>