import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <TodoItem tododate={item.dueDate} todoname={item.name}></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
 