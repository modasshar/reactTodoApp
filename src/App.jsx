import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {

  const initialTodoItems = []
   

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    

    const newTodoItems = [
      ...todoItems, {name: itemName,
      dueDate: itemDueDate},
    ];
    setTodoItems(newTodoItems);
  }

  const handleDeleteButton = (todoName) =>{
    const newTodoItems = todoItems.filter(item => item.name !==todoName);
    setTodoItems(newTodoItems);
    
  }

  return (
    <div className="todoContainer">
      <AppName  />
      <AddTodo  onNewItem = {handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage todoItems ={todoItems}/>}
      
      <TodoItems todoItems ={todoItems} onDeleteClick={handleDeleteButton} />
    </div>
  );
}

export default App;
