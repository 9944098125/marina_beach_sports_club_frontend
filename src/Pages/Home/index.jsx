import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import Carousel from "react-bootstrap/Carousel";

import "./styles.css";
import IntroductionCard from "./IntroductionCard";
import Upcoming from "./Upcoming";
import VideosGrid from "./VideosGrid";
import mikasa from "../../Assets/Images/mikasa.png";
import sponsor from "../../Assets/Images/Vector.png";
import smallMikasa from "../../Assets/Images/smallMikasa.png";
import Promotions from "./Promotions";

export default function Home() {
  const mobileView = useMediaQuery({
    query: "(max-width:400px)",
  });
  return (
    <React.Fragment>
      <div className="landing_image_bg">
        <div className="linear_gradient_container">
          <div className="text_container">
            <h3 className="landing_bg_text">
              The Whole New Level Game Play in India
            </h3>
            <p className="small_text">We bring you the best beach game ever</p>
            <button className="join_btn">
              Join Us Now
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="intro_card_container">
        <IntroductionCard />
      </div>
      <div className="upcoming_events_container">
        <Upcoming />
      </div>
      <div className="videos_grid_container">
        <VideosGrid />
      </div>
      {!mobileView && (
        <div className="black_line">
          <img src={sponsor} alt="" />
          <img src={sponsor} alt="" />
          <img src={sponsor} alt="" />
          <img src={sponsor} alt="" />
          <img src={smallMikasa} alt="" />
          <img src={sponsor} alt="" />
        </div>
      )}
      <div className="mikasa_img">
        <img src={mikasa} alt="" />
      </div>
      <Promotions />
    </React.Fragment>
  );
}
