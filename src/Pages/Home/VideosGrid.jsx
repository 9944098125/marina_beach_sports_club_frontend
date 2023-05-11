import React from "react";

import grid1 from "../../Assets/Images/grid1.jpg";
import grid2 from "../../Assets/Images/grid2.jpg";
import grid3 from "../../Assets/Images/grid3.jpg";

import "./styles.css";

function VideosGrid() {
  return (
    <React.Fragment>
      <div className="videos_grid_row">
        <div className="each_video_item">
          <img src={grid1} alt="" />
        </div>
        <div className="each_video_item">
          <img src={grid2} alt="" />
        </div>
        <div className="each_video_item">
          <img src={grid3} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default VideosGrid;
