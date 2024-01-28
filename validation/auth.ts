import z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be maximum 100 characters long" }),
  confirmPassword: z.string(),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  taxId: z.string().min(1, { message: "Tax ID is required" }),
  birthDate: z.coerce
    .date()
    .min(new Date(1920, 0, 1), {
      message: "Date cannot go past January 1 1920",
    })
    .max(new Date(), { message: "Date must be in the past" })
    .refine(
      (date) => {
        const ageDifMs = Date.now() - date.getTime();
        const ageDate = new Date(ageDifMs);

        const age = Math.abs(ageDate.getUTCFullYear() - 1970);

        return age >= 18;
      },
      { message: "You must be 18 years or older" },
    ),
  sex: z.enum(["MALE", "FEMALE", "OTHER"]).optional(),
  secondaryEmail: z
    .string()
    .email({ message: "Invalid secondary email address" })
    .optional()
    .or(z.literal("")),
  phoneNumber: z.string().optional(),
});

export type ILogin = z.infer<typeof loginSchema>;
export type IRegister = z.infer<typeof registerSchema>;
