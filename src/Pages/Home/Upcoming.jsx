import React from "react";

import upcoming from "../../Assets/Images/upcoming.png";
import "./styles.css";

function Upcoming() {
  return (
    <React.Fragment>
      <div className="upcoming_events_row">
        <div className="img_container">
          <img src={upcoming} alt="" />
        </div>
        <div className="upcoming_text_container">
          <h3 className="upcoming_head">Beach Volleyball</h3>
          <p className="upcoming_text">
            We are thrilled to announce our upcoming program for the
            International Beach Games, which will be held over the course of 10
            days. The event promises to be an exciting and action-packed
            extravaganza, featuring multiple sports activities that will
            challenge and inspire athletes from around the world.
          </p>
          <p className="upcoming_text">
            Some of the sports events that we will be hosting at Marina Beach
            Sports Club during the International Beach Games include:
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Upcoming;
