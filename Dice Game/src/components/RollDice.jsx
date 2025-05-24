import styled from "styled-components";
const RollDice = ({rollDice,currentDice}) => {
  return (
    <DiceContainer>
      <div className="dice" 
      onClick={()=>rollDice()}>
        <img src={`./public/images/dice${currentDice}.jpg`}/>
      </div>
      <p>Click on the Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:-20px;
  
  .dice{
    cursor:pointer;
  }

  p{
    margin-top:5px;
    font-size:24px;
  }
`