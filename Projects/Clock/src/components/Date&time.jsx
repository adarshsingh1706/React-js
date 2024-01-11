function Datetime() {
  let date = new Date();
  return (
    <div className="datetime">
      <h1>
        The current date is {date.toLocaleDateString()} and time is{" "}
        {date.toLocaleTimeString()}
      </h1>
    </div>
  );
}

export default Datetime;
