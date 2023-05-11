import React from "react";
import { Carousel } from "react-bootstrap";

import ourLogo from "../../Assets/Images/logo.png";
import fivb from "../../Assets/Images/fivb.png";
import volleyBallLogo from "../../Assets/Images/vBeachLogo.png";
import "./styles.css";

function TopPart() {
  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item>
          <div className="top_part_container1">
            <div className="gallery_text_container">
              <h3 className="gallery_head">Events</h3>
              <p className="gallery_text">
                Our leagues are open to players of all ages and skill levels.
                Whether you're a seasoned veteran or just starting out, we have
                a league that's right for you. We offer leagues for men's and
                women's teams, as well as co-ed teams. Our leagues run
                year-round, with tournaments and special events held throughout
                the year.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="top_part_container_with_logos">
            <div className="logos_flex_container">
              <div className="gallery_text_container2">
                <h3 style={{ width: "100%" }} className="gallery_head">
                  Pro-Tour
                </h3>
                <p className="gallery_text">
                  we are proud to organize beach volleyball pro tour for the
                  first time in india, goa.
                </p>
              </div>
              <div className="top_part_logo_container">
                <img src={ourLogo} alt="" className="logosInEvents" />
              </div>
              <div className="top_part_logo_container">
                <img src={fivb} alt="" className="logosInEvents2" />
              </div>
              <div className="top_part_logo_container">
                <img src={volleyBallLogo} alt="" className="logosInEvents" />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}

export default TopPart;
