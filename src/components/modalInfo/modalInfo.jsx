import { TechContext } from "../../contexts/techContext"
import { useContext } from "react"
import { StyledInfoModal } from "./styledInfoModal"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { modalSchema } from "../../schema/modalSchema"


export const ModalInfo = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(modalSchema),
    })
    
    const {idTech, getTechTitle,  deleteTech, editTech} = useContext(TechContext)

    return(
        <StyledInfoModal>
            <div id={idTech} className="back_modal">
                <div className="div_modalInfo">
                    <h2 className="info_modalTitle">Tecnologia Detalhes</h2>
                    <button onClick={props.onClose} className="button_closeInfo">x</button>
                </div>
                <form onSubmit={handleSubmit(editTech)}>
                    <div className="div_input_nameInfo">
                        <p className="nameInfo">Nome do projeto</p>
                        <span className="inputInfo">{idTech && getTechTitle(idTech)}</span>
                    </div>
                    <div className="div_input_nameInfo">
                        <p className="nameInfo" >Status</p>
                        <select name="" id="" className="inputInfo" {...register("status")}>
                            <option value="iniciate">Iniciante</option>
                            <option value="intermediário">Intermediário</option>
                            <option value="avançado">Avançado</option>
                        </select>
                    </div>
                    <div className="div_buttonsInfo">
                        <button type="submit" className="button_saveInfo">Salvar alterações</button>
                        <button type="button" className="button_del" onClick={() => deleteTech(idTech)}>Excluir</button>
                    </div>
                </form>
            </div>
        </StyledInfoModal>
    )
}