import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Switch } from "react-router-dom";
import TaskPage from "../../Pages/TaskPage/TaskPage";

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
      </Switch>
    </div>
  );
}

export default TeacherRoutes;
