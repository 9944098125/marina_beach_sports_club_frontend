import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import aboutLandingImage from "../../Assets/Images/aboutLandingImage2.webp";
import "./styles.css";

function TopPart() {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${aboutLandingImage})`,
          marginBottom: "0",
        }}
        className="landing_image_bg"
      >
        <div className="linear_gradient_container">
          <div className="text_container">
            <h3 className="landing_bg_text">About Us</h3>
            <p className="small_text">
              Our leagues are open to players of all ages and skill levels.
              Whether you're a seasoned veteran or just starting out, we have a
              league that's right for you. We offer leagues for men's and
              women's teams, as well as co-ed teams. Our leagues run year-round,
              with tournaments and special events held throughout the year.
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
