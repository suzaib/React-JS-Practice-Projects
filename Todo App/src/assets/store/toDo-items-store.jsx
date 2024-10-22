import { createContext } from "react"
import { useReducer } from "react";


export const ToDoItemsContext= createContext({
    toDoItems:[],
    addNewItem:()=>{},
    deleteItem:()=>{},
});

const toDoItemsReducer=(currToDoItems,action)=>{
    let newToDoItems=currToDoItems;
    if(action.type==="NEW_ITEM"){
      newToDoItems=[
        ...currToDoItems,
        {name:action.payload.itemName,dueDate:action.payload.itemDueDate}
      ]
    }
    else if(action.type==="DELETE_ITEM"){
      newToDoItems=currToDoItems.filter((item)=>item.name!==action.payload.itemName);
  
  
    }
    return newToDoItems;
  }

export const ToDoItemsContextProvider=({children})=>{
    const [toDoItems,dispatchToDoItems]=useReducer(toDoItemsReducer,[]);


    const addNewItem=(itemName,itemDueDate)=>{

      const newItemAction={
        type:"NEW_ITEM",
        payload:{
          itemName,
          itemDueDate,
        }
      }
      dispatchToDoItems(newItemAction);
  }



  const deleteItem=(itemName)=>{

    const deleteItemAction={
      type:"DELETE_ITEM",
      payload:{
        itemName,
      }
    }

    dispatchToDoItems(deleteItemAction);
  };

  return (
    <ToDoItemsContext.Provider value={{
        toDoItems,
        addNewItem,
        deleteItem,
  }}
>
    {children}
</ToDoItemsContext.Provider>
  );
}

