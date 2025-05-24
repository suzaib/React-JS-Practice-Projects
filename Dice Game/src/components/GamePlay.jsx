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

  //The rollDice function
  const rollDice=()=>{

    //Shows a error if no number is selected
    if(!selectedNumber){
      setError("Select a number first !!")
      return
    }

    setError("");

    //Generates a random number to show on the dice
    const randomNumber=generateRandomNumber();
    setCurrentDice(randomNumber);

    //If the randomly generated number is same as the chosen number, the score is increased by the chosen number
    if(selectedNumber===randomNumber){
      setScore(prev=>prev+randomNumber);
    }

    //Otherwise the score is reduced by the chosen number
    else{
      setScore(prev=>prev-selectedNumber);
    }

    //After the roll, the set number is again set to be undefined
    setSelectedNumber(undefined);


  };

  //Function to reset score to 0
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

const MainContainer = styled.main`
  margin: 20px 40px 0px;
  max-height: 100vh;
  overflow-y: auto; 
  padding-bottom: 20px;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 1rem;
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    margin-top: -10px;
  }

  @media (max-width: 800px) {
    margin: 10px 20px 0px;

    .top_section {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .btns {
      margin-top: 1rem;
    }
  }
`;

