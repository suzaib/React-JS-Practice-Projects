import React from 'react'

//Importing react-icon
import { MdDelete } from "react-icons/md";

//Importing useContext to use context api
import { useContext } from 'react';

//Importing items context from context store
import { ToDoItemsContext } from '../store/toDo-items-store';

const TodoItem = ({task,date}) => {

  const {deleteItem}=useContext(ToDoItemsContext);
  return (
    <div className="container">
        <div className="row kg-row">
            <div className="col-6">{task}</div>
            <div className="col-4">{date}</div>
            <div className="col-2"><button onClick={(event)=>{
              deleteItem(task)}} type="button" className="btn btn-danger kg-btn"><MdDelete/></button></div>
        </div>
    </div>
  )
}

export default TodoItem
