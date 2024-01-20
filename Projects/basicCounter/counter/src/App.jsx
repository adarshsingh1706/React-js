import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let Counter = 5; since in state it is already declared
  let [Counter, setCounter] = useState(0);
  let AddValue = () => {
    if (Counter < 20) {
      setCounter(Counter + 1);
    }
  };
  let decreaseValue = () => {
    if (Counter > 0) {
      setCounter(Counter - 1);
    }
  };
  return (
    <>
      <h1>Counter to understand about hooks</h1>
      <h3>use effect hooks are used to paint the UI or for UI updation</h3>
      <h2>Counter Value: {Counter}</h2>

      <button onClick={AddValue}>Increment Value</button>

      <br />
      <br />

      <button onClick={decreaseValue}>decrement Value</button>
      {Counter <= 0 && (
        <p>Currently at Minimum Value, press increment to start Counting.</p>
      )}
      {Counter >= 20 && <p>Maximum Limit Reached</p>}
    </>
  );
}

export default App;
