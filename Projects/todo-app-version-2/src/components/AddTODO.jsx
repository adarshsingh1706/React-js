function AddTODO() {
  return (
    <div className="container text-center">
      <div className="row myrow"></div>
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="What's the Task?!"></input>
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success add-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTODO;
