import AddTODO from "./components/AddTODO";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem1";
import Todoitem2 from "./components/todoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTODO></AddTODO>

      <div className="item-container">
        <TodoItem></TodoItem>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
