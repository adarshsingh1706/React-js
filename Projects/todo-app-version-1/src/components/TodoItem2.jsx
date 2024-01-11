function Todoitem2() {
  let todoname = "workout";
  let tododate = "04-01-24";

  return (
    <div className="row myrow">
      <div className="col-6">{todoname}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger delete btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todoitem2;
