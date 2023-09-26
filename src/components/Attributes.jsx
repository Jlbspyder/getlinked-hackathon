import React from "react";

const Attributes = () => {
  return (
    <div className="attributes flex">
      <img src="/images/Ellipse-2.png" alt="elipse" className="ellipse" />
      <div className="attributes__img">
        <img
          src="/images/man-woman-standing.png"
          alt="people standing"
          className="people"
        />
        <img src="/images/gray-star.png" alt="star" className="attr-graystar" />
        <img src="/images/star pu.png" alt="star" className="attr-purplestar" />
        <img
          src="/images/Purple-Lens-Flare-straight.png"
          alt="flare"
          className="atrr-purplebg"
        />
      </div>
      <div className="attributes__info">
        <h2>Judging Criteria</h2>
        <h2>
          <span>Key attributes</span>
        </h2>
        <p>
          <span>Innovation and Creativity: </span>
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>
        <p>
          <span>Functionality: </span>
          Assess how well the solution works. Does it perform its intended
          functions effectively and without major issues? Judges would consider
          the completeness and robustness of the solution.
        </p>
        <p>
          <span>Impact and Relevance: </span>
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </p>
        <p>
          <span>Technical Complexity: </span>
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </p>
        <p>
          <span>Adherence to Hackathon Rules: </span>
          Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>
        <div>
          <button className="btn">Read More</button>
        </div>
        <img
          src="/images/white-star.png"
          alt="star"
          className="attr-whitestar"
        />
        <img
          src="/images/Purple-Lens-Flare-straight.png"
          alt="flare"
          className="atrr-purplebg2"
        />
      </div>
    </div>
  );
};

export default Attributes;
