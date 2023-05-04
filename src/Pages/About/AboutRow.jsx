import React from "react";

import clubHistoryImage from "../../Assets/Images/clubHistoryImage.png";
import "./styles.css";

function AboutRow() {
  return (
    <React.Fragment>
      <div className="row_container2">
        <div className="about_row">
          <div className="about_text_container">
            <h3 className="about_head">Club History</h3>
            <p className="about_text">
              Marina Beach Volleyball Club was founded in 1992 by AJ Martin
              Sudhakar, a renowned figure in the world of beach volleyball. Over
              the years, the club has organized and conducted more than 10
              national and international events, promoting and developing beach
              volleyball in India. In 2023, the club was rebranded and renamed
              as Marina Beach Sports Club, with a vision to support and promote
              other beach sports such as Beach soccer, Beach Kabadi, and Beach
              Handball. Under the leadership of AJ Martin Sudhakar, the club
              aims to provide a platform for sports enthusiasts to learn, train,
              and compete in various beach sports. AJ Martin Sudhakar, popularly
              known as the God Father of Beach Volleyball, has been instrumental
              in the development and growth of beach sports in India. His
              passion for the sport has led to the creation of numerous
              opportunities for young athletes to showcase their skills and
              compete at national and international levels. The Marina Beach
              Sports Club continues to carry forward the legacy of AJ Martin
              Sudhakar, with a strong focus on promoting unity, friendship, and
              understanding among its members and fostering a love for beach
              sports in the community.
            </p>
          </div>
          <img src={clubHistoryImage} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutRow;
