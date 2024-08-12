import styles from "./AddTodo.module.css"
import { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange =(event) =>{
    setTodoName(event.target.value);
  };
  const handleDateChange =(event) =>{
    setDueDate(event.target.value);
  };

  const handleAddButtonChange = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  }; 

  return (
    <div className="container text-center">
      <div className={`row ${styles.todoRow}`}>
        <div className="col-6">
          <input value={todoName} onChange={handleNameChange} type="text" placeholder="Enter Todo Here"  className={styles.todoInput}/>
        </div>
        <div className="col-4">
          <input value={dueDate}  onChange={handleDateChange} type="date" className={styles.todoInput}/>
        </div>
        <div className="col-2">
          <button onClick={handleAddButtonChange } type="button" className={`btn btn-success ${styles.todoButton}`}>
          <MdLibraryAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
