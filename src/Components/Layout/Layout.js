import Menu from "../Menu/Menu";

function Layout(props) {
  return (
    <div>
      <Menu />
      {props.children}
    </div>
  );
}

export default Layout;
