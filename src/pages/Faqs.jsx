import React, { useState, useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import { data } from "../data"

const Faqs = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = (index) => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }
  useEffect(()=> {
    AOS.init({duration: 1000})
  })

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
        <div className="questions" data-aos="fade-right">
          {data.map((item, index) => (
            <div className="quest" key={index}>
              <div className="question" onClick={() => handleClick(index)}>
                  <p data-aos="fade-right">{item.question}</p>
                  <span>{clicked === index ? "-" : "+"}</span>
              </div>
              {clicked === index ? <small>{item.answer}</small> : null}
            </div>
          ))}
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
