import { IoMdAddCircleOutline } from "react-icons/io";
import { useRef,useContext } from "react";
import { ToDoItemsContext } from "../store/toDo-items-store";



const AddTodo = () => {

  const {addNewItem}=useContext(ToDoItemsContext)

  const toDoName=useRef("");
  const dueDate=useRef("")


  const handleAddButtonClicked=(event)=>{
    event.preventDefault();
    addNewItem(toDoName.current.value,dueDate.current.value);
  }

  return (
    <div className="container text-center">
        <form onSubmit={handleAddButtonClicked} className="row kg-row">
          <div className="col-6"><input ref={toDoName}  type="text" placeholder="Enter Todo Here"/></div>
          <div className="col-4"><input ref={dueDate}  type="date"/></div>
          <div className="col-2"><button className="btn btn-success kg-btn"><IoMdAddCircleOutline/></button></div>
        </form>
    </div>
  )
}

export default AddTodo