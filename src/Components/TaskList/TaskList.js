import Task from "../../Components/Task/Task";

function TasksList(props) {
  return (
    <div className="TasksList">
      {props.myTasks.map(function (x) {
        return (
          <Task
            key={x._id}
            id={x._id}
            title={x.title}
            duration={x.duration}
            // details={x.details}
            type={x.type}
            startDate={x.startDate}
            removeTask={props.removeTask}
            updateTask={props.updateTask}
          />
        );
      })}

      {/*  <Task title="learn Html" 
         duration={60} 
         details={
           {
             type:"IT",
             startDate:"2021-02-16"
            }}
             
             />
   
   <Task title="learn React"/>
   <Task title="learn Angular"/> */}
    </div>
  );
}

export default TasksList;
