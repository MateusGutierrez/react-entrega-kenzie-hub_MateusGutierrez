import { useForm } from "react-hook-form"
import { loginSchema } from "../../schema/loginSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link} from "react-router-dom"
import { StyledLogin } from "./styledLogin"
import { ToastContainer,} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const Login = () => {

    const {loginSubmit} = useContext(UserContext)

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(loginSchema),
    })


    return(
        
        <StyledLogin>
            
            <div className="container">
                
                <h1 className="kenzie_title">Kenzie Hub</h1>
            
                <form onSubmit={handleSubmit(loginSubmit)} className="form_login">
                    <h2 className="login_title">Login</h2>

                    <div className="input_container">
                        <label className="input_label">Email</label>
                        <input className="input_form" type="email" {...register("email")} placeholder="E-mail"/>
                        {errors.email ? <p className="input_erro">{errors.email.message}</p>: null}
                    </div>
                    <div className="input_container">
                        <label className="input_label">Senha</label>
                        <input className="input_form" type="password" {...register("password")} placeholder="Senha"/>
                        {errors.password ? <p className="input_erro">{errors.password.message}</p>: null}
                    </div>
                        
                    <button className="form_button" type="submit">Entrar</button>
                        

                    <p className="mesage_to_register">Ainda não possui uma conta?</p>
                    <Link to={"/users"}>
                        <p className="register_button">Cadastre-se</p>
                    </Link>
                        
                </form>

            </div>
            <ToastContainer theme="dark"/>
        </StyledLogin>
        
    )
}