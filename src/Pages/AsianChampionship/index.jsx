import React from "react";

import asian from "../../Assets/Images/asian.jfif";
import "./styles.css";

function AsianChampionship() {
  return (
    <React.Fragment>
      <div className="asian_container">
        <div className="asian_header">
          <img src={asian} alt="" />
          <div className="asian_text_col">
            <h3 className="asian_head">Asian Championship</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AsianChampionship;
