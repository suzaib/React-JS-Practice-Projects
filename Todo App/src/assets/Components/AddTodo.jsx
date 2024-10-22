import { IoMdAddCircleOutline } from "react-icons/io";
import { useRef,useContext, useState } from "react";
import { ToDoItemsContext } from "../store/toDo-items-store";



const AddTodo = () => {

  const {addNewItem}=useContext(ToDoItemsContext)
  const [vibrateName,setVibrateName]=useState(false);
  const [vibrateDate,setVibrateDate]=useState(false);

  const toDoName=useRef("");
  const dueDate=useRef("")


  const handleAddButtonClicked=(event)=>{
    event.preventDefault();
    if(toDoName.current.value && dueDate.current.value){
      addNewItem(toDoName.current.value,dueDate.current.value);
      toDoName.current.value="";
      dueDate.current.value="";  
    }
    else{
      if(!toDoName.current.value){
        setVibrateName(true);
        setTimeout(()=>{
        setVibrateName(false)
      },300)
      }
      else{
        setVibrateDate(true);
        setTimeout(()=>{
          setVibrateDate(false)
        },300)
    }
  }
  }
  return (
    <div className="container text-center">
        <form onSubmit={handleAddButtonClicked} className="row kg-row">
          <div className="col-6"><input ref={toDoName}  type="text" placeholder="Enter Todo Here" className={vibrateName? "vibrate":null}/></div>
          <div className="col-4"><input ref={dueDate}  type="date" className={vibrateDate? "vibrate":null}/></div>
          <div className="col-2"><button className="btn btn-success kg-btn"><IoMdAddCircleOutline className="addIcon"/></button></div>
        </form>
    </div>
  )
}

export default AddTodo