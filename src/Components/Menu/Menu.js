import { Link, NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div>
      <NavLink to="/hello" activeClassName="custom" className="espace">
        Home
      </NavLink>
      <NavLink to="/task-page" activeClassName="custom" className="espace">
        Task List
      </NavLink>
    </div>
  );
}

export default Menu;
