import React from "react";

import "./styles.css";
import TopPart from "./TopPart";
import AboutRow from "./AboutRow";
import Founders from "./Founders";
import Achievements from "./Achievements";
import VisionMission from "./VisionMission";
import Services from "./Services";

export default function About() {
  return (
    <React.Fragment>
      <div className="about_container">
        <TopPart />
        <AboutRow />
        <Founders />
        <VisionMission />
        <Achievements />
        <Services />
      </div>
    </React.Fragment>
  );
}
