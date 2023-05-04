import React from "react";

function Rows({ index, image, head, text }) {
  return (
    <React.Fragment>
      <div className="row_container">
        {index % 3 === 0 ? (
          <div className="total_row">
            <img src={image} alt="" />
            <div className="rows_text_container">
              <h3 className="head">{head}</h3>
              <h5 className="text">{text}</h5>
            </div>
          </div>
        ) : (
          <div className="total_row">
            <div className="rows_text_container">
              <h3 className="head">{head}</h3>
              <h5 className="text">{text}</h5>
            </div>
            <img src={image} alt="" />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Rows;
