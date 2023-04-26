import React from "react";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

import logo from "../../Assets/Images/logo.png";
import "./styles.css";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="footer_container">
        <div
          style={{ boxShadow: "none", paddingTop: "7%" }}
          className="div_with_logo"
        >
          <img src={logo} alt="" />
          <div className="social_media_icons_container">
            <AiOutlineTwitter color="white" />
            <AiFillFacebook color="white" />
            <AiFillLinkedin color="white" />
            <AiFillYoutube color="white" />
            <AiFillInstagram color="white" />
          </div>
        </div>
        <div className="footer_bottom_part">
          <p className="light_text">2023 Events</p>
          <p className="light_text">Where To Watch</p>
          <p className="light_text">World Ranking</p>
          <p className="light_text">Gallery</p>
          <p className="light_text">Media</p>
          <p className="light_text">Subscribe with Us</p>
        </div>
      </div>
    </React.Fragment>
  );
}
