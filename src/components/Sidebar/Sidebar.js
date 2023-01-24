import data from "./data-links";
import logo from "../../assets/images/logo.svg";

export const Sidebar = () => {
  return (
    <div>
      <a href="/">
        <img src={logo} width="32" height="32" alt="Site logo" />
        Dashboard Kit
      </a>
      <nav>
        <ul>{data}</ul>
      </nav>
    </div>
  );
};
