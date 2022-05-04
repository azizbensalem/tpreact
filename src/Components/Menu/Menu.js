import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div>
      <NavLink to="/teacher/hello" activeClassName="custom" className="espace">
        Home
      </NavLink>
      <NavLink
        to="/teacher/task-page"
        activeClassName="custom"
        className="espace"
      >
        Task List
      </NavLink>
    </div>
  );
}

export default Menu;
