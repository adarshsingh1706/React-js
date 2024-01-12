import styles from "./ButtonsContainer.module.css";

function ButtonsContainer() {
  const buttonNames = [
    "AC",
    "()",
    "%",
    "/",
    "7",
    "8",
    "9",
    "X",
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
    "<-",
    "=",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((elements) => (
        <button className={styles.button}>{elements}</button>
      ))}
    </div>
  );
}
export default ButtonsContainer;
