import React from "react";
import { AiOutlineDown, AiFillYoutube, AiOutlineClose } from "react-icons/ai";
import { BsInstagram, BsChevronDown } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiSearch, BiUpArrow } from "react-icons/bi";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { useMediaQuery } from "react-responsive";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../Assets/Images/logo.png";
import "./styles.css";

export default function Navbar() {
  const mediumDevicesView = useMediaQuery({
    query: "(max-width:1000px)",
  });

  const [showMediumDevicesSideMenu, setShowMediumDevicesSideMenu] =
    React.useState(false);

  function openMediumDevicesSideMenu() {
    setShowMediumDevicesSideMenu(true);
  }

  function closeMediumDevicesSideMenu() {
    setShowMediumDevicesSideMenu(false);
  }

  return (
    <React.Fragment>
      <div className="navbar_container">
        <div className="logo_social_media_icons_container">
          <div className="logo_container">
            <img src={logo} alt="" className="logo_img" />
          </div>
          <div className="social_media_icons_container">
            <AiFillYoutube color="#013B5C" fontSize="30px" />
            <BsInstagram color="#013B5C" fontSize="20px" />
            <FaFacebookF color="#013B5C" fontSize="20px" />
          </div>
        </div>
        {!mediumDevicesView && (
          <div className="search_input_container">
            <input type="search" placeholder="I am looking for..." />
          </div>
        )}
        {mediumDevicesView && (
          <div className="medium_devices_bars_container">
            <HiOutlineBars3CenterLeft
              onClick={openMediumDevicesSideMenu}
              fontSize="25px"
              color="#013B5C"
              style={{ cursor: "pointer" }}
            />
            {showMediumDevicesSideMenu && (
              <div className="medium_devices_side_menu">
                <div className="side_menu_logo_container">
                  <img src={logo} alt="" className="side_menu_logo_img" />
                  <AiOutlineClose
                    style={{ cursor: "pointer" }}
                    fontSize="25px"
                    color="black"
                    onClick={closeMediumDevicesSideMenu}
                  />
                </div>
                <ul className="medium_devices_menu_items_container">
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    <li
                      className="medium_devices_menu_item"
                      onClick={closeMediumDevicesSideMenu}
                    >
                      <p>Home</p>
                      <BsChevronDown color="rgb(59, 57, 57)" fontSize="25px" />
                    </li>
                  </Link>
                  <Link
                    to="/news-events"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    <li
                      className="medium_devices_menu_item"
                      onClick={closeMediumDevicesSideMenu}
                    >
                      <p>Events</p>
                      <BsChevronDown color="rgb(59, 57, 57)" fontSize="25px" />
                    </li>
                  </Link>
                  <Link
                    to="/gallery"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    <li
                      className="medium_devices_menu_item"
                      onClick={closeMediumDevicesSideMenu}
                    >
                      <p>Gallery</p>
                      <BsChevronDown color="rgb(59, 57, 57)" fontSize="25px" />
                    </li>
                  </Link>
                  <Link
                    to="newsroom"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    <li
                      className="medium_devices_menu_item"
                      onClick={closeMediumDevicesSideMenu}
                    >
                      <p>Newsroom</p>
                      <BsChevronDown color="rgb(59, 57, 57)" fontSize="25px" />
                    </li>
                  </Link>
                  <Link
                    to="/about"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    <li
                      className="medium_devices_menu_item"
                      onClick={closeMediumDevicesSideMenu}
                    >
                      <p>About us</p>
                      <BsChevronDown color="rgb(59, 57, 57)" fontSize="25px" />
                    </li>
                  </Link>
                  <Link
                    to="/get-involved"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    <li
                      className="medium_devices_menu_item"
                      onClick={closeMediumDevicesSideMenu}
                    >
                      <p>Get Involved</p>
                      <BsChevronDown color="rgb(59, 57, 57)" fontSize="25px" />
                    </li>
                  </Link>
                </ul>
                <div className="search_input_container">
                  <input type="search" placeholder="I am looking for..." />
                </div>
                <div className="medium_devices_login_btn_container">
                  <button className="login_btn">
                    <CgProfile fontSize="18px" />
                    Login/Sign up
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="login_btn_container">
          <button className="login_btn">
            <CgProfile fontSize="18px" />
            Login/Sign up
          </button>
        </div>
        <ul className="menu_items_container">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li className="menu_item">
              Home <BsChevronDown color="rgb(59, 57, 57)" fontSize="12px" />
            </li>
          </Link>
          <Link
            to="/news-events"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="menu_item">
              Events <BsChevronDown color="rgb(59, 57, 57)" fontSize="12px" />
            </li>
          </Link>
          <Link
            to="/gallery"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="menu_item">
              Gallery <BsChevronDown color="rgb(59, 57, 57)" fontSize="12px" />
            </li>
          </Link>
          <Link
            to="/newsroom"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="menu_item">
              Newsroom <BsChevronDown color="rgb(59, 57, 57)" fontSize="12px" />
            </li>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="menu_item">
              About us <BsChevronDown color="rgb(59, 57, 57)" fontSize="12px" />
            </li>
          </Link>
          <Link
            to="/get-involved"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="menu_item">
              Get Involved{" "}
              <BsChevronDown color="rgb(59, 57, 57)" fontSize="12px" />
            </li>
          </Link>
        </ul>
      </div>
    </React.Fragment>
  );
}
