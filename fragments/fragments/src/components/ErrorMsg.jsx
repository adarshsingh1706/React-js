const ErrorMsg = (props) => {
  return (
    <>{props.name.length === 0 ? <h3>No good Players are there</h3> : null}</>
  );
};

export default ErrorMsg;
