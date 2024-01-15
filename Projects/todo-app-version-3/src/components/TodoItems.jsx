import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <TodoItem
            tododate={item.dueDate}
            todoname={item.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
