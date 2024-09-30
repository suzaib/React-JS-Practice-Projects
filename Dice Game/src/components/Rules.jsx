import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After clicking on dice if selected number is equal to dice number you will get same point as dice {" "}</p>
        <p>If you get wrong guess then the same number of points that you selected, will be deducted</p>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer=styled.div`
    max-width:800px;
    margin:10px auto 0px;
    border-radius:10px;
    background-color:#fbf1f1;
    padding:5px 15px;
    h2{
        font-size:24px;
    }
    .text{
        margin-top:20px;
    }
`