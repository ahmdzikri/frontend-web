import { z } from "zod";

export const menuItemSchema = z.object({
    label: z.string(),
    link: z.string(),
})


export type MenuItem = z.infer<typeof menuItemSchema>;