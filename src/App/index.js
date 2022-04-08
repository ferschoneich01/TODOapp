import React from "react";
import { AppUI } from './AppUI';

/*const defaulTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];*/
function useLocalStorage(itemName, initialValue){
  
  const localstorageItem= localStorage.getItem(itemName);
  let parsedItem;
  if(!localstorageItem){
    localStorage.setItem(itemName,initialValue);
  }else{
    parsedItem = JSON.parse(localstorageItem);
  }

  const [item, setItems] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setTodos(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [search, setSearch] = React.useState('');
  //cantidad de todos que tenemos
  const completedTodos = todos.filter(todo => todo.completed == true).length;
  //total de todos
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);

    })

  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
    saveTodos(newTodos);
  };



  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
