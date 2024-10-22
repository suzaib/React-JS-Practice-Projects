import { useRef,useContext, useState } from "react";

//Importing react-icon
import { IoMdAddCircleOutline } from "react-icons/io";

//Importing ToDoItemsContext from context store
import { ToDoItemsContext } from "../store/toDo-items-store";
const AddTodo = () => {

  const {addNewItem}=useContext(ToDoItemsContext)

  //We add a dynamic class based on these values. The class added gives the input box animation effects to show that they are empty
  const [vibrateName,setVibrateName]=useState(false);
  const [vibrateDate,setVibrateDate]=useState(false);

  const toDoName=useRef("");
  const dueDate=useRef("")


  const handleAddButtonClicked=(event)=>{

    //Preventing the page from reloading as that is the default behaviour of the form when submitted
    event.preventDefault();

    //Only if the name and date input is not empty , then we add a new task
    if(toDoName.current.value && dueDate.current.value){
      addNewItem(toDoName.current.value,dueDate.current.value);
      toDoName.current.value="";
      dueDate.current.value="";  
    }

    //Otherwise we show the animation made by setting the VibrateName/Date as true
    else{
      if(!toDoName.current.value){
        setVibrateName(true);

        //SetTimeout is used to reset the state value of vibrateName/Date as false(after the animation has finished)
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
