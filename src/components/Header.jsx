import React from "react";
import { Link as LinkRoll } from "react-scroll";
import { Link, useLocation } from "react-router-dom"



const Header = ({ handleOpen, close}) => {
  
  const location = useLocation()
  

  return (
    <div className="header">
      <div onClick={close}>
        <Link to="/" spy={true} smooth={true} offset={10} duration={700}>
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
        <img src="/images/hamburger.png" alt="menu" className="hamburger" onClick={handleOpen} />
        <ul>
          <li>
            <LinkRoll to="time" spy={true} smooth={true} offset={10} duration={700}>
              Timeline
            </LinkRoll>{" "}
          </li>
          <li>
            <LinkRoll to="hero" spy={true} smooth={true} offset={10} duration={700}>
              Overview
            </LinkRoll>{" "}
          </li>
          <li>
            <LinkRoll to="faq" spy={true} smooth={true} offset={10} duration={700}>
              FAQS
            </LinkRoll>{" "}
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link
              to="/contact"
              spy={true}
              smooth={true}
              offset={10}
              duration={700}
            >
              Contact
            </Link>{" "}
          </li>
        </ul>
        <Link to="/register">
          <button className={`btn ${location.pathname === "/register" ? "active" : ""}`} >Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
