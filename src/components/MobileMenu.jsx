import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ open, close }) => {
  return (
    <>
      {
        <div className={open ? "mobile-menu active" : "mobile-menu"}>
          <div>
            <button className="close-btn" onClick={close}>
              x
            </button>
          </div>
          <div className="menu-list">
            <li onClick={close}>
            <Link to="/timeline" >Timeline</Link> 
            </li>
            <li onClick={close}>
            <Link to="/overview">Overview</Link>  
            </li>
            <li onClick={close}>
            <Link to="/faq">FAQs</Link>  
            </li>
            <li onClick={close}>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
          <div>
            <Link to="/register">
              <button className="mobile button" onClick={close}>
                Register
              </button>
            </Link>
          </div>
        </div>
      }
    </>
  );
};

export default MobileMenu;
