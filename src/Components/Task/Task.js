import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Task.css";

export default function Task({ id, title, duration, deleteTask, updateTask }) {
  const [updateMode, setUpdateMode] = useState(false);
  const [titleToUpdate, setTitleToUpdate] = useState(title);
  const [durationToUpdate, setDurationToUpdate] = useState(duration);

  const handleUpdateTask = () => {
    updateTask(id, titleToUpdate, durationToUpdate);
    setUpdateMode(false);
  };
  return (
    <div className="task">
      {!updateMode ? (
        <>
          <div>
            <Link to={`tasks/${id}`}>
              <div className="title">
                {title} ({duration})
              </div>
            </Link>
          </div>
          <div className="actions">
            <div>
              <button onClick={() => deleteTask(id)}>Delete</button>
              <button onClick={() => setUpdateMode(true)}>Update</button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <input
            type="text"
            name="title"
            value={titleToUpdate}
            onChange={(e) => setTitleToUpdate(e.target.value)}
          />
          <input
            type="text"
            value={durationToUpdate}
            name="duration"
            onChange={(e) => setDurationToUpdate(e.target.value)}
          />
          <button className="button" onClick={handleUpdateTask}>
            Update a task
          </button>
        </div>
      )}
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number,
};

Task.defaultProps = {
  duration: 30,
};
