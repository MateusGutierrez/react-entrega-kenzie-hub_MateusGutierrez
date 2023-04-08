import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { api } from "../../services/api"
import { Link } from "react-router-dom"
import { StyledDash } from "./styledDash"

export const Dashboard = () => {

    const {id} = useParams()
    const [userInfo, setUserInfo] = useState([])


    useEffect(() => {
        async function getInfoUser(){
            try {
                const response = await api.get(`/users/${id}`)
                
                setUserInfo(response.data)
            } catch (error) {
                
            }
        }getInfoUser()
    }, [])

    const logout = () => {
        localStorage.clear()
        setUserInfo([])
    }

    return (
        <StyledDash>
            <div className="container">
                <header className="header_container">
                    <h1 className="header_title">Kenzie Hub</h1>
                    <Link to={"/sessions"}>
                        <button onClick={() => logout()} className="button_back">Sair</button>
                    </Link>
                </header>
                <section className="section_user">
                    <p className="user_name">Olá, {userInfo.name}</p>
                    <p className="user_module">{userInfo.course_module}</p>
                </section>
                <div className="div_notice">
                    <p className="notine_title">Que pena! Estamos em desenvolvimento :(</p>
                    <p className="notice_text">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
            </div>
        </StyledDash>
    )
}