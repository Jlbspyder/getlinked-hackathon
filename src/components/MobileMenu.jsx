import React from "react";
import { Link, useLocation } from "react-router-dom"

const MobileMenu = ({ open, close }) => {

  const location = useLocation()
  return (
  <>  
    {<div className={open ? "mobile-menu active" : "mobile-menu"}>
      <div>
        <button className="close-btn" onClick={close}>
          x
        </button>
      </div>
      <div className="menu-list">
        <li>
          <Link to="/">Timeline</Link>
        </li>
        <li>
        <Link to="/">Overview</Link>
        </li>
        <li>
        <Link to="/">FAQs</Link>
        </li>
        <li onClick={close}>
        <Link to="/contact">Contact</Link>
        </li>
      </div>
      <div>
        <Link to="/register"><button className="mobile button" onClick={close}>Register</button></Link>
      </div>
    </div>}
  </>
  );
};

export default MobileMenu;
