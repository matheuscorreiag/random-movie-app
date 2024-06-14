import { z } from "zod";

const envSchema = z.object({
  EXPO_PUBLIC_ACCESS_TOKEN_AUTH: z.string(),
  EXPO_PUBLIC_API_KEY_AUTH: z.string(),
});

export const env = envSchema.parse(process.env);
