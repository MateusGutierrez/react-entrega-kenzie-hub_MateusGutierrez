import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link} from "react-router-dom"
import { loginSchema } from "../../schema/loginSchema"
import { api } from "../../services/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"
import { StyledLogin } from "./styledLogin"



export const Login = () => {
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(loginSchema),
    })
    const [aviso, setAviso] = useState("")
    const navigate = useNavigate()
    
    const submit = (formData) => {
        
        setAviso("Loading ...")
        async function post(){
            try {
                const response = await api.post("/sessions", formData)

                    localStorage.setItem("@TOKEN",response.data.token)
                    localStorage.setItem("@USERID", response.data.user.id)
                    setAviso("Login realizado com sucesso")
                    toast.success("Login realizado com sucesso!", {autoClose:2500})
                    navigate(`/users/${response.data.user.id}`)
            
            } catch (error) {
                
                toast.error("Erro ao realizar o login!", {autoClose:2500})
            }
        }post()
    }
    return(
        
        <StyledLogin>
            <div className="container">
            
                <h1 className="kenzie_title">Kenzie Hub</h1>
        
                <form onSubmit={handleSubmit(submit)} className="form_login">
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
                    
                    <p className="loading">{aviso}</p>

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