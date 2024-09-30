import styled from "styled-components";
const TotalScore = ({score}) => {
  return (
    <>
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
    </>
  )
}

const ScoreContainer=styled.div`
    transform:translateY(-20px);
    *{
        margin:0;
        padding:0;
    }
    h1{
        font-size:100px;
        line-height:100px;
        max-width:130px;
        text-align:center;
    }
    p{
        font-size:24px;
        font-weight:500px;
    }
`

export default TotalScore;