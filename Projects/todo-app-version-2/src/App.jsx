import AddTODO from "./components/AddTODO";
import AppName from "./components/AppName";

import TodoItems from "./components/TodoItems";

import "./App.css";

function App() {
  const todoItems = [
    {
      name: "buy milk",
      dueDate: "4/2/24",
    },
    {
      name: "complete homework",
      dueDate: "4/5/24",
    },
    {
      name: "schedule dentist appointment",
      dueDate: "4/10/24",
    },
    {
      name: "read a chapter of a book",
      dueDate: "4/15/24",
    },
    {
      name: "write a blog post",
      dueDate: "4/20/24",
    },
    {
      name: "exercise for 30 minutes",
      dueDate: "4/25/24",
    },
    {
      name: "call a friend",
      dueDate: "4/30/24",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTODO></AddTODO>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
