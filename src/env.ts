import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import "dotenv/config";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    APP_URL: z.string().url(),
    
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    APP_URL: process.env.APP_URL, 
  },
});
