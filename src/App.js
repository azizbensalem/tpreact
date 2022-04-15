import TaskPage from "./Pages/TaskPage/TaskPage";
import Hello from "./Pages/Hello/Hello";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path="/hello">
              <TaskPage />
            </Route>
            <Route path="/hello/world">
              <Hello />
            </Route>
            <Route exact path="/">
              <Redirect to="/task-page" />
            </Route>

            <Route exact path="/task-page">
              <TaskPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
