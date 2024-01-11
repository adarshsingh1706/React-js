import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Players from "./components/Players";
import ErrorMsg from "./components/ErrorMsg";

// fragments is nothing but a wrapper, this wrapper replaces a div which we put if we are returning  ore than one component , cz if we use <div></div> it is just complicating the DOM structure where as <> </> => fragments does not makes a external component and also serves the purpose of returning a single component.

// Also using map function in react to show details

function App() {
  let bestcricketplayers = [
    "Virat Kohli",
    "Sachin Tendulkar",
    "Wasim Akram",
    "Clive Llyod",
    "Kapil Dev",
    "MS Dhoni",
    "Ricky Ponting",
    "Steve Waugh",
    "James Anderson",
    "Dale Steyn",
  ];
  return (
    <>
      <h1>
        <center>Best Cricket Players</center>
      </h1>
      <ErrorMsg name={bestcricketplayers}></ErrorMsg>
      <Players bestcricketplayers={bestcricketplayers}></Players>
    </>
  );
}

export default App;
