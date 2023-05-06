import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import bannerBg from "../../Assets/Images/bannerBg.png";
import bbMan from "../../Assets/Images/bbMan.png";
import miramir from "../../Assets/Images/miramir.png";
import vBeachCalendar from "../../Assets/Images/vbeachCalendar.png";
import upWhite from "../../Assets/Images/upWhite.png";
import upYellow from "../../Assets/Images/upYellow.png";
import downWhite from "../../Assets/Images/downWhite.png";
import downYellow from "../../Assets/Images/downYellow.png";
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
            to="/news-events"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="linear_gradient_container">
              <div className="text_container">
                <h3 className="landing_bg_text">Pro-Tour</h3>
                <h1>2 0 2 3</h1>
              </div>
              <div className="img_container2">
                <div className="abstract_container">
                  <img src={upYellow} alt="" className="yellow_img1" />
                  <img src={upWhite} alt="" className="yellow_img1" />
                </div>
                <img src={vBeachCalendar} alt="" className="miramir_img" />
                <div className="abstract_container">
                  <img src={downYellow} alt="" className="yellow_img1a" />
                  <img src={downWhite} alt="" className="yellow_img1a" />
                </div>
              </div>
            </div>
          </Link>
        </Carousel.Item>

        <Carousel.Item
          style={{ backgroundImage: `url(${bannerBg})` }}
          className="landing_image_bg"
        >
          <Link
            to="/news-events"
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
              <div className="img_container2">
                <div className="abstract_container">
                  <img src={upYellow} alt="" className="yellow_img2" />
                  <img src={upWhite} alt="" className="yellow_img2" />
                </div>
                <img src={miramir} alt="" className="miramir_img" />
                <div className="abstract_container">
                  <img src={downYellow} alt="" className="yellow_img2a" />
                  <img src={downWhite} alt="" className="yellow_img2a" />
                </div>
              </div>
            </div>
          </Link>
        </Carousel.Item>

        <Carousel.Item
          style={{ backgroundImage: `url(${bannerBg})` }}
          className="landing_image_bg"
        >
          <Link
            to="/news-events"
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
              <div className="img_container2">
                <div className="abstract_container">
                  <img src={upYellow} alt="" className="yellow_img3" />
                  <img src={upWhite} alt="" className="yellow_img3" />
                </div>
                <img src={bbMan} alt="" className="miramir_img2" />
                <div className="abstract_container">
                  <img src={downYellow} alt="" className="yellow_img3a" />
                  <img src={downWhite} alt="" className="yellow_img3a" />
                </div>
              </div>
            </div>
          </Link>
        </Carousel.Item>

        <Carousel.Item
          style={{
            backgroundImage:
              'url("https://www.fivb.org/Vis2009/Images/GetImage.asmx?No=202211896")',
          }}
          className="landing_image_bg"
        >
          <Link
            to="/news-events"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="linear_gradient_container3">
              <div className="text_container">
                <h3 className="landing_bg_text">FIVB</h3>
                <p className="small_text">
                  FIVB President Meets Organisers Of Goa’s First-Ever Beach Pro
                  Tour Challenge Event
                </p>
              </div>
              {/* <div className="img_container2">
                <div className="abstract_container">
                  <img src={upYellow} alt="" className="yellow_img3" />
                  <img src={upWhite} alt="" className="yellow_img3" />
                </div>
                <img src={bbMan} alt="" className="miramir_img2" />
                <div className="abstract_container">
                  <img src={downYellow} alt="" className="yellow_img3a" />
                  <img src={downWhite} alt="" className="yellow_img3a" />
                </div>
              </div> */}
            </div>
          </Link>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}

export default CarouselPart;
