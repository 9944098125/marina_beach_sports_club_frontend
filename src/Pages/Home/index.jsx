import React from "react";
import { useMediaQuery } from "react-responsive";

import "./styles.css";
import IntroductionCard from "./IntroductionCard";
import Upcoming from "./Upcoming";
import VideosGrid from "./VideosGrid";
import mikasa from "../../Assets/Images/mikasa.png";
import sponsor from "../../Assets/Images/Vector.png";
import smallMikasa from "../../Assets/Images/smallMikasa.png";
import Promotions from "./Promotions";
import CarouselPart from "./Carousel";

export default function Home() {
  const mobileView = useMediaQuery({
    query: "(max-width:400px)",
  });
  return (
    <React.Fragment>
      <CarouselPart />
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
