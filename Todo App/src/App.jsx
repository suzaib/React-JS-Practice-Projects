//Importing our components
import AppName from './assets/Components/AppName'
import AddTodo from './assets/Components/AddTodo'
import ToDoItems from './ToDoItems'
import WelcomeMsg from './assets/Components/WelcomeMsg'

//Importing ToDoItemsContextProvider form context store
import { ToDoItemsContextProvider } from './assets/store/toDo-items-store'
import "./style.css"

function App() {

  return (
    <ToDoItemsContextProvider >
      <center className="todo-container">
        <AppName/>
        <AddTodo/>
        <WelcomeMsg/>
        <ToDoItems/>
      </center>
    </ToDoItemsContextProvider>

  )
}

export default App
