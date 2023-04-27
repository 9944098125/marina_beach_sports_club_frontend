import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./styles.css";
import girls from "../../Assets/Images/girls.png";

function Promotions() {
  return (
    <React.Fragment>
      <div className="promotions_container">
        <div className="promotions_card">
          <img src={girls} alt="" />
          <div className="promotions_text_container">
            <div className="promotions_center_text">
              <p className="promotions_text">
                Promoting National and international competition
              </p>
              <p className="promotions_text">
                Training to upcoming beach related games.
              </p>
              <div className="last_line">
                <p style={{ fontWeight: "800" }} className="promotions_text">
                  See you on the sand!
                </p>
                <button className="register_btn_in_promotions">
                  Register For Free
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
            <div
              style={{ marginTop: "-40%", marginLeft: "50%" }}
              className="ball"
            ></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Promotions;
