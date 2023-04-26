import React from "react";
import { AiOutlineDown, AiFillCaretRight, AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiSearch, BiUpArrow } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import { FaBars, FaFacebookF } from "react-icons/fa";

import logo from "../../Assets/Images/logo.png";
import "./styles.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  const mobileView = useMediaQuery({
    query: "(max-width:425px)",
  });
  const mediumDevicesView = useMediaQuery({
    query: "(max-width:770px)",
  });
  const mediumSizedLaptopsView = useMediaQuery({
    query: "(max-width:1024px)",
  });
  const largeDevicesView = useMediaQuery({
    query: "(max-width:1440px)",
  });
  const extraLargeDevicesView = useMediaQuery({
    query: "(min-width:1440px)",
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
            <AiFillYoutube color="#013B5C" fontSize="35px" />
            <BsInstagram color="#013B5C" fontSize="20px" />
            <FaFacebookF color="#013b5c" fontSize="20px" />
          </div>
          <button className="auth_btn">
            <CgProfile style={{ fontSize: "18px" }} />
            Login/Sign up
          </button>
        </div>
        <div className="bars_container">
          <FaBars
            style={{
              cursor: "pointer",
            }}
          />
          <div className="medium_devices_links">
            <div className="each_link_item">
              <AiFillCaretRight style={{ color: "#00069a" }} />
              <p className="each_link_item_text">Events</p>
            </div>
            <div className="each_link_item">
              <AiFillCaretRight style={{ color: "#00069a" }} />
              <p className="each_link_item_text">Gallery</p>
            </div>
            <div className="each_link_item">
              <AiFillCaretRight style={{ color: "#00069a" }} />
              <p className="each_link_item_text">Newsroom</p>
            </div>
            <div className="each_link_item">
              <AiFillCaretRight style={{ color: "#00069a" }} />
              <p className="each_link_item_text">About us</p>
            </div>
            <div className="each_link_item">
              <AiFillCaretRight style={{ color: "#00069a" }} />
              <p className="each_link_item_text">Get Involved</p>
            </div>
          </div>
        </div>
        <div className="mobile_search_container">
          <input
            type="search"
            className="search_input"
            placeholder="I am looking for..."
          />
          <BiSearch style={{ marginLeft: "-30px", fontSize: "20px" }} />
        </div>
        {!showMenu ? (
          <FaBars
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
          />
        ) : (
          <BiUpArrow
            onClick={() => setShowMenu(!showMenu)}
            style={{
              fontSize: "25px",
              position: "absolute",
              top: "185px",
              cursor: "pointer",
              backgroundColor: "white",
              borderBottomRightRadius: "50%",
              padding: "20px",
              display: mediumDevicesView && "none",
            }}
          />
        )}
        {showMenu && (
          <div className="list_of_nav_items">
            <ul className="desktop_list_container">
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
        )}
      </div>
    </React.Fragment>
  );
}
