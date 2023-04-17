import { Routes, Route, Navigate } from "react-router-dom"
import { Dashboard } from "../components/dashboard/dashboard"
import { Login } from "../components/login/login"
import { ProtectedRoutes } from "../components/protectedRoutes"
import { Register } from "../components/register/register"
import { TechProvider } from "../contexts/techContext"

export const MainRoute = () => {
    return(
        <Routes>
            
            <Route path="/sessions" element={<Login/>}/>
            <Route path="/users" element={<Register/>}/>

            <Route element={<ProtectedRoutes/>}>
                <Route path="/users/:id" element={
                    <TechProvider>
                        <Dashboard/>
                    </TechProvider> 
                }/>
            </Route>

            <Route path="/" element={<Navigate to="/sessions"/>}/>
            <Route path="/home" element={<Navigate to="/sessions"/>}/>
            <Route path="/login" element={<Navigate to="/sessions"/>}/>

            <Route path="/register" element={<Navigate to="/users"/>}/>
            <Route path="/cadastro" element={<Navigate to="/users"/>}/>
            
            <Route path="*" element={<h1>Página não encontrada</h1>}/>
        </Routes>
    )
}