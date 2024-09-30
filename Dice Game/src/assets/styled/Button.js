import styled from "styled-components";


export const Button=styled.button`
    color:#fff;
    padding:10px 18px;
    background:#000000;
    border-radius:5px;
    min-width:220px;
    border:none;
    font-size:16px;
    transition:0.4s background ease-in;

    &:hover{
        cursor:pointer;
        background-color:white;
        outline:1px solid black;
        color:black;
        transition:0.3s background ease-in;
    }

    `

export const OutlineButton=styled(Button)`

    background-color:white;
    color:black;
    outline:1px solid black;

    &:hover{
        cursor:pointer;
        background-color:black;
        outline:1px solid transparent;
        color:white;
        transition:0.3s background ease-in;
    }

    `