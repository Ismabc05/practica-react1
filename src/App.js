import React from 'react';
import { TodoTitle } from './componentes/TodoTitle.js';
import { TodoInput } from './componentes/TodoInput.js';
import { TodoList } from './componentes/TodoList.js';
import { TodoItem } from './componentes/TodoItem.js';
import { TodoButton } from './componentes/TodoButton.js';
import { useLocalStorage } from "./hooks/useLocalStorage";


//const defaultTodos = [
  //{ text: "Cortar cebolla", completed: true},
  //{ text: "Completar el curso de React", completed: false},
  //{ text: "LLorar con la llorona", completed: false},
  //{ text: "LALALALALALALA", completed: false},
//];

//localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");

function App() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", [])
  const [valorInput, setValorInput] = React.useState("");


  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const buscarTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(valorInput.toLocaleLowerCase())
  })

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <>
      <TodoTitle completed={completedTodos} total={totalTodos}/>

      <TodoInput valorInput={valorInput} setValorInput={setValorInput}/>

      {todos.every(todo => todo.completed) && <p>🎉 ¡Has completado todas las tareas!</p>} 

      <TodoList>
        {loading && <p>Cargando...</p>}
        {error && <p>Hubo un error</p>}
        {(!loading && buscarTodos.length === 0) && <p>No tienes ninguna tarea!</p>}

        {buscarTodos.map(todo => ( 
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}  
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}/> 
        ))}
      </TodoList>

      <TodoButton/>

    </>
  );
}

export default App;
