import "./TaskPage.css";
import TaskForm from "../../Components/TaskForm/TaskForm";
import TasksList from "../../Components/TaskList/TaskList";
import { useState, useEffect } from "react";
import * as api from "../../services/tasks.service";

function TaskPage() {
  const [loading, setLoading] = useState(false);
  const error = false;
  const [searchValue, setSearchValue] = useState("");
  const [tasks, setTasks] = useState([]);

  //ajout task
  const addTask = async (title, duration) => {
    const newTask = await api.addTask(title, duration);
    setTasks((tasks) => [...tasks, { ...newTask }]);
  };

  //suppression task
  const deleteTask = async (id) => {
    await api.deleteTask(id);
    setTasks(tasks.filter((item) => item.id !== id));
  };

  //MAJ task
  const updateTask = async (id, title) => {
    await api.updateTask(id, title);
    const newTasks = tasks.map((task) =>
      task.id === id ? { id, title: title } : task
    );
    setTasks(newTasks);
  };

  //visibilité de la liste tasks
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  //affichage de données
  useEffect(() => {
    let didCancel = false;
    //récupération de données à partir du fichier tasks.services.js
    const fetchData = async () => {
      setLoading(false);
      const result = await api.fetchTasksByFilter(searchValue);
      if (!didCancel) {
        setTasks(result);
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [searchValue]);

  return (
    <div className="TaskPage">
      <div className="toggle">
        <button onClick={() => toggleVisibility()}>
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      <TaskForm addTask={addTask} />
      <div className="search">
        <input
          type="search"
          className="search"
          name="search"
          placeholder="Search task by name"
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
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        </>
      )}
    </div>
  );
}

export default TaskPage;
