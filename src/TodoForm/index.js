import React from "react";
import ReactDOM from "react-dom";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  // Creamos un estado para nuestro nuevo TODO
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModal(false);
  };

  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // Cerramos nustro modal
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewTodoValue("");
  };

  return (
    <form>
      <input
        id="TodoText"
        className="input-text form-control"
        placeholder="Todo..."
        value={newTodoValue}
        onChange={onChange}
      />
      <button class="btn btn-primary" type="submit" onClick={onSubmit}>
        Añadir
      </button>
      <button class="btn btn-danger" type="submit" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
}

export { TodoForm };
