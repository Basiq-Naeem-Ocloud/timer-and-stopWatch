import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.css";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="nav-links-container">
          <Link className="nav-link" to="/stopWatch">
            <button className="nav-btn">StopWatch</button>
          </Link>

          <Link className="nav-link" to="/timer">
            <button className="nav-btn">Timer</button>
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
