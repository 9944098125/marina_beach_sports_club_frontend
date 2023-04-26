import React from "react";

import videoIcon from "../../Assets/Images/videoIcon.png";

function VideosGrid() {
  return (
    <React.Fragment>
      <div className="videos_grid_row">
        <div className="each_video_item1">
          <div className="linear_gradient_container2">
            <img src={videoIcon} alt="" />
          </div>
        </div>
        <div className="each_video_item2">
          <div className="linear_gradient_container2">
            <img src={videoIcon} alt="" />
          </div>
        </div>
        <div className="each_video_item3">
          <div className="linear_gradient_container2">
            <img src={videoIcon} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VideosGrid;
