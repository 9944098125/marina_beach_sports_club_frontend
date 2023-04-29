import React from "react";

import grid from "../../Assets/Images/grid.png";
import "./styles.css";

function Founders() {
  return (
    <React.Fragment>
      <div className="founders_container">
        <div className="grid_container">
          <h2 className="founders_head">The Founders and Leaders Profiles</h2>
          <div className="grid_row">
            <div className="each_grid">
              <img src={grid} alt="" />
              <p className="grid_text">Sam Armstrong</p>
              <p className="grid_text_2">Head of Private Equity, Partner</p>
            </div>
            <div className="each_grid">
              <img src={grid} alt="" />
              <p className="grid_text">Kate Hayward</p>
              <p className="grid_text_2">Partner</p>
            </div>
            <div className="each_grid">
              <img src={grid} alt="" />
              <p className="grid_text">Brett Scallon</p>
              <p className="grid_text_2">Business Development Manager</p>
            </div>
            <div className="each_grid">
              <img src={grid} alt="" />
              <p className="grid_text">Sam Armstrong</p>
              <p className="grid_text_2">Head of Private Equity, Partner</p>
            </div>
            <div className="each_grid">
              <img src={grid} alt="" />
              <p className="grid_text">Kate Hayward</p>
              <p className="grid_text_2">Partner</p>
            </div>
            <div className="each_grid">
              <img src={grid} alt="" />
              <p className="grid_text">Brett Scallon</p>
              <p className="grid_text_2">Business Development Manager</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Founders;
