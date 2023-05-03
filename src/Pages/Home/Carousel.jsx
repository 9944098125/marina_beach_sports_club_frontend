import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import bannerBg from "../../Assets/Images/bannerBg.png";
import bbMan from "../../Assets/Images/bbMan.png";
import miramir from "../../Assets/Images/miramir.png";
import vBeachCalendar from "../../Assets/Images/vbeachCalendar.png";
import "./styles.css";

function CarouselPart() {
  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item
          style={{ backgroundImage: `url(${bannerBg})` }}
          className="landing_image_bg"
        >
          <Link
            to="/pro-tour"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="linear_gradient_container">
              <div className="text_container">
                <h3 className="landing_bg_text">Pro-Tour</h3>
                <h1>2 0 2 3</h1>
              </div>
              <img src={vBeachCalendar} alt="" />
            </div>
          </Link>
        </Carousel.Item>

        <Carousel.Item
          style={{ backgroundImage: `url(${bannerBg})` }}
          className="landing_image_bg"
        >
          <Link
            to="/asian-championship"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="linear_gradient_container">
              <div className="text_container">
                <h3 className="landing_bg_text">Miramir beach</h3>
                <p className="small_text">
                  The World Beach Pro Tour is an entertainment platform that
                  combines Sport, Music, Food and the Beach Lifestyle within a
                  single event space.
                </p>
              </div>
              <img src={miramir} alt="" />
            </div>
          </Link>
        </Carousel.Item>

        <Carousel.Item
          style={{ backgroundImage: `url(${bannerBg})` }}
          className="landing_image_bg"
        >
          <Link
            to="/fivb-challenge"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="linear_gradient_container">
              <div className="text_container">
                <h3 className="landing_bg_text">
                  Goa World Beach Pro Tour 2023
                </h3>
                <p className="small_text">
                  Come for the sport – and stay for the party! And then come
                  again for both. This is what makes World Beach Pro Tour
                  unique.
                </p>
              </div>
              <img src={bbMan} alt="" />
            </div>
          </Link>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}

export default CarouselPart;
