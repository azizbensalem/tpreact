import "./TaskPage.css";

import TaskForm from "../../Components/TaskForm/TaskForm";
import TasksList from "../../Components/TaskList/TaskList";
import { useState, useEffect } from "react";
import * as api from "../../services/tasks.service";
// import * as api from "../../services/tasks2.service";

function TaskPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // function sayHello() {
  //   alert("say hello");
  // }

  const [tasks, setTasks] = useState([]);
  const addTask = (title) => {
    setTasks([...tasks, { id: tasks.length + 1, title: title }]);
  };

  // const removeTask = (id) => {
  //   setTasks(tasks.filter((item) => item.id !== id));
  // };
  // const updateTask = (id, title) => {
  //   const newTasks = tasks.map((task) =>
  //     task.id === id ? { id, title: title } : task
  //   );
  //   setTasks(newTasks);
  // };

  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await api.fetchTasks();
        setTasks(result);
        setLoading(false);
      } catch (e) {
        setLoading(false);

        setError(true);
      }
    };

    fetchData();
  }, []);

  // // 3ème forme de useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     if (searchValue.length === 0) {
  //       console.log("tasks empty");
  //       setTasks([]);
  //       setLoading(false);
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue);
  //       console.log("tasks form api");
  //       setTasks(result);
  //       setLoading(false);
  //     }
  //   };
  //   console.log("searchValue", searchValue);
  //   fetchData();
  // }, [searchValue]);

  // 4ème forme de useEffect
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setLoading(false);
      const result = await api.fetchTasksByFilter(searchValue);
      if (!didCancel) {
        setTasks(result);
        setLoading(false);
      }
    };
    // console.log("useEffect:", searchValue)
    fetchData();

    return () => {
      didCancel = true;
    };
  }, [searchValue]);

  return (
    <div className="TaskPage">
      <div className="toggle">
        <button onClick={() => toggleVisibility()}>Toggle visibility</button>
      </div>
      <TaskForm addTask={addTask} />
      <div className="search">
        <input
          type="search"
          name="search"
          placeholder="search task by name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {loading && <div>Loading ... </div>}
      {error && <div>error ... </div>}
      {!loading && isVisible && (
        <>
          <TasksList
            myTasks={tasks}
            removeTask={api.deleteTask}
            updateTask={api.updateTask}
          />
        </>
      )}
    </div>
  );
}

export default TaskPage;
