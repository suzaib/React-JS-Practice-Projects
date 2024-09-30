import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import RollDice from "./RollDice";
import Rules from "./Rules";
import { useState } from "react";
import { Button, OutlineButton } from "../assets/styled/Button";

const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(5);
  const [error,setError]=useState("");
  const [showRules,setShowRules]=useState(false);

  const generateRandomNumber=()=>{
    return Math.floor((Math.random()*6))+1;
  }

  const rollDice=()=>{

    if(!selectedNumber){
      setError("Select a number first !!")
      return
    }

    setError("");

    const randomNumber=generateRandomNumber();
    setCurrentDice((prev)=>randomNumber);

    if(selectedNumber===randomNumber){
      setScore(prev=>prev+randomNumber);
    }
    else{
      setScore(prev=>prev-selectedNumber);
    }

    setSelectedNumber(undefined);


  };

  const resetScore=()=>{
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}></TotalScore>
        <NumberSelector 
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}></NumberSelector>
      </div>
      <RollDice
      currentDice={currentDice}
      rollDice={rollDice}
      ></RollDice>
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button
        onClick={()=>setShowRules((prev)=>!prev)}
        >{showRules? "Hide Rules":"Show Rules"}</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>

    )
}

export default GamePlay;

const MainContainer=styled.main`
  margin:20px 40px 0px;
  max-height:100vh;

  .top_section{
    display:flex;
    justify-content:space-between;
    align-items:start;
  }
  
  .btns{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:0.7rem;
    margin-top:-10px;
  }
  `;

