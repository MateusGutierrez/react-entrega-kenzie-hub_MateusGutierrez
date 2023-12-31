import {Link} from "react-router-dom"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "../../schema/schema"
import { toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { StyledRegister } from "./styledRegister"
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";


export const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(schema),
    })
    
    const {registerSubmit} = useContext(UserContext)

    return (
        <StyledRegister>
            <div className="container">
                <header className="header_register">
                    <h1 className="kenzie_title">Kenzie Hub</h1>
                    <Link to={"/sessions"} className="button_back">Voltar</Link>
                </header>

                <form onSubmit={handleSubmit(registerSubmit)} noValidate className="form_register">
                    <div className="div_mesage">
                        <h3 className="register_title">Crie sua conta</h3>
                        <p className="register_text">Rápido e grátis, vamos nessa!</p>
                    </div>
                    <div className="div_input">
                        <label className="label_input">Nome</label>
                        <input type="text" className="input_register" placeholder="Digite aqui seu nome" {...register("name")} required/>

                    </div>
                    <div className="div_input">
                        <label className="label_input">Email</label>
                        <input type="email" className="input_register" placeholder="Digite aqui seu email"  {...register("email")} required/>
                        
                    </div>
                    <div className="div_input">
                        <label className="label_input">Senha</label>
                        <input type="password" className="input_register" placeholder="Digite aqui sua senha" {...register("password")} />
                        {errors.password ? <p className="text_error">{errors.password.message}</p>: null}

                    </div>
                    <div className="div_input">
                        <label className="label_input">Confirmar Senha</label>
                        <input type="password" className="input_register" placeholder="Confirme sua senha" {...register("confirm")}/>
                        {errors.confirm ? <p className="text_error">{errors.confirm.message}</p>: null}

                    </div>
                    <div className="div_input">
                        <label className="label_input">Bio</label>
                        <input type="text" className="input_register" placeholder="Fale sobre você" {...register("bio")} required/>

                    </div>
                    <div className="div_input">
                        <label className="label_input">Contato</label>
                        <input type="text" className="input_register" placeholder="Opção de contato" {...register("contact")} required/>

                    </div>
                    <div className="div_input">
                        <label className="label_input">Selecionar módulo</label>
                        <select name="type" {...register("course_module")} className="input_register">
                            <option value="1º Módulo (Introdução ao Frontend)">Primeiro módulo</option>
                            <option value="2º Módulo (Frontend avançado)">Segundo módulo</option>
                            <option value="3º Módulo (Frontend avançado)">Terceiro módulo</option>
                            <option value="4º Módulo (Introdução ao Backend)">Quarto módulo</option>
                            <option value="5º Módulo (Back-end Avançado)">Quinto módulo</option>
                            <option value="6º Módulo (Back-end Avançado)">Sexto módulo</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="button_register">Cadastrar</button>
                    
                    <h2 className="text_notice"></h2>
                </form>
            </div>
            <ToastContainer theme="dark"/>
        </StyledRegister>
    )
}