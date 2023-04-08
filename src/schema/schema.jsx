import { z } from "zod"

export const schema = z.object({
    name: z.string().min(3, "O nome é obrigatório"),
    email: z.string().email("O e-mail é obrigatório"),
    bio:z.string(),
    contact:z.string(),
    course_module:z.string(),
    password: z.string()
        .min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres, dentre eles números, letras e símbolos!")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
        .regex(/(?=.*?[@#$!%&?+/])/, "É necessário pelo menos um destes símbolos: (@, #, $, !, %, &, ?, +, /)"),
    confirm: z.string().min(1, "Confirmar a senha é obrigatório"),

}).refine(({password, confirm}) => confirm === password, {
    message:"A confirmação e a senha precisam ser iguais",
    path: ["confirm"],
})