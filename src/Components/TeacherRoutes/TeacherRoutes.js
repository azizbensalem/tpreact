import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Switch } from "react-router-dom";
import TaskPage from "../../Pages/TaskPage/TaskPage";
import TaskDetails from "../TaskDetails/TaskDetails";

function TeacherRoutes() {
  console.log("useLocation() :", useLocation());
  console.log("useLocation() :", useRouteMatch());
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${path}/task-page`}>
          <TaskPage />
        </Route>
        <Route exact path={`${path}/tasks/:id`}>
          <TaskDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default TeacherRoutes;
