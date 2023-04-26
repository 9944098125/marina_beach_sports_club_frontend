import React from "react";

import "./styles.css";

function IntroductionCard() {
  return (
    <React.Fragment>
      <div className="intro_card">
        <div className="ball"></div>
        <h3 className="intro_text">Welcome to Marina Beach Sports Club!</h3>
        <hr className="vertical_line" />
        <p className="intro_small_text">
          Founded by Martin Sudhakar, the Godfather of Indian Beach Volleyball,
          Marina Beach Sports Club is proud to be one of the pioneers of beach
          sports in India. With a focus on promoting fitness, wellness, and
          community engagement, we are committed to providing top-notch sporting
          facilities and events for enthusiasts of all ages and abilities.
        </p>
        <div style={{ marginBottom: "15%" }} className="ball"></div>
      </div>
    </React.Fragment>
  );
}

export default IntroductionCard;
