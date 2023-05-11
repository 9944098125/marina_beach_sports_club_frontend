import React from "react";

import "./styles.css";

function ContactUsHeader() {
  return (
    <React.Fragment>
      <div className="contact_header_container">
        <div className="contactUs_left_part">
          <h2 className="contactUs_head">Contact Us</h2>
          <p className="contactUs_text">
            Working with the right partner to build a nonprofit business should
            empower both you and your marketing. Get in touch with us to learn
            more.
          </p>
        </div>
        <div className="contactUs_right_part">
          <img
            src="https://image.cnbcfm.com/api/v1/image/107134719-1665750955454-gettyimages-1238991745-dhn220306045_ind_at_iow.jpeg?v=1665840601"
            alt=""
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactUsHeader;
