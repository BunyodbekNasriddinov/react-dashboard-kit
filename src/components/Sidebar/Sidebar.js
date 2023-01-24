import { LinksData } from "../data";
import logo from "../../assets/images/logo.svg";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <a className="sidebar__title" href="/">
        <img
          className="sidebar__pic"
          src={logo}
          width="32"
          height="32"
          alt="Site logo"
        />
        Dashboard Kit
      </a>
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {LinksData.map((link) => (
            <li className="sidebar__item">
              <a className="sidebar__link" href="/">
                <img
                  className="sidebar__link-img"
                  src={link.img}
                  width="16"
                  height="16"
                  alt={link.text}
                />
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
