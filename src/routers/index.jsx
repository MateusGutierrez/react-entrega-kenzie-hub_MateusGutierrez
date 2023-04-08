import { Routes, Route, Navigate } from "react-router-dom"
import { Dashboard } from "../components/dashboard/dashboard"
import { Login } from "../components/login/login"
import { Register } from "../components/register/register"
export const MainRoute = () => {
    return(
        <Routes>
            
            <Route path="/sessions" element={<Login/>}/>
            <Route path="/users" element={<Register/>}/>
            <Route path="/users/:id" element={<Dashboard/>}/>


            <Route path="/" element={<Navigate to="/sessions"/>}/>
            <Route path="*" element={<h1>Página não encontrada</h1>}/>
        </Routes>
    )
}