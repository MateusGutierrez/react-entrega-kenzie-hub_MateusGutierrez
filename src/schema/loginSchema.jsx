import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email("O e-mail é obrigatório"),
    password: z.string()
        .min("A senha é obrigatória e precisa de no mínimo 8 caracteres")
})