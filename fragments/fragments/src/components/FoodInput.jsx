import styles from "./FoodInput.module.css";

function FoodInput({ handleOnChange }) {
  return (
    <input
      type="text"
      placeholder="Search Players Name here"
      className={styles.foodinput}
      onChange={handleOnChange} // console se
    ></input>
  );
}

export default FoodInput;
