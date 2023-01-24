import SearchIcon from "../../assets/images/search-icon.svg";

export const Overview = () => {
  return (
    <div className="overview">
      <div className="container">
        <div className="overview__inner">
          <h2 className="overview__title">Overview</h2>
          <nav className="overview__nav">
            <ul className="overview__list">
              <li className="overvew__item">
                <button>
                  <img
                    src={SearchIcon}
                    width="13"
                    height="13"
                    alt="Search icon"
                  />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
