import TodoItem from "./TodoItem"
import styles from "./TodoItems.module.css"

const todoItems = ({todoItems ,onDeleteClick}) => {

    return(
        <div className={styles.itemContainer}>
        {
            todoItems.map(item=> <TodoItem key={item.name} todoDate={item.dueDate}  todoName={ item.name}  onDeleteClick={onDeleteClick}/>)
        }
        </div>
    );
};

export default todoItems;