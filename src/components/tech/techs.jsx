import { useContext } from "react"
import { TechContext } from "../../contexts/techContext"

export const Techs = () => {
    const {techList,handleOpenInfo} = useContext(TechContext)
    return (
        techList.map( (tech) => {
            return(
                <div id={tech.id} key={tech.title} className="tech_container" 
                onClick={(e)=> handleOpenInfo(e)} >
                    <h2 className="h2_tech_title">{tech.title}</h2>
                    <p className="p_tech_status">{tech.status}</p>
                </div>
            )
        })
    )
}