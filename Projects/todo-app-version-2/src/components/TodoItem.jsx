function TodoItem({ todoname, tododate }) {
  return (
    <div className="row myrow">
      <div className="col-6">{todoname}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger deletebtn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
