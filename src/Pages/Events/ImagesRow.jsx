import React from "react";

import balls from "../../Assets/Images/balls.png";
import "./styles.css";

function ImagesRow() {
  return (
    <React.Fragment>
      <div className="images_row_container">
        <div className="inner_images_row">
          <img src={balls} alt="" />
          <div className="shady_img1">
            <div className="blue_gradient"></div>
          </div>
          <div className="shady_img2">
            <div className="blue_gradient"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ImagesRow;
