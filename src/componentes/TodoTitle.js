import { TodoContext } from "../context/context";
import "../estilos/TodoTitle.css";
import React from "react";

function TodoTitle () {
  const {totalTodos, completedTodos} = React.useContext(TodoContext)

  return(
    <h1>Has Completado <span className="number">{completedTodos}</span> de <span className="number">{totalTodos}</span> TODOS</h1>
  );
}

export { TodoTitle };