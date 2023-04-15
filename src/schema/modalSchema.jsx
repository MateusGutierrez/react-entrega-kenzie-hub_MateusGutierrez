import { z } from "zod"

export const modalSchema = z.object({
    status:z.string()
})