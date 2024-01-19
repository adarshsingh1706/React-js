import { IoAddCircle } from "react-icons/io5";
import { useState } from "react";

function AddTODO({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row myrow"></div>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="What's the Task?!"
            value={todoName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success add-btn"
            onClick={handleAddButtonClicked}
          >
            <IoAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTODO;
