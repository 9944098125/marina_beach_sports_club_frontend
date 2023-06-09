import React from "react";
import { FaHandPointLeft } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import bannerBg from "../../Assets/Images/bannerBg.png";
import miramir from "../../Assets/Images/miramir.png";
import vBeachCalendar from "../../Assets/Images/vbeachCalendar.png";
import "./styles.css";

function CarouselPart() {
  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item
          style={{
            backgroundImage: `url(${bannerBg})`,
            padding: "50px 0 0 50px",
          }}
          className="landing_image_bg"
        >
          <Link
            to="/news-events"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="linear_gradient_container">
              <div className="text_container">
                <h3 style={{ color: "black" }} className="landing_bg_text">
                  Pro-Tour
                </h3>
                <h1>2 0 2 3 </h1>
                <button className="join_btn">Know More →</button>
              </div>

              <div className="img_container2">
                <img src={vBeachCalendar} alt="" className="miramir_img" />
                <FaHandPointLeft
                  fontSize="25px"
                  color="red"
                  className="pointer"
                />
              </div>
            </div>
          </Link>
        </Carousel.Item>

        <Carousel.Item
          style={{ backgroundImage: `url(${miramir})` }}
          className="landing_image_bg"
        >
          <Link
            to="/news-events"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="linear_gradient_container3">
              <div className="text_container">
                <h3 className="landing_bg_text">Miramir beach</h3>
                <p className="small_text">
                  The World Beach Pro Tour is an entertainment platform that
                  combines Sport, Music, Food and the Beach Lifestyle within a
                  single event space.
                </p>
                <button className="join_btn">Know More →</button>
              </div>
            </div>
          </Link>
        </Carousel.Item>

        <Carousel.Item
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dakda5ni3/image/upload/v1683443179/gen1p88gvj10q4g4mwn6.jpg")',
          }}
          className="landing_image_bg"
        >
          <Link
            to="/news-events"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="linear_gradient_container3">
              <div className="text_container">
                <h3 className="landing_bg_text">
                  Goa World Beach Pro Tour 2023
                </h3>
                <p className="small_text">
                  Come for the sport – and stay for the party! And then come
                  again for both. This is what makes World Beach Pro Tour
                  unique.
                </p>
                <button className="join_btn">Know More →</button>
              </div>
            </div>
          </Link>
        </Carousel.Item>

        <Carousel.Item
          style={{
            backgroundImage:
              'url("https://www.fivb.org/Vis2009/Images/GetImage.asmx?No=202211896")',
            backgroundPosition: "top",
          }}
          className="landing_image_bg"
        >
          <Link
            id="fivb"
            to="/newsroom"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="linear_gradient_container3">
              <div style={{ paddingBottom: "50px" }} className="text_container">
                <h3 className="landing_bg_text">FIVB</h3>
                <p className="small_text2">
                  FIVB President Meets Organisers Of Goa’s First-Ever Beach Pro
                  Tour Challenge Event
                </p>
                <button className="join_btn">Know More →</button>
              </div>
            </div>
          </Link>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}

export default CarouselPart;
