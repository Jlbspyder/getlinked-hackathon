import React from "react";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <img
        src="/images/Purple-Lens-Flare-straight.png"
        className="sponsor-purpleBg"
      />
      <img
        src="/images/Purple-Lens-Flare-straight.png"
        className="sponsor-purpleBg2"
      />
      <div className="sponsors__info">
        <h2 className="headerTitle">Partners and Sponsors</h2>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its Partnersand sponsors
        </p>
      </div>
      <div className="sponsor">
        <img src="/images/sata-star.png" alt="" className="sponsor-satastar" />
        <img src="/images/sata-star.png" alt="" className="sponsor-satastar2" />
        <img
          src="/images/white-star.png"
          alt=""
          className="sponsor-whitestar"
        />
        <picture>
          <source
            media="(min-width:770px)"
            srcSet="/images/Partner-and-sponsors.png"
            className="desktop-sponsors"
          />
          <img
            src="/images/Partner-sponsors-section-mobile.png"
            alt="companies"
            className="mobile-sponsors"
          />
        </picture>
      </div>
    </div>
  );
};

export default Sponsors;
