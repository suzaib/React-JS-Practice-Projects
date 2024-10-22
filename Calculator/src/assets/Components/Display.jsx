import React from 'react'
import styles from "./Display.module.css";

const Display = ({displayVal}) => {
  return (
    <input type="text" readOnly={true} className={styles.display} value={displayVal}/>
  )
}

export default Display