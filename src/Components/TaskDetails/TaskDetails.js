import React, { useEffect, useState } from "react";
import { fetchTaskById } from "../../services/tasks.service";
import { useParams } from "react-router-dom";
import "./TaskDetails.css";

function TaskDetails() {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchTaskById(id);
      setTask(result);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <div className="task-details">
      <div className="header">Task details</div>
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
          <div className="title">Title</div>
          <div className="value">{task.title}</div>

          <div className="title">Duration</div>
          <div className="value">{task.duration}</div>
        </>
      )}
    </div>
  );
}

export default TaskDetails;
