import { LinksData } from "../data";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

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
          {LinksData.map((link, idx) => (
            <li className="sidebar__item" key={idx}>
              {link.text === "Tickets" ? (
                <Link className="sidebar__link" to="/tickets">
                  <img
                    className="sidebar__link-img"
                    src={link.img}
                    width="16"
                    height="16"
                    alt={link.text}
                  />
                  {link.text}
                </Link>
              ) : (
                <Link className="sidebar__link" to="/">
                  <img
                    className="sidebar__link-img"
                    src={link.img}
                    width="16"
                    height="16"
                    alt={link.text}
                  />
                  {link.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
