import React from "react";

const Hero = () => {
  return (
    <div id="hero">
      <img
        src="/images/Purple-Lens-Flare-straight.png"
        alt="lens"
        className="purple-flare-curved"
      />
      <div className="head">
        <h3>Igniting a Revolution in HR Innovation</h3>
        <img
          src="/images/header-line-mobile.png"
          alt=""
          className="mobile-line"
        />
      </div>
      <div className="hero">
        <img src="/images/chain.png" alt="chain" className="chain" />
        <img src="/images/fire.png" alt="fire" className="fire" />
        <img src="/images/bulb.png" alt="bulb" className="bulb" />
        <img src="/images/white-star.png" alt="star" className="white-star" />
        <img src="/images/gray-star.png" alt="star" className="gray-star-top" />
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
            Participate in getlinked tech Hackathon 2003 stand a chance to win a
            Big prize
          </p>
          <button className="btn mobile">Register</button>
          <h1>
            00<span>H</span> 00<span>M</span> 00<span>S</span>
          </h1>
        </div>
        <div className="hero__img">
          <picture className="hero__pix">
            <source
              media="(min-width: 630px)"
              srcSet="/images/man-wearing-smart-glasses-touching-virtual-screen 1.png"
              className="desktop-guy"
            />
            <img
              src="/images/Hackathon-guy-mobile.png"
              alt=""
              className="mobile-guy"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Hero;
