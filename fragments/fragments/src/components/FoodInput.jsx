import styles from "./FoodInput.module.css";

function FoodInput({ handleKeyDown }) {
  return (
    <input
      type="text"
      placeholder="Search Players Name here"
      className={styles.foodinput}
      onKeyDown={handleKeyDown} // console se
    ></input>
  );
}

export default FoodInput;
