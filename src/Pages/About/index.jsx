import React from "react";

import "./styles.css";
import TopPart from "./TopPart";
import AboutRow from "./AboutRow";
import Founders from "./Founders";
import Achievements from "./Achievements";

export default function About() {
  return (
    <React.Fragment>
      <div className="about_container">
        <TopPart />
        <AboutRow />
        <Founders />
        <Achievements />
      </div>
    </React.Fragment>
  );
}
