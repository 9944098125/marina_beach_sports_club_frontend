import React from "react";

import clubHistoryImage from "../../Assets/Images/clubHistoryImage.png";
import "./styles.css";

function AboutRow() {
  return (
    <React.Fragment>
      <div className="row_container2">
        <div className="about_row">
          <div className="about_text_container">
            <h3 className="about_head">Club History</h3>
            <p className="about_text">
              Welcome to the Beach Volleyball Association of India! Our
              association was founded in [year] with the goal of developing and
              promoting beach volleyball in all coastal areas of India. We are
              passionate about this exciting sport and are dedicated to
              improving the caliber of beach volleyball players across the
              country. Our mission is to create opportunities for beach
              volleyball players to excel, both locally and internationally. We
              are committed to providing the resources and support necessary for
              our players to compete at the highest level of the sport. Our
              association is open to players of all skill levels and ages. We
              offer training programs, leagues, and tournaments throughout the
              year to help our members improve their skills and compete against
              other talented players from around the country. We also work
              closely with national and international organizations to provide
              our members with opportunities to participate in international
              sports events. We believe that these events help to promote unity,
              friendship, and understanding among players from different
              backgrounds and cultures.
            </p>
          </div>
          <img src={clubHistoryImage} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutRow;
