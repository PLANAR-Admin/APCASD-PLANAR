import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100)
    .regex(/^[\p{L} .'-]+$/u, "Name contains invalid characters."),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address.").max(150),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,20}$/, "Please enter a valid phone number.")
    .optional()
    .or(z.literal("")),
  service: z.string().trim().max(150).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few more details about your requirement.")
    .max(2000),
  // honeypot — must stay empty
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
