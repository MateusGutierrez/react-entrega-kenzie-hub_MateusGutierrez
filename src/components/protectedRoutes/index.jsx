import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import { Navigate, Outlet } from "react-router-dom"
import { LoadingComponent } from "../loadingComponent/loadingComponent"

export const ProtectedRoutes = () => {
    const {user, aviso } = useContext(UserContext)

    if(aviso){
        return (
        <LoadingComponent/>
        
        )
    }
    
    if(!user){
        return <Navigate to={"/sessions"}/>
    }

    return <Outlet/>
}