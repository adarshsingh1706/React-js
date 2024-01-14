// App.jsx
import React, { useState } from "react";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonValue) => {
    if (buttonValue === "AC") {
      setCalVal("");
    } else if (buttonValue === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonValue === "DEL") {
      // Handle backspace functionality
      const newDisplayValue = calVal.slice(0, -1);
      setCalVal(newDisplayValue);
    } else {
      const newDisplayValue = calVal + buttonValue;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
