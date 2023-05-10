import React from "react";

import vBeachLogo from "../../Assets/Images/vBeachLogo.png";
import "./styles.css";

function CalendarImage() {
  const grids = [
    {
      date: "1 - 5 NOVEMBER",
      city: "DUBAI",
      country: "UAE",
    },
    {
      date: "20 - 23 JULY",
      city: "EDMONTON",
      country: "CANADA",
    },
    {
      date: "2 - 5 NOVEMBER",
      city: "HAINAN",
      country: "CHINA",
    },
    {
      date: "1 - 5 FEBRUARY",
      city: "DOHA",
      country: "QATAR",
    },
    {
      date: "26 - 30 APRIL",
      city: "UBERLANDIA",
      country: "BRAZIL",
    },
    {
      date: "28 - 30 JULY",
      city: "MONTREAL",
      country: "CANADA",
    },
    {
      date: "16 - 19 NOVEMBER",
      city: "CHIANG MAI",
      country: "THAILAND",
    },
    {
      date: "16 - 19 MARCH",
      city: "LA PAI",
      country: "MEXICO",
    },
    {
      date: "28 - 30 JULY",
      city: "OSTRAVA",
      country: "CIECH REPUBLIC",
    },
    {
      date: "16 - 20 AUGUST",
      city: "HAMBURG",
      country: "GERMANY",
    },
    {
      date: "22 - 26 NOVEMBER",
      city: "",
      country: "AUSTRALIA",
    },
    {
      date: "22 - 26 MARCH",
      city: "TEPIC",
      country: "MEXICO",
    },
    {
      date: "15 - 18 JUNE",
      city: "JURMALA",
      country: "LATVIA",
    },
    {
      date: "22 - 26 NOVEMBER",
      city: "PARIS",
      country: "FRANCE",
    },
    {
      date: "22 - 26 MARCH",
      city: "TAGUIG CITY",
      country: "PHILLIPHINES",
    },
    {
      date: "6 - 9 APRIL",
      city: "ITAPEMA",
      country: "BRAZIL",
    },
    {
      date: "13 - 15 JULY",
      city: "ESPINHO",
      country: "PORTUGAL",
    },
    {
      date: "5 - 9 JULY",
      city: "GSTAAD",
      country: "SWITZERLAND",
    },
    {
      date: "19 - 22 OCTOBER",
      city: "GOA",
      country: "INDIA",
    },
    {
      date: "13 - 16 APRIL",
      city: "SAQUAREMA",
      country: "BRAZIL",
    },
    {
      date: "26 - 29 OCTOBER",
      city: "",
      country: "MALDIVIS",
    },
  ];
  return (
    <React.Fragment>
      <div className="big_box">
        <div className="round_container">
          <img src={vBeachLogo} alt="" />
        </div>
        <div className="main_calendar">
          <div className="calendar_grid">
            {grids.map((grid, idx) => (
              <div key={idx} className="calendar_item">
                <div className="date_container">{grid.date}</div>
                <div
                  className="country_container"
                  style={{
                    border: `${
                      idx % 2 === 0 ? "4px solid #B9404C" : "4px solid #5518A5"
                    }`,
                    color: `${idx % 2 === 0 ? "#B9404C" : "#5518A5"}`,
                  }}
                >
                  <h4 className="city">{grid.city ? grid.city : "----"}</h4>
                  <h3 className="country">{grid.country}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="last_blue_item">
            <div className="last_calendar_item">
              <div className="date_container">13 - 15 JULY</div>
              <div
                style={{ backgroundColor: "#2230A8", color: "white" }}
                className="country_container"
              >
                <h4 className="city">DOHA-QATAR</h4>
                <h3 className="country">2023-FINALS</h3>
              </div>
            </div>
            <div className="white_bg_item">
              <div className="item">
                <p>● ELITE16</p>
              </div>
              <div className="item">
                <p>● FINALS</p>
              </div>
              <div className="item">
                <p>● CHALLENGE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CalendarImage;
