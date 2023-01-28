import { SolvedList, StatsList } from "../data";
import Graph from "../../assets/images/graph.png";
import { Tickets } from "../../components/Tickets/Tickets";
import "../../components/Tickets/Tickets.css";
import { Tasks } from "../../components/Tasks/Tasks";
import "../../components/Tasks/Tasks.css";

export const Overview = () => {
  return (
    <>
      <nain className="main">
        <section className="solved">
          <div className="container">
            <ul className="solved__list">
              {SolvedList.map((item) => (
                <li className="solved__item">
                  <p className="solved__text">{item.text}</p>
                  <span className="solved__number">{item.number}</span>
                </li>
              ))}
            </ul>
          </div>
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
          <div className="container gap-5 d-flex justify-content-end pt-5">
            <Tickets />
            <Tasks />
          </div>
        </section>
      </nain>
    </>
  );
};
