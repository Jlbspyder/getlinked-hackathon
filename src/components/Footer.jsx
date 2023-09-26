import React from "react";
import { Link } from "react-scroll";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { HiLocationMarker } from "react-icons/hi";
import { BsFileArrowUp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="contact">
      <img src="/images/gray-star.png" className="foot-graystar" />
      <img src="/images/white-star.png" className="foot-whitestar" />
      <img src="/images/white-star.png" className="foot-whitestar2" />
      <img src="/images/sata-star.png" className="foot-satastar" />
      <Link to="header" spy={true} smooth={true} offset={-100} duration={700}>
        <BsFileArrowUp className="arrow-up" />
      </Link>
      <div className="footer">
        <div className="footer-one">
          <h2 className="headerTitle">
            get<span>linked</span>
          </h2>
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className="inline">
            <p className="terms">Terms of Use </p>
            <p className="in">Privacy Policy</p>
          </div>
        </div>
        <div className="footer-two">
          <h3 className="ft">Useful Links</h3>
          <li>Overview</li>
          <li>Timeline</li>
          <li>FAQs</li>
          <li>Register</li>
          <div className="links">
            <div>
              <h4>Follow us</h4>
            </div>
            <div className="socials">
              <li>
                <BsInstagram className="ig" />
              </li>
              <li>
                <BsTwitter className="x" />
              </li>
              <li>
                <BsFacebook className="fb" />
              </li>
              <li>
                <BsLinkedin className="ind" />
              </li>
            </div>
          </div>
        </div>
        <div className="footer-three">
          <h3 className="ft">Contact Us</h3>
          <div className="contacts">
            <div className="contact">
              <div>
                <LuPhoneCall />
              </div>
              <div>+234 6707653444</div>
            </div>
            <div className="contact">
              <div>
                <HiLocationMarker />
              </div>
              <div>
                <li>27, Alara Street</li>
                <li>Yaba 100012</li>
                <li>Lagos State</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <p>All rights reserved. &copy; getlinked Ltd. </p>
      </div>
    </footer>
  );
};

export default Footer;
