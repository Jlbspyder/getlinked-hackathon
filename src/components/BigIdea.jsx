import React from "react";

const BigIdea = () => {
  return (
    <div className="idea flex">
      <div className="idea__pix">
        <div className="light">
          <img
            src="/images/The big idea.png"
            alt="idea"
            className="idea__img"
          />
          <img src="/images/arrow.png" alt="arrow" className="arrow" />
        </div>
        <img src="/images/sata-star.png" alt="sata" className="sata-star" />
      </div>
      <div className="idea__info">
        <h2>Introduction to getlinked</h2>
        <h2>
          <span>techHackathon 1.0</span>
        </h2>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what wr're all about!
        </p>
        <img src="/images/star pu.png" alt="star" className="purple-star" />
      </div>
    </div>
  );
};

export default BigIdea;
