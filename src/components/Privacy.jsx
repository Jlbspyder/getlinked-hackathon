import React from "react";

const Privacy = () => {
  return (
    <div className="privacy">
      <img src="/images/gray-star.png" className="priv-graystar" />
      <img src="/images/gray-star.png" className="priv-graystar2" />
      <img src="/images/white-star.png" className="priv-whitestar" />
      <img src="/images/white-star.png" className="priv-whitestar2" />
      <img src="/images/sata-star.png" className="priv-satastar" />
      <img src="/images/sata-star.png" className="priv-satastar2" />
      <img src="/images/sata-star.png" className="priv-satastar3" />
      <img
        src="/images/Purple-Lens-Flare-straight.png"
        className="priv-purpleBg"
      />
      <div className="privacy__info">
        <div className="privacy__header">
          <h2 className="headerTitle priv">Privacy Policy and</h2>
          <h2 className="headerTitle priv">
            <span>Terms</span>
          </h2>
          <p>Last updated on September 12, 2023</p>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. It's
            our aim to always take care of our participants
          </p>
        </div>
        <div className="privacy__terms">
          <p className="first">
            At grtlinked tech Hackathon, we value your privacy and are committed
            to protecting your personal information. This Privacy policy
            outlines how we collect, use, dislose, and safeguard your data when
            you participate in our tech hackathon events. By participating you
            consent to the practices described in this policy.
          </p>
          <h3>
            <span>Licensing Policy</span>
          </h3>
          <p className="priv-lead">
            <span>Here are terms of our Standard License:</span>
          </p>
          <div className="license">
            <div>
              <img src="/images/green-check.png" className="checkmark" />
            </div>
            <p>
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </p>
          </div>
          <div className="license">
            <div>
              <img src="/images/green-check.png" className="checkmark" />
            </div>
            <p>
              You are licensed to use the item available at any free source
              sites, for your project development
            </p>
          </div>
          <button className="privy">Read More</button>
        </div>
      </div>
      <div className="privacy__img">
        <img src="/images/mobile-lock-bg.png" alt="" className="mobile-lock" />
        <picture>
          <source
            media="(min-width:770px)"
            srcSet="/images/padlock.png"
            className="desktop-padlock"
          />
          <img
            src="/images/padlock-mobile.png"
            alt="padlock"
            className="mobile-padlock"
          />
        </picture>
      </div>
    </div>
  );
};

export default Privacy;
