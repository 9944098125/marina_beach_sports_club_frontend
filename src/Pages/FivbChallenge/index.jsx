import React from "react";

import fivb from "../../Assets/Images/fivb.jfif";
import "./styles.css";

function FivbChallenge() {
  return (
    <React.Fragment>
      <div className="fivb_container">
        <div className="fivb_header">
          <img src={fivb} alt="" />
          <div className="fivb_text_col">
            <h3 className="fivb_head">FIVB Challenge</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FivbChallenge;
