import React from "react";
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { HiLocationMarker } from "react-icons/hi";
import { BsFileArrowUp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <img src="/images/gray-star.png" className="foot-graystar" />
      <img src="/images/white-star.png" className="foot-whitestar" />
      <img src="/images/white-star.png" className="foot-whitestar2" />
      <img src="/images/sata-star.png" className="foot-satastar" />
      <LinkRoll
        to="header"
        spy={true}
        smooth={true}
        offset={-100}
        duration={700}
      >
        <BsFileArrowUp className="arrow-up" />
      </LinkRoll>
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
            <p className="terms">
              <LinkRoll
                to="rules"
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
              >
                Terms of Use
              </LinkRoll>
            </p>
            <p className="in">
              <LinkRoll
                to="privacy"
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
              >
                Privacy Policy
              </LinkRoll>
            </p>
          </div>
        </div>
        <div className="footer-two">
          <h3 className="ft">Useful Links</h3>
          <li>
            <LinkRoll
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
            >
              OverView
            </LinkRoll>
          </li>
          <li>
            <LinkRoll
              to="time"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
            >
              Timeline
            </LinkRoll>
          </li>
          <li>
            <LinkRoll
              to="faq"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
            >
              FAQS
            </LinkRoll>
          </li>
          <li>
            <Link to="/register"> Register</Link>
          </li>
          <div className="links">
            <div>
              <h4>Follow us</h4>
            </div>
            <div className="socials">
              <li>
                <Link to="https://www.instagram.com/jlb_me/" target="_blank">
                  <BsInstagram className="ig" />
                </Link>
              </li>
              <li>
                <Link to="https://www.twitter.com/jlbspyder/" target="_blank">
                  <RiTwitterXFill className="x" />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/" target="_blank">
                  <BsFacebook className="fb" />
                </Link>
              </li>
              <li>
                <Link to="https://www.pinterest.com/" target="_blank">
                  <BsLinkedin className="ind" />
                </Link>
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
                <p>27, Alara Street</p>
                <p>Yaba 100012</p>
                <p>Lagos State</p>
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
