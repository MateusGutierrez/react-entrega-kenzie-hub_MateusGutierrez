import { StyledPlusModal } from "./styledPlusModal"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schemaPlus } from "../../schema/schemaPlus"
import { useContext } from "react"
import { TechContext } from "../../contexts/techContext"




export const ModalPlus = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(schemaPlus),
    })
    const {makeTech} = useContext(TechContext)

    return(
        <StyledPlusModal>
            <div className="back_modal">
                <div className="div_modalClose">
                    <h2 className="register_modalTitle">Cadastrar Tecnologia</h2>
                    <button onClick={props.onClose} className="button_closePlus">x</button>
                </div>
                <form onSubmit={handleSubmit(makeTech)}>
                    <div className="div_input_namePlus">
                        <p className="namePlus">Nome</p>
                        <input type="text" className="inputPlus" {...register("title")} placeholder="Insira o título da tech aqui..."/>
                    </div>
                    <div className="div_input_namePlus">
                        <p className="namePlus" >Selecionar status</p>
                        <select name="status" className="inputPlus" {...register("status")}>
                            <option value="iniciate">Iniciante</option>
                            <option value="intermediário">Intermediário</option>
                            <option value="avançado">Avançado</option>
                        </select>
                    </div>
                    <button type="submit" className="button_Plus">Cadastrar Tecnologia</button>
                </form>
            </div>
            </StyledPlusModal>
    )
}