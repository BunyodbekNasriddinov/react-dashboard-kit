import { SolvedList, StatsList } from "../data";
import SearchIcon from "../../assets/images/search-icon.svg";
import NewsIcon from "../../assets/images/news.svg";
import Avatar from "../../assets/images/avatar.png";
import Graph from "../../assets/images/graph.png";

export const Overview = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__inner">
            <h2 className="site-header__title">Overview</h2>
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
      <nain className="main">
        <section className="solved">
          <ul className="solved__list">
            {SolvedList.map((item) => (
              <li className="solved__item">
                <p className="solved__text">{item.text}</p>
                <span className="solved__number">{item.number}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="trend">
          <div className="container">
            <div className="trend__inner">
              <div className="trend__stats">
                <h2 className="trend__title">Today’s trends</h2>
                <div className="trend__time">
                  <time dateTime="2019-04-25">as of 25 May 2019, 09:41 PM</time>
                  <div className="trend__day">
                    <p className="trend__today">Today</p>
                    <p className="trend__yesteday">Yesterday</p>
                  </div>
                </div>
                <img
                  className="trend__graph"
                  src={Graph}
                  width="720"
                  height="406"
                  alt="Stats img"
                />
              </div>
              <ul className="trend__list">
                {StatsList.map((item) => (
                  <li className="trend__item">
                    <p className="trend__text">{item.text}</p>
                    <p className="trend__number">{item.number}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </nain>
    </>
  );
};
