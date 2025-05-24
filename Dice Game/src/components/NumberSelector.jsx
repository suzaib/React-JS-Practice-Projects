import styled from "styled-components";

const NumberSelector = ({error,setError,selectedNumber,setSelectedNumber}) => {

    //An array containing numbers
    const arrNumber=[1,2,3,4,5,6];

    //When the number is selected error is set to 0
    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value);
        setError("");
    }

    return (
    <NumberSelectorContainer>
        <p className="errorBox">{error}</p>
        <div className="flex">
            {arrNumber.map((value,i)=>(
                <Box 
                className="boxPointer"
                isSelected={value===selectedNumber}
                key={i}
                onClick={()=>numberSelectorHandler(value)}>
                {value}</Box>
            ))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer=styled.div`

    display:flex;
    flex-direction:column;
    align-items:end;
    
    .flex{
        display:flex;
        gap:24px;
    }

    .errorBox{
        position:absolute;
        top:80px;
        right:595px;
        font-size:30px;
        color:red;
    }

    .boxPointer{
        cursor:pointer;
    }

    p{
        font-size:24px;
        font-weight:700;
    }
`

const Box=styled.div`
    height:72px;
    width:72px;
    border:1px solid black;
    display:grid;
    place-items:center;
    font-size:24px;
    font-weight:700;
    background-color:${(props)=>(props.isSelected ? "black":"white")};
    color:${(props)=>(props.isSelected ? "white":"black")};
`