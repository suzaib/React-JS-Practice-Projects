import Display from "./assets/Components/Display";
import ButtonsContainer from "./assets/Components/ButtonsContainer";
import "./App.css";
import { useState } from "react";

function App() {

  //Storing display value as a state
  const [displayVal,setDisplayVal]=useState("");
  
  const buttons=["9","8","7","/","6","5","4","*","3","2","1","-",".","0","=","+","CE","C"]
  const operators=["+","-","*","/","."];

  //As the buttion is clicked we first check the type of button
  //Depending on type we do our operation(print result if its = or clear if its C or CE etc)
  const handleBtnClick=(event,text)=>{
    let btnClicked=text;
    if(btnClicked==="="){
      let ans=JSON.stringify(eval(displayVal));
      setDisplayVal(ans);
    }

    else if(btnClicked==="C" || btnClicked==="CE"){
      if(btnClicked==="C"){
        setDisplayVal((prevDisplayVal)=>prevDisplayVal.slice(0,-1));
      }
      else if(btnClicked==="CE"){
        setDisplayVal("")
      }
    }

    //Here we handle that expressions like "9*/+2" should not be printed
    //We make sure two operators can't be clicked together after one another
    else{
      let lastChar=displayVal[displayVal.length-1];
      if(operators.includes(lastChar) && operators.includes(btnClicked)){
        //Do Nothing
      }
      else{
        setDisplayVal((prevDisplayVal)=>prevDisplayVal+btnClicked);
      }
    }
  }

  return (
    <>
    <center className="container">
      <Display displayVal={displayVal}/>
      <ButtonsContainer handleBtnClick={handleBtnClick} buttonsArr={buttons}/>
    </center>
    </>
  )
}

export default App
