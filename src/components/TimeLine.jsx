import React, { forwardRef } from "react";

const TimeLine = () => {
  return (
    <div className="timeline" id="time">
      <div className="timeline__header">
        <h2>Timeline</h2>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="timeline__agenda">
        <div className="left">
          <h2>Hackathon Announcement</h2>
          <p>
            The getlinked tech hackathon 1.0 is formally announced to the
            general public and teams begin to get ready to register
          </p>
          <h2>November 18, 2023</h2>
          <h2>Teams Registration ends</h2>
          <p>Interested Participants are no longer allowed to register</p>
          <h2>November 18, 2023</h2>
          <h2>Getlinked Hackathon 1.0 Officially Begins</h2>
          <p>
            Accepted teams can now proceed to build their ground breaking skill
            driven solutions
          </p>
          <h2>November 18, 2023</h2>
        </div>
        <div className="desktop-wrapper">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div className="bar4"></div>
          <div className="bar5"></div>
          <div className="bar6"></div>
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <div className="circle5"></div>
          <div className="circle6"></div>
          <div className="one">1</div>
          <div className="two">2</div>
          <div className="three">3</div>
          <div className="four">4</div>
          <div className="five">5</div>
          <div className="six">6</div>
        </div>
        <div className="right">
          <h2>November 18, 2023</h2>
          <h2>Team Registration begins</h2>
          <p>
            Interested teams can now show their interest in the getlinked tech
            hackathon 1.0 2023 by proceeding to register
          </p>
          <h2>November 18, 2023</h2>
          <h2>Announcement of the accepted teams and ideas</h2>
          <p>
            All teams whom ideas have been accepted into the getlinked tech
            hackathon 1.0 2023 are formally announced
          </p>
          <h2>November 18, 2023</h2>
          <h2>Demo Day</h2>
          <p>
            Teams get the opportunity to pitch their projects to judges. The
            winner of the hackathon will also be announced on this day
          </p>
        </div>
      </div>
      <div className="mobile-timeline__agenda">
        <div className="agenda">
          <h2>Hackathon Announcement</h2>
          <p>
            The getlinked tech hackathon 1.0 is formally announced to the
            general public and teams begin to get ready to register
          </p>
          <h2>November 18, 2023</h2>
          <h2>Team Registration begins</h2>
          <p>
            Interested teams can now show their interest in the getlinked tech
            hackathon 1.0 2023 by proceeding to register
          </p>
          <h2>November 18, 2023</h2>
          <h2>Teams Registration ends</h2>
          <p>Interested Participants are no longer allowed to register</p>
          <h2>November 18, 2023</h2>
          <h2>Announcement of the accepted teams and ideas</h2>
          <p>
            All teams whom ideas have been accepted into the getlinked tech
            hackathon 1.0 2023 are formally announced
          </p>
          <h2>November 18, 2023</h2>
          <h2>Getlinked Hackathon 1.0 Officially Begins</h2>
          <p>
            Accepted teams can now proceed to build their ground breaking skill
            driven solutions
          </p>
          <h2>November 18, 2023</h2>
          <h2>Demo Day</h2>
          <p>
            Teams get the opportunity to pitch their projects to judges. The
            winner of the hackathon will also be announced on this day
          </p>
          <h2>November 18, 2023</h2>
          <div className="wrapper">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <div className="bar4"></div>
            <div className="bar5"></div>
            <div className="bar6"></div>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="circle6"></div>
            <div className="one">1</div>
            <div className="two">2</div>
            <div className="three">3</div>
            <div className="four">4</div>
            <div className="five">5</div>
            <div className="six">6</div>
          </div>
        </div>
      </div>
      <img src="/images/gray-star.png" alt="star" className="time-graystar" />
      <img src="/images/sata-star.png" alt="star" className="time-satastar" />
      <img src="/images/white-star.png" alt="star" className="time-whitestar" />
    </div>
  );
};

export default TimeLine;
