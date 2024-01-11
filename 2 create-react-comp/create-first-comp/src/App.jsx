// import Kgbutton from "./kgbutton";
import Hello from "./Hello";
import Random from "./Random";

function App() {
  return (
    <>
      <h1>Hello wORLD!</h1>
      <Hello></Hello>
      <Random></Random> //self closing bhi likh skte hai
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </>
  );
}

export default App;

// when using multiple functions in same file although that is not advisable bt still then dont use export DEFAULT , instead just use export

// always captalise function name inorder to differentiate bw ur named fns and primarily available functions
