import React from 'react'
import styles from "./Button.module.css";

const Button = ({text,handleBtnClick}) => {
  return (
    <>
    <button onClick={(event)=>handleBtnClick(event,text)} className={styles.btn}>{text}</button>
    </>
  )
}

export default Button