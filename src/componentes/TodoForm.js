import React from "react"
import "../estilos/form.css";
import { TodoContext } from "../context/context";

function Form () {

    const { openModal, setOpenModal, addTodo} = React.useContext(TodoContext);

    const [sendTodo, setSendTodo] = React.useState("");

    const ccerrarModal = () => {
        setOpenModal(!openModal)
    }

    const ecerrarModal = () => {
        setOpenModal(!openModal)
    }

    const guardarInfo = (event) => {
        setSendTodo(event.target.value);
    }

    return(
        <form className="form">
            <label className="label">Escribe tu nuevo TODO</label>
            <textarea value={sendTodo} onChange={guardarInfo} className="textarea" placeholder="Cortar cebolla..."></textarea>

            <div className="contenedor-botones">

                <button className="btn-cancelar" onClick={(event) => {
                    event.preventDefault();
                    ccerrarModal();
                }}>Cancelar</button>

                <button className="btn-confirmar" onClick={(event) => {
                    event.preventDefault();
                    addTodo(sendTodo)
                    ecerrarModal();
                }}>Confirmar</button>

            </div>

        </form>
    )
}



export {Form} 