import { Link } from "react-router-dom"
import { StyledDash } from "./styledDash"
import { useContext } from "react"
import {UserContext} from "../../contexts/userContext"
import {TechContext} from "../../contexts/techContext"
import { ModalPlus } from "../modal/modal"
import { ModalInfo } from "../modalInfo/modalInfo"
import { ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { Techs } from "../tech/techs"

export const Dashboard = () => {

    const {logout} = useContext(UserContext)
    const {
        userInfo, handleOpenPlusModal,
        handleClosePlusModal, showPlusModal,
        handleCloseInfo, showInfoModal,
    } = useContext(TechContext)

    return (
        <StyledDash>
            <div className="container">
                <header className="header_container">
                    <h1 className="header_title">Kenzie Hub</h1>
                    <Link to={"/sessions"}>
                        <button onClick={() => logout} className="button_back">Sair</button>
                    </Link>
                </header>
                <p className="borda"></p>

                <section className="section_user">
                    <p className="user_name">Olá, {userInfo.name}</p>
                    <p className="user_module">{userInfo.course_module}</p>
                </section>
                <p className="borda"></p>
                {/* lista de techs */}
                <section className="section_tech">
                    <div className="div_tech">
                        <h2 className="tecnologias">Tecnologias</h2>
                        <button onClick={handleOpenPlusModal} className="button_sum">+</button>
                        
                        {showPlusModal && (
                            <ModalPlus onClose={handleClosePlusModal}/>
                        )}

                    </div>
                    <div className="div_tech_container">
                        <Techs/>                    
                        {showInfoModal && (
                            <ModalInfo onClose={handleCloseInfo}/>
                        )}
                    </div>
                </section>
            </div>
            <ToastContainer theme="dark"/>
        </StyledDash>
    )
}