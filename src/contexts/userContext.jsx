import { createContext, useEffect } from "react";
import { useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";
export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [aviso, setAviso] = useState(true)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {

        const loadUser = async () => {
            try {
                const token = localStorage.getItem("@TOKEN")
            
                if(!token){
                    return
                }
        
                const {sub} = jwtDecode(token)
        
                const response = await api.get(`/users/${sub}`)

                api.defaults.headers.common.Authorization = `Bearer ${token}`
        
                setUser(response.data)
                    
            }catch (error) {
                console.log(error)
            }finally{                
                setAviso(false)
            }
        }
        loadUser()
    
    }, [])    

    const loginSubmit = (formData) => {
    
        async function post(){
            try {
                const response = await api.post("/sessions", formData)

                const { user: userResponse, token} = response.data

                api.defaults.headers.common.Authorization = `Bearer ${token}`

                setUser(userResponse)

                localStorage.setItem("@TOKEN",response.data.token)
                localStorage.setItem("@USERID", response.data.user.id)

                navigate(`/users/${response.data.user.id}`)
                toast.success("Login realizado com sucesso!", {autoClose:2500})

            } catch (error) {
                
                toast.error("Erro ao realizar o login!", {autoClose:2500})
            }
        }post()
    }

    const registerSubmit = (formData) => {
        
        async function post(){
            try {
                const response = await api.post("/users", formData)
                    
                    toast.success("Cadastro realizado com sucesso!", {autoClose:2500})
                    navigate("/sessions")
            
            } catch (error) {
                
                toast.error('Erro ao realizar o cadastro!', {autoClose:2500})
            }
        }post()
    }

    return (
        <UserContext.Provider value={{loginSubmit, registerSubmit, user, aviso}}>
            {children}
        </UserContext.Provider>
    )
}
