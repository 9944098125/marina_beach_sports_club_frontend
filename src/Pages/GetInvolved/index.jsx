import React from "react";

import "./styles.css";
import ContactUsHeader from "./ContactUsHeader";
import ContactUsForm from "./ContactUsForm";

export default function GetInvolved() {
  return (
    <React.Fragment>
      <div className="get_involved_container">
        <ContactUsHeader />
        <div className="phone_address_container">
          <div className="middle_row">
            <div className="item_container">
              <h3>Phone</h3>
              <p className="value">+91 923423423</p>
            </div>
            <div className="item_container">
              <h3>Address</h3>
              <p className="value">
                Dno - 11-220, venkatappa Nagar, somayajulu colony, Chennai,
                Tamil Nadu.
              </p>
            </div>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </React.Fragment>
  );
}
