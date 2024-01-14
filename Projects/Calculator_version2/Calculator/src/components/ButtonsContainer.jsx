// ButtonsContainer.js
import React from "react";
import styles from "./ButtonsContainer.module.css";

function ButtonsContainer({ onButtonClick }) {
  const buttonNames = [
    "AC",
    "DEL",
    "=",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((element) => (
        <button
          key={element}
          className={`${styles.button} ${element === "AC" && styles.clear} ${
            element === "DEL" && styles.del
          } ${element === "=" && styles.equal} ${
            ["+", "-", "*", "/"].includes(element) && styles.operator
          } ${!isNaN(element) && styles.number}`}
          onClick={() => onButtonClick(element)}
        >
          {element}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
