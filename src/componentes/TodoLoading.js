import React from "react";
import "../estilos/TodoLoading.css";

function TodoLoading() {
  return (
    <>
      {Array(5).fill().map((_, i) => ( // crea un array de 5 elemetos y iteramos sobre cada uno y por cada uno creamos un li
        <li className="TodoItem TodoItem--loading" key={i}>
          <span className="Icon skeleton-circle"></span>

          <p className="TodoItem-p skeleton-line"></p>

          <span className="Icon skeleton-circle"></span>
        </li>
      ))}
    </>
  );
}

export { TodoLoading };
