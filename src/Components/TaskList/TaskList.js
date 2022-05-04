import Task from "../../Components/Task/Task";

function TasksList(props) {
  return (
    <div className="TasksList">
      {props.myTasks.map(function (x) {
        return (
          <Task
            key={x.id}
            id={x.id}
            title={x.title}
            duration={x.duration}
            deleteTask={props.deleteTask}
            updateTask={props.updateTask}
          />
        );
      })}
    </div>
  );
}

export default TasksList;
