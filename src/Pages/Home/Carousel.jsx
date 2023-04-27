import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Carousel } from "react-bootstrap";

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
              <h3 className="landing_bg_text">
                The Whole New Level Game Play in India
              </h3>
              <p className="small_text">
                We bring you the best beach game ever
              </p>
              <button className="join_btn">
                Join Us Now
                <AiOutlineArrowRight />
              </button>
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
                The Whole New Level Game Play in India
              </h3>
              <p className="small_text">
                We bring you the best beach game ever
              </p>
              <button className="join_btn">
                Join Us Now
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item
          style={{ backgroundImage: `url(${landingImage3})` }}
          className="landing_image_bg"
        >
          <div className="linear_gradient_container">
            <div className="text_container">
              <h3 className="landing_bg_text">
                The Whole New Level Game Play in India
              </h3>
              <p className="small_text">
                We bring you the best beach game ever
              </p>
              <button className="join_btn">
                Join Us Now
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}

export default CarouselPart;
