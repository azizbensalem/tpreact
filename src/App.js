import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import TeacherRoutes from "./Components/TeacherRoutes/TeacherRoutes";
import StudentRoutes from "./Components/StudentRoutes/StudentRoutes";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path="/teacher">
              <TeacherRoutes />
            </Route>
            <Route path="/student">
              <StudentRoutes />
            </Route>
            {/* <Route path="/hello">
              <TaskPage />
            </Route>
            <Route path="/hello/world">
              <Hello />
            </Route>
            <Route exact path="/task-page/:id">
              <TaskDetails />
            </Route>*/}
            {/* <Route exact path="/task-page">
              <TaskPage />
            </Route> */}
            <Route exact path="/">
              <Redirect to="/teacher/task-page" />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
