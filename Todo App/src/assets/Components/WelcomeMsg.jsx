import React from 'react'
import { useContext } from 'react';

//Importing itemsContext from context store
import { ToDoItemsContext } from '../store/toDo-items-store'

const WelcomeMsg = () => {
  const {toDoItems}=useContext(ToDoItemsContext);
  return (
    (toDoItems.length===0) && (<p style={{fontSize:"40px",fontWeight:600}}>Enjoy Your Day</p>)
  )
}

export default WelcomeMsg
