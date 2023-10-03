import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ handleOpen, close }) => {
  const location = useLocation();

  return (
    <div className="header">
      <div onClick={close}>
        <Link to="/">
          <picture>
            <source
              media="(min-width: 630px)"
              srcSet="/images/getlinked.png"
              className="desktop-logo"
            />
            <img
              src="/images/getlinked-mobile.png"
              alt="title"
              className="logo"
            />
          </picture>
        </Link>
      </div>
      <div className="menu">
        <img
          src="/images/hamburger.png"
          alt="menu"
          className="hamburger"
          onClick={handleOpen}
        />
        <ul>
          <li className={location.pathname === "/timeline" ? "active" : ""}>
            <Link to="/timeline">Timeline</Link>
          </li>
          <li className={location.pathname === "/overview" ? "active" : ""}>
            <Link to="/overview">Overview</Link>
          </li>
          <li className={location.pathname === "/faq" ? "active" : ""}>
            <Link to="/faq">FAQS</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>{" "}
          </li>
        </ul>
        <Link to="/register">
          <button
            className={`btn ${
              location.pathname === "/register" ? "active" : ""
            }`}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
