import { useParams } from "react-router-dom";
import SearchIcon from "../../assets/images/search-icon.svg";
import NewsIcon from "../../assets/images/news.svg";
import Avatar from "../../assets/images/avatar.png";

export const Header = () => {
  // const title = useParams();
  // console.log(title);
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          <h2 className="site-header__title">Overview </h2>
          <div className="site-header__auth">
            <button className="site-header__btn">
              <img
                className="site-header__img"
                src={SearchIcon}
                width="15"
                height="15"
                alt="Search icon"
              />
            </button>
            <button className="site-header__btn">
              <img
                className="site-header__img"
                src={NewsIcon}
                width="15"
                height="15"
                alt="Search icon"
              />
            </button>
            <span className="site-header__column"></span>
            <p className="site-header__user-name">Jones Ferdinand</p>
            <img
              className="site-header__user-img"
              src={Avatar}
              width="40"
              height="40"
              alt="User img"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
