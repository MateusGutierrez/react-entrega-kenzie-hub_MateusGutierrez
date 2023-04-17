import { createContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const TechContext = createContext()

export const TechProvider = ({children}) => {
    const {id} = useParams()
    const [userInfo, setUserInfo] = useState({})
    const navigate = useNavigate()
    const [techList, setTechList] = useState([])
    const [showPlusModal, setShowPlusModal] = useState(false)
    const [showInfoModal, setShowInfoModal] = useState(false)
    const [idTech, setIdTech] = useState("")

    useEffect(() => {
        async function getInfoUser(){
            const token = localStorage.getItem("@TOKEN")

            if(!token){
                navigate("/")
            }            
            
            try {
                const response = await api.get(`/users/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUserInfo(response.data)
                setTechList(response.data.techs)

            } catch (error) {     
                navigate("/sessions")
            }

        }getInfoUser()
    }, [])

    const logout = () => {
        localStorage.clear()
        toast.success("Saiu!", {autoClose:1500})
        setTimeout(() => {
            setUserInfo({})
            navigate(`/`)
        }, 1500)
    }

    const handleOpenPlusModal = () => {
        setShowPlusModal(true)
    }
    const handleClosePlusModal = () => {
        setShowPlusModal(false)
    }
    const handleOpenInfo = (e) => {
        setIdTech(e.target.id)
        setShowInfoModal(true)
    }
    const handleCloseInfo = () => {
        setIdTech("")
        setShowInfoModal(false)
    }

    const makeTech = (data) => {
        async function make(){
            try {
                const response = await api.post("/users/techs", data)
                handleClosePlusModal()
                setTechList([...techList, response.data])
                toast.success("Tecnologia adicionada com sucesso!", {autoClose:2500} )
            } catch (error) {
                toast.error('Erro ao adicionar tecnologia!', {autoClose:2500})
            }
        }make()
    }

    const deleteTech = (techId) => {
        async function delTech(){
            try {
                const response = await api.delete(`/users/techs/${techId}`)
                handleCloseInfo()
                const filteredList = techList.filter((tech) => tech.id !== techId )
                setTechList(filteredList)
                toast.success("Tecnologia adicionada com sucesso!", {autoClose:2500} )
            } catch (error) {
                toast.error('Erro ao excluir tecnologia!', {autoClose:2500})
            }
        }delTech()
    }

    const editTech = (data) => {
        async function edit(){
            try {
                const response = await api.put(`/users/techs/${idTech}`, data)
                const newData = {...response.data, ...data}
                handleCloseInfo()
                const filteredList = techList.filter((tech) => tech.id !== idTech )
                setTechList([...filteredList, newData])
                toast.success("Tecnologia editada com sucesso!", {autoClose:2500} )
                
            } catch (error) {
                toast.error('Erro ao editar tecnologia!', {autoClose:2500})
            }
        }edit()
    }

    
    const getTechTitle = (id) => {
        const filteredTech = techList.filter((tech) =>tech.id === id) 
        const filteredTechTitle = filteredTech[0].title
        return filteredTechTitle
    }


    return(
        <TechContext.Provider 
        value={
            {userInfo, logout, techList,
            handleOpenPlusModal, handleClosePlusModal,showPlusModal,
            handleCloseInfo, handleOpenInfo, showInfoModal,
            idTech, makeTech, deleteTech, editTech, getTechTitle
        }}>
            {children}
        </TechContext.Provider>
    )
}