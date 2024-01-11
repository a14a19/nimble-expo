import z from "zod"

const FILED_REQUIRED_STR = "This field is required"
export const GENDER_OPTIONS = ["Male", "Female", "Other"]

export const signUpFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be a string",
      required_error: FILED_REQUIRED_STR,
    })
    .min(3, "Minimum 3 characters")
    .max(24, "Maximum 20 characters")
    .trim(),

  email: z
    .string({
      invalid_type_error: "Email must be a string",
      required_error: FILED_REQUIRED_STR,
    })
    .email("Email is invalid"),

  birthDate: z
    .date({
      invalid_type_error: "Birth date must be a date",
      required_error: FIELD_REQUIRED_STR,
    })
    .min(new Date("1900-01-01"), "Invalid date time, too old")
    .max(new Date("2023-01-01"), "Invalid date time, too young")
    .default(new Date()),
})
