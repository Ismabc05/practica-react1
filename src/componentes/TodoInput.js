import React from "react";
import "../estilos/TodoInput.css";
import { TodoContext } from "../context/context";

function TodoInput() {
    const { valorInput, setValorInput} = React.useContext(TodoContext)

    return (
        <input placeholder="Escribe tu siguiente tarea"  value={valorInput} onChange={(event) => { 
            setValorInput(event.target.value); 
            
        }}></input>
    );
}

export { TodoInput };