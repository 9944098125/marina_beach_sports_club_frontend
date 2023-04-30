import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import landingImage1 from "../../Assets/Images/landingImage1.jpg";
import landingImage2 from "../../Assets/Images/landingImage2.jpg";
import landingImage3 from "../../Assets/Images/landingImage3.jpg";
import "./styles.css";

function CarouselPart() {
  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item
          style={{ backgroundImage: `url(${landingImage1})` }}
          className="landing_image_bg"
        >
          <div className="linear_gradient_container">
            <div className="text_container">
              <h3 className="landing_bg_text">Pro-Tour 2023</h3>
              <p className="small_text">
                We bring you the best beach game ever
              </p>
              <Link
                to="/pro-tour"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="join_btn">
                  Know more
                  <AiOutlineArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item
          style={{ backgroundImage: `url(${landingImage2})` }}
          className="landing_image_bg"
        >
          <div className="linear_gradient_container">
            <div className="text_container">
              <h3 className="landing_bg_text">
                Asian Junior beach volleyball championship
              </h3>
              <p className="small_text">
                2010 is a Mega event witnessed by 5000 people, 54 countries
                involved - 32 teams - 24 in the league - $100k prize money - it
                was event of extravaganza
              </p>
              <Link
                to="/asian-championship"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className="join_btn">
                  Know more
                  <AiOutlineArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item
          style={{ backgroundImage: `url(${landingImage3})` }}
          className="landing_image_bg"
        >
          <div className="linear_gradient_container">
            <div className="text_container">
              <h3 className="landing_bg_text">FIVB challenge 2010</h3>
              <p className="small_text">
                We bring you the best beach game ever
              </p>
              <Link
                to="/fivb-challenge"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className="join_btn">
                  Know more
                  <AiOutlineArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}

export default CarouselPart;
