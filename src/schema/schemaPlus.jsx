import { z } from "zod"

export const schemaPlus = z.object({
    title: z.string(),
    status:z.string()
})