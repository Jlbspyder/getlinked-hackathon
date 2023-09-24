import React from "react";

const Faqs = () => {
  return (
    <div className="faqs flex" id="faq">
      <div className="attributes__info ">
        <h2>Frequently Ask</h2>
        <h2>
          <span>Question</span>
        </h2>
        <p className="lead">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <div className="questions">
          <p>
            Can I work on a project I started before the hackathon?
            <span>+</span>
          </p>
          <p>
            What happens if I need help during the hackathon?<span>+</span>
          </p>
          <p>
            What happens if I dont have an idea for a <br />
            project?<span>+</span>
          </p>
          <p>
            Can I join a team or do I have to come with <br />
            one?<span>+</span>
          </p>
          <p>
            What happens after the hackathon ends?<span>+</span>
          </p>
        </div>
        <img src="/images/star pu.png" alt="star" className="faq-sata" />
      </div>
      <div className="faqs__img">
        <img
          src="/images/question-mark-big.png"
          alt="pix"
          className="big-ques"
        />
        <img
          src="/images/question-mark-small.png"
          alt="pix"
          className="small-ques"
        />
        <img
          src="/images/question-mark-small.png"
          alt="pix"
          className="small-ques2"
        />
        <img src="/images/gray-star.png" alt="star" className="faq-graystar" />
        <img
          src="/images/sata-star.png"
          alt="star"
          className="faq-purplestar"
        />
        <img
          src="/images/sata-star.png"
          alt="star"
          className="faq-purplestar2"
        />
        <img
          src="/images/white-star.png"
          alt="star"
          className="faq-whitestar"
        />
        <picture>
          <source
            media="(min-width: 630px)"
            srcSet="/images/man-thinking-desktop.png"
            className="desktop-thinking"
          />
          <img
            src="/images/man-thinking-mobile.png"
            alt="man"
            className="mobile-thinking"
          />
        </picture>
      </div>
    </div>
  );
};

export default Faqs;
