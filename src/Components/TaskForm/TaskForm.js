import "./TaskForm.css";
import { useState } from "react";

function TaskForm(props) {
  const steps = ["Enter a title", "Click on the button"];
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(0);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const durationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleAddTask = () => {
    props.addTask(title, duration);
  };

  return (
    <>
      <ul>
        {steps.map(function (x) {
          return <li>{x}</li>;
        })}
      </ul>
      <div action="" className="form">
        <input
          type="text"
          name="title"
          value={title}
          onChange={titleChange}
          id=""
        />
        <input
          type="text"
          name="duration"
          value={duration}
          onChange={durationChange}
          id=""
        />
        <button onClick={handleAddTask}>Add a task</button>
      </div>
    </>
  );
}

export default TaskForm;
