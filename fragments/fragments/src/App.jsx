import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Players from "./components/Players";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

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
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Container>
        <h1>
          <center>Best Cricket Players</center>
        </h1>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <ErrorMsg name={bestcricketplayers}></ErrorMsg>
        <Players bestcricketplayers={bestcricketplayers}></Players>
      </Container>

      <Container>
        <p>
          {" "}
          Above is the list of legends of the game of cricket Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Amet aliquam ipsa pariatur
          quisquam nam hic eos quia aliquid, ad quis.
        </p>
      </Container>
    </>
  );
}

export default App;
