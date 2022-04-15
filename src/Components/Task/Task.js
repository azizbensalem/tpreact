import "./Task.css";

function Task(props) {
  function renderActions() {
    return (
      <div className="actions">
        <span>delete</span>
        <span>update</span>
      </div>
    );
  }
  const { title, duration, type, startDate } = props;
  return (
    <div className="App">
      <div className="task">
        <div className={`title ${type === "IT" ? "last" : ""}`}>{title}</div>
        <div>{duration} ms</div>
        <div>
          {type} ({startDate})
        </div>
        {/* {props.details && (
          <>
            <div className="title">{details.type}</div>
            <div className="title">{details.startDate}</div>
          </>
        )} */}
        {renderActions()}
      </div>
    </div>
  );
}

export default Task;
