import Display from "./assets/Components/Display";
import ButtonsContainer from "./assets/Components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {

  //Storing displayVal as state
  const [displayVal, setDisplayVal] = useState("");

  const buttons = ["9", "8", "7", "/", "6", "5", "4", "*", "3", "2", "1", "-", ".", "0", "=", "+", "CE", "C"]

  //Handling the clicks of different buttons
  const handleBtnClick = (event, text) => {
    let btnClicked = text;
    if (btnClicked === "=") {
      let ans = JSON.stringify(eval(displayVal));
      setDisplayVal(ans);
    }

    else if (btnClicked === "C" || btnClicked === "CE") {
      if (btnClicked === "C") {
        setDisplayVal((prevDisplayVal) => prevDisplayVal.slice(0, -1));
      }
      else if (btnClicked === "CE") {
        setDisplayVal("")
      }
    }
    else {
      setDisplayVal((prevDisplayVal) => prevDisplayVal + btnClicked)
    }
  }

  return (
    <>
      <body>
        <center className={styles.container}>
          <Display displayVal={displayVal} />
          <ButtonsContainer handleBtnClick={handleBtnClick} buttonsArr={buttons} />
        </center>
      </body>
    </>
  )
}

export default App
