import React from 'react'
import { ToDoItemsContext } from './assets/store/toDo-items-store'
import TodoItem from './assets/Components/TodoItem'
import { useContext } from 'react'
import styles from "./ToDoItems.module.css"

const ToDoItems = () => {

  const {toDoItems}=useContext(ToDoItemsContext);

  return (
    <div className={styles.itemsContainer}>
        {toDoItems.map((item)=>(
            <TodoItem key={item.name} date={item.dueDate} task={item.name}></TodoItem>
        ))}
    </div>
  )
}

export default ToDoItems