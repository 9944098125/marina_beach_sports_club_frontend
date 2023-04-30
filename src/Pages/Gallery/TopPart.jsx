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
          <h3 className="gallery_head">Gallery</h3>
          <p className="gallery_text">
            Welcome to our Volleyball gallery!, Here you will find a collection
            of Photos and videos from some of the most exciting volleyball
            tournaments.
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
