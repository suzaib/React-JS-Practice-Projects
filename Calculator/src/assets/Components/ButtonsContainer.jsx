import React from 'react'
import Button from './Button'
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({buttonsArr,handleBtnClick}) => {
  return (
    <>
    <div className={styles.container}>
        {buttonsArr.map((buttonElement)=>(
            <Button text={buttonElement} handleBtnClick={handleBtnClick}/>
        ))}
    </div>
    </>
  )
}

export default ButtonsContainer