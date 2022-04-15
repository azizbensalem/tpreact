import "./TaskForm.css";
import { useState } from "react";

function TaskForm(props) {
  // props.say();
  // const addTask = "Add a task";
  const steps = ["Enter a title", "Click on the button"];
  const [title, setTitle] = useState("");
  console.log("title: " + title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddTask = () => {
    props.addTask(title);
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
          onChange={handleChange}
          id=""
        />
        <button onClick={handleAddTask}>Add a task</button>
      </div>
    </>
  );
}

export default TaskForm;
