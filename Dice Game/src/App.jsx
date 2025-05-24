import {useState} from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";


function App() {

  //Maintaining a state to see if the game has started or not
  const [isGameStarted,setIsGameStarted]=useState(false);

  //Function to toggle whether the game is started or not
  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }
  return (
    <>
    {
      isGameStarted ? <GamePlay/>:<StartGame toggle={toggleGamePlay}/>
    }
    </>
  )
}

export default App
