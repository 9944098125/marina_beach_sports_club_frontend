import React from "react";
import { AiOutlineDown, AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiSearch, BiUpArrow } from "react-icons/bi";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { useMediaQuery } from "react-responsive";
import { FaBars, FaFacebookF } from "react-icons/fa";

import logo from "../../Assets/Images/logo.png";
import "./styles.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  const mediumDevicesView = useMediaQuery({
    query: "(max-width:770px)",
  });
  const bigDevicesView = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <React.Fragment>
      {/* {!showTopLine && (
        <div className="register_for_free_popup">
          <p className="text">Register For Free</p>
          <AiOutlineClose
            style={{
              color: "white",
              position: "absolute",
              right: "10px",
              fontSize: "15px",
              cursor: "pointer",
            }}
            onClick={closeTopLine}
          />
        </div>
      )} */}
      <div className="main_nav">
        <div className="div_with_logo">
          <div className="img_logos_container">
            <img src={logo} alt="logo" />
            <AiFillYoutube
              color="#013B5C"
              fontSize="35px"
              className="social_media_icons"
            />
            <BsInstagram
              color="#013B5C"
              fontSize="20px"
              className="social_media_icons"
            />
            <FaFacebookF
              color="#013b5c"
              fontSize="20px"
              className="social_media_icons"
            />
          </div>
          <button className="auth_btn">
            <CgProfile style={{ fontSize: "18px" }} />
            Login/Sign up
          </button>
        </div>
        {!bigDevicesView && (
          <div className="icons_bars_container">
            <div className="icons_container">
              <AiFillYoutube color="#013B5C" fontSize="35px" />
              <BsInstagram color="#013B5C" fontSize="20px" />
              <FaFacebookF color="#013b5c" fontSize="20px" />
            </div>
            <div className="bars_container">
              <HiOutlineBars3CenterLeft fontSize="25px" />
              <div className="medium_devices_links">
                <div className="each_link_item">
                  <p className="each_link_item_text">Events</p>
                  <AiOutlineDown fontSize="15px" color="black" />
                </div>
                <hr />
                <div className="each_link_item">
                  <p className="each_link_item_text">Gallery</p>
                  <AiOutlineDown fontSize="15px" color="black" />
                </div>
                <hr />
                <div className="each_link_item">
                  <p className="each_link_item_text">Newsroom</p>
                  <AiOutlineDown fontSize="15px" color="black" />
                </div>
                <hr />
                <div className="each_link_item">
                  <p className="each_link_item_text">About us</p>
                  <AiOutlineDown fontSize="15px" color="black" />
                </div>
                <hr />
                <div className="each_link_item">
                  <p className="each_link_item_text">Get Involved</p>
                  <AiOutlineDown fontSize="15px" color="black" />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <div className="mobile_search_container">
          <input
            type="search"
            className="search_input"
            placeholder="I am looking for..."
          />
          <BiSearch style={{ marginLeft: "-30px", fontSize: "20px" }} />
        </div> */}
        {!showMenu ? (
          <p
            onClick={() => setShowMenu(!showMenu)}
            style={{
              fontSize: "25px",
              position: "absolute",
              cursor: "pointer",
              backgroundColor: "white",
              borderBottomRightRadius: "50%",
              padding: "20px",
              display: mediumDevicesView && "none",
            }}
          >
            <FaBars />
          </p>
        ) : (
          <>
            <p
              onClick={() => setShowMenu(!showMenu)}
              style={{
                fontSize: "25px",
                position: "absolute",
                top: "150px",
                cursor: "pointer",
                backgroundColor: "white",
                borderBottomRightRadius: "50%",
                padding: "20px",
                display: mediumDevicesView && "none",
              }}
            >
              <BiUpArrow />
            </p>

            <div className="list_of_desktop_nav_items">
              <ul className="desktop_list_container1">
                <li className="list_item">
                  <p className="list_item_text">Events</p>
                  <AiOutlineDown />
                </li>
                <li className="list_item">
                  <p className="list_item_text">Gallery</p>
                  <AiOutlineDown />
                </li>
                <li className="list_item">
                  <p className="list_item_text">Newsroom</p>
                  <AiOutlineDown />
                </li>
                <li className="list_item">
                  <p className="list_item_text">About Us</p>
                  <AiOutlineDown />
                </li>
                <li className="list_item">
                  <p className="list_item_text">Get Involved</p>
                  <AiOutlineDown />
                </li>
              </ul>
              <div className="search_container">
                <input
                  type="search"
                  className="search_input"
                  placeholder="I am looking for..."
                />
                <BiSearch style={{ marginLeft: "-30px", fontSize: "20px" }} />
              </div>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
}
