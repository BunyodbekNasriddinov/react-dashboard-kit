import { Tikets } from "../data";
import SortIcon from "../../assets/images/sort-icon.svg";
import FilterIcon from "../../assets/images/filter-icon.svg";

export const Tickets = () => {
  return (
    <main>
      <section className="my-5">
        <div className="container">
          <div className="rounded border">
            <div className="d-flex align-items-center mt-3 mx-3">
              <h2 className="tickets__title">All tickets</h2>
              <button className="btn btn-white ms-auto me-1">
                <img src={SortIcon} width="14" height="12" alt="Sort icon" />{" "}
                Sort
              </button>
              <button className="btn btn-white me-1">
                <img src={FilterIcon} width="12" height="12" alt="Sort icon" />{" "}
                Filter
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-between px-3 pt-5 pb-3">
              <span className="fw-bolder opacity-50">Ticket details</span>
              <span className="fw-bolder opacity-50">Customer name</span>
              <span className="fw-bolder opacity-50 me-5">Date</span>
              <span className="fw-bolder opacity-50 me-5">Priority</span>
            </div>
            <ul className="list-group">
              {Tikets.map((item) => (
                <li className="list-unstyled border p-3 d-flex align-items-center justify-content-between">
                  <div className="d-flex">
                    <img
                      className="rounded-circle"
                      src={item.img}
                      width="44"
                      height="44"
                      alt={item.ticketName}
                    />
                    <div className="ms-3">
                      <h3 className="h6 fw-bolder m-0 p-0 mb-1">
                        {item.ticketName}
                      </h3>
                      <span className="opacity-50">
                        {item.ticketInformation}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p>{item.customerName}</p>
                    <time className="opacity-50" dateTime={item.dateCustomer}>
                      {item.dateCustomer}
                    </time>
                  </div>
                  <div>
                    <p>{item.dateLabel}</p>
                    <time className="opacity-50" dateTime={item.dateCustomer}>
                      {item.timeLabel}
                    </time>
                  </div>
                  <div>
                    <div
                      className={`${
                        item.priority === "HIGH"
                          ? "btn btn-danger"
                          : item.priority === "LOW"
                          ? "btn btn-danger"
                          : item.priority === "NORMAL"
                          ? "btn btn-success"
                          : ""
                      } rounded rounded-5 me-5`}
                    >
                      {item.priority}
                    </div>
                    <img
                      src={item.more}
                      width="24"
                      height="24"
                      alt={item.customerName}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
