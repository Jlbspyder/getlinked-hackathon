import React, { useRef } from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="hero" spy={true} smooth={true} offset={10} duration={700}>
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
        <img src="/images/hamburger.png" alt="menu" className="hamburger" />
        <ul>
          <li>
            <Link to="time" spy={true} smooth={true} offset={10} duration={700}>
              Timeline
            </Link>{" "}
          </li>
          <li>
            <Link to="hero" spy={true} smooth={true} offset={10} duration={700}>
              Overview
            </Link>{" "}
          </li>
          <li>
            <Link to="faq" spy={true} smooth={true} offset={10} duration={700}>
              FAQS
            </Link>{" "}
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={10}
              duration={700}
            >
              Contact
            </Link>{" "}
          </li>
        </ul>
        <div>
          <button className="btn">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
