import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import newsLandingImage from "../../Assets/Images/newsLandingImage.jpg";
import "./styles.css";

function TopPart() {
  return (
    <React.Fragment>
      <div
        style={{ backgroundImage: `url(${newsLandingImage})` }}
        className="landing_image_bg"
      >
        <div className="linear_gradient_container3">
          <div className="text_container">
            <h3 className="landing_bg_text">Gallery</h3>
            <p className="small_text">
              Welcome to our volleyball gallery! Here, you'll find a collection
              of photos and videos from some of the most exciting volleyball
              tournaments and events organized by the Marina Beach Sports Club.
            </p>
            <button className="join_btn">
              Join Us Now
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TopPart;
