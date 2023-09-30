import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css"

const Hero = () => {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  let hrs = new Date().getHours();
  let mins = new Date().getMinutes();
  let sec = new Date().getSeconds();


  const updateTime = () => {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };
  setInterval(updateTime, 1000);

  const hours = hrs.toString().padStart(2, "0");
  const minutes = mins.toString().padStart(2, "0");
  const seconds = sec.toString().padStart(2, "0");

  useEffect(()=> {
    AOS.init({duration: 1000})
  })

  return (
    <>
      <div>
        <img
          src="/images/Purple-Lens-Flare-straight.png"
          alt="lens"
          className="purple-flare-curved"
        />
        <div className="head">
          <h3 data-aos="fade-left">Igniting a Revolution in HR Innovation</h3>
          <img
            src="/images/header-line-mobile.png"
            alt=""
            className="mobile-line"
            data-aos="fade-right"
          />
        </div>
        <div className="hero">
          <img src="/images/chain.png" alt="chain" className="chain" />
          <img src="/images/fire.png" alt="fire" className="fire" />
          <img src="/images/bulb.png" alt="bulb" className="bulb" />
          <img src="/images/white-star.png" alt="star" className="white-star" />
          <img
            src="/images/gray-star.png"
            alt="star"
            className="gray-star-top"
          />
          <img
            src="/images/gray-star.png"
            alt="star"
            className="gray-star-bottom"
          />
          <img
            src="/images/Purple-Lens-Flare-straight.png"
            alt="lens"
            className="purple-flare"
          />

          <div className="hero__info">
            <h1 className="hero-title-top">getlinkedTech</h1>
            <h1 className="hero-title-bottom">
              Hackathon<span className="version">1.0</span>
            </h1>
            <div className="getlinked">
              <img
                src="/images/mobile-Title.png"
                alt=""
                className="mobile-title"
              />
            </div>
            <p>
              Participate in getlinked tech Hackathon 2003 stand a chance to win
              a Big prize
            </p>
            <Link to="/register">
              <button className="btn mobile">Register</button>
            </Link>

            <div className="time">
              <div className="hrs">
                {hours}
                <span className="hrs">H</span>
              </div>
              <div className="mins">
                {minutes}
                <span className="mins">M</span>
              </div>
              <div className="sec">
                {seconds}
                <span className="sec">S</span>
              </div>
            </div>
          </div>
          <div className="hero__img">
            <img
              src="/images/hackathon-guy-desktop2.png"
              alt="boy"
              className="mobile-guy"
            />
            <img
              src="/images/moon-desktop.svg"
              alt="virtual"
              className="moon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
