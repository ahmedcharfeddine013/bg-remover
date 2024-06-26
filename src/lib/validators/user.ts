import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  clerkId: z.string(),
  name: z.string(),
  credits: z.string().default("10"),
});
