import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoItem} from './TodoItem';
import {TodoList} from './TodoList';
//import './App.css';
const todos = [
  {text: 'cortar cebolla', completed: false},
  {text: 'tomar el curso de intro a react', completed: false},
  {text: 'Llorar con la llorona', completed: false}
]; 

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text}  text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
      
    </React.Fragment>
  );
}

export default App;
