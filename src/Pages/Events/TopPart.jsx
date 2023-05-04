import React from "react";

import galleryImage from "../../Assets/Images/galleryImage.png";
import blueLine1 from "../../Assets/Images/blueLine1.png";
import blueLine2 from "../../Assets/Images/blueLine2.png";
import blueLine3 from "../../Assets/Images/blueLine3.png";
import blueLine4 from "../../Assets/Images/blueLine4.png";
import "./styles.css";

function TopPart() {
  return (
    <React.Fragment>
      <div className="top_part_container">
        <img src={blueLine1} alt="" className="line1" />
        <img src={blueLine2} alt="" className="line2" />
        <div className="gallery_text_container">
          <h3 className="gallery_head">Events</h3>
          <p className="gallery_text">
            Our leagues are open to players of all ages and skill levels.
            Whether you're a seasoned veteran or just starting out, we have a
            league that's right for you. We offer leagues for men's and women's
            teams, as well as co-ed teams. Our leagues run year-round, with
            tournaments and special events held throughout the year.
          </p>
        </div>
        <img src={galleryImage} alt="" className="gallery_image" />
        <img src={blueLine4} alt="" className="line3" />
        <img src={blueLine3} alt="" className="line4" />
      </div>
    </React.Fragment>
  );
}

export default TopPart;
