import React from "react";

import proTour from "../../Assets/Images/proTour.jfif";
import "./styles.css";

export default function ProTour() {
  return (
    <React.Fragment>
      <div className="pro_tour_container">
        <div className="pro_tour_header">
          <img src={proTour} alt="" />
          <div className="pro_tour_text_col">
            <h3 className="pro_tour_head">Pro Tour</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
